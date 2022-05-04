export enum ButtonTypeEnum {
    Primary = 'primary',
    Secondary = 'secondary'
}

export interface IButtonProps {
    label: string;
    classname?: string;
    onClick?: () => void;
    type?: ButtonTypeEnum;
}