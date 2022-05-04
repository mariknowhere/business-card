export enum ButtonTypeEnum {
    Primary = 'primary',
    Secondary = 'secondary'
}

export interface IButtonProps {
    label: string;
    className?: string;
    onClick?: () => void;
    type?: ButtonTypeEnum;
}