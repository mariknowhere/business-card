import React, { FC } from "react";
import { IContactsBlockProps } from "./ContactsBlockTypes";
import Header from "../../components/header/Header";
import Text from "../../components/text/Text";
import { TextVariantEnum } from "../../components/text/TextTypes";
import Image from "../../components/image/Image";
import styles from './ContactsBlock.module.scss';
import Button from "../../components/button/Button";
import Social from "../../components/social/Social";

const ContactsBlock: FC<IContactsBlockProps> = ({ title, topic, description, socials,
    subDescription, image, form, blockId, buttonText }) => {
    return (
        <div className={styles['contacts-block']} key={blockId}>
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
                        <Social {...social} key={social.href} />
                    ))}
                </div>
                <Text children={subDescription} variant={TextVariantEnum.S} />
                <form action='#' id={form.id} className={styles['contacts-block-form']} >
                    {form.inputs.map(({ content, name, id, type }) => (
                        <div className={styles['contacts-block-input-wrapper']} key={id}>
                            <input required type={type} id={id} name={name} className={styles['contacts-block-input']}/>
                            <label htmlFor={id} className={styles['contacts-block-label']}>{content}</label>
                        </div>
                    ))}
                    <div className={styles['contacts-block-textarea-wrapper']}>
                        <textarea
                            name={form.text.name}
                            id={form.text.id}
                            className={styles['contacts-block-textarea']}
                        />
                        <label htmlFor={form.text.id} className={styles['contacts-block-label']}>
                            {form.text.content}
                        </label>
                    </div>
                    <Button label={buttonText} />
                </form>
            </div>
        </div>
    );
};

export default ContactsBlock;
