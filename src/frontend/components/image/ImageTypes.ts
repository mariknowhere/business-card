export interface IImageProps {
    url: string;
    alt?: string;
    width?: number;
    height?: number;
    className?: string;
    onClick?: () => void;
}
