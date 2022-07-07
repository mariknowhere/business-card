import React, { ChangeEvent, FC, useState } from "react";
import { IContactsBlockProps } from "./ContactsBlockTypes";
import Header from "../../components/header/Header";
import Text from "../../components/text/Text";
import { TextVariantEnum } from "../../components/text/TextTypes";
import Image from "../../components/image/Image";
import styles from './ContactsBlock.module.scss';
import Button from "../../components/button/Button";
import Social from "../../components/social/Social";

const ContactsBlock: FC<IContactsBlockProps> = ({
    title,
    topic,
    description,
    socials,
    subDescription,
    image,
    form,
    blockId,
    buttonText,
    emailSentSuccessfully,
    emailSentUnsuccessfully,
}) => {
    const [message, setMessage] = useState('');
    const [nameState, setNameState] = useState('');
    const [isEmailSend, setEmailSend] = useState(false);
    const [isButtonClick, setButtonClick] = useState(false);

    const onMessageChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        setMessage(event.target.value);
    };

    const onNameChange = (event: ChangeEvent<HTMLInputElement>) => {
        setNameState(event.target.value);
    };

    const onButtonClickHandler = (event) => {
        setButtonClick(true);

        if (message && nameState) {
            setEmailSend(!isEmailSend)
            event.preventDefault();
        }
    }

    return (
        <section className={styles['contacts-block']} id={blockId}>
            <Image {...image} />
            <div>
                <Header topicText={topic} titleText={title} classNameTitle={styles['contacts-block-header-title']}
                        classNameTopic={styles['contacts-block-header-topic']} />
                <Text
                    children={description}
                    variant={TextVariantEnum.S}
                    className={styles['contacts-block-header-description']}
                />
                <div className={styles['contacts-block-socials']}>
                    {socials.map((social) => (
                        <Social {...social} key={social.href} className={styles['contacts-block-social']} />
                    ))}
                </div>
                <Text children={subDescription} variant={TextVariantEnum.S} />
                <form action='#' id={form.id} className={styles['contacts-block-form']} >
                    {form.inputs.map(({ content, name, id, type }) => (
                        <div className={styles['contacts-block-input-wrapper']} key={id}>
                            <input required type={type} id={id} name={name} className={styles['contacts-block-input']} onChange={onNameChange}/>
                            <label htmlFor={id} className={styles['contacts-block-label']}>{content}</label>
                        </div>
                    ))}
                    <div className={styles['contacts-block-textarea-wrapper']}>
                        <textarea
                            name={form.text.name}
                            id={form.text.id}
                            className={styles['contacts-block-textarea']}
                            value={message}
                            onChange={onMessageChange}
                        />
                        <label htmlFor={form.text.id} className={styles['contacts-block-label']}>
                            {form.text.content}
                        </label>
                    </div>
                    <div onClick={onButtonClickHandler}>
                        <Button label={buttonText} />
                    </div>
                    {isButtonClick && (
                        <>
                            {isEmailSend ? (
                                <Text className={styles['contacts-block-email-sent-successfully']} variant={TextVariantEnum.L}>{emailSentSuccessfully}</Text>
                            ) : (
                                <Text className={styles['contacts-block-email-sent-unsuccessfully']} variant={TextVariantEnum.M}>{emailSentUnsuccessfully}</Text>
                            )}
                        </>
                    )}
                </form>
            </div>
        </section>
    );
};

export default ContactsBlock;
