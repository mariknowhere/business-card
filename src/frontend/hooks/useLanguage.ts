import {useEffect, useState} from "react";
import {select} from "../constants/language";

export const useLanguage = () => {
    const [language, setLanguage] = useState('ru');

    useEffect(() => {
        const selectElement = document.querySelector(select);

        selectElement?.addEventListener('change', languageChangeState);

        function languageChangeState() {
            const { value } = selectElement;

            setLanguage(value)
        }
    }, [])

    return language;
}
