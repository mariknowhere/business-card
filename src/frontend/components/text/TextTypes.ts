export enum TextVariantEnum {
    L = 'l',
    M = 'm',
    S = 's',
}

export interface ITextProps {
    children: string;
    variant?: TextVariantEnum;
    classname?: string;
}
