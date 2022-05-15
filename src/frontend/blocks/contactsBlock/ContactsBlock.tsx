import React, {FC} from "react";
import {IContactsBlockProps} from "./ContactsBlockTypes";
import Head from "../../components/head/Head";
import Text from "../../components/text/Text";
import {TextVariantEnum} from "../../components/text/TextTypes";
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
                <Head topicText={topic} titleText={title} classNameTitle={styles['contacts-block-head-title']}
                    classNameTopic={styles['contacts-block-head-topic']} />
                <Text children={description} variant={TextVariantEnum.S} />
                <div className={styles['contacts-block-socials']}>
                    {socials.map((social) => (
                        <Social {...social} />
                    ))}
                </div>
                <Text children={subDescription} variant={TextVariantEnum.S} />
                <form action='#' id={form.id} className={styles['contacts-block-form']} >
                    {form.inputs.map(({ content, name, id, type }) => (
                        <div className={styles['contacts-block-input-wrapper']}>
                            <input required type={type} id={id} name={name} className={styles['contacts-block-input']}/>
                            <label htmlFor={id} className={styles['contacts-block-label']}>{content}</label>
                        </div>
                    ))}
                    <div className={styles['contacts-block-textarea-wrapper']}>
                        <textarea name={form.text.name} id={form.text.id} className={styles['contacts-block-textarea']} />
                        <label htmlFor={form.text.id} className={styles['contacts-block-label']}>{form.text.content}</label>
                    </div>
                    <Button label={buttonText} />
                </form>
            </div>
        </div>
    );
};

export default ContactsBlock;
