export enum ButtonTypeEnum {
    Primary = 'primary',
}

export interface IButtonProps {
    label: string;
    className?: string;
    onClick?: () => void;
    type?: ButtonTypeEnum;
}
