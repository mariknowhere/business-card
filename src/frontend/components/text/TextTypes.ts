export enum TextVariantEnum {
    L = 'l',
    M = 'm',
    S = 's',
    XS = 'xs'
}

export interface ITextProps {
    children: string;
    variant?: TextVariantEnum;
    className?: string;
}
