import {IBlockProps} from "../BlocksTypes";

export interface IMainBlockProps extends IBlockProps {
    buttonText: string;
    description?: string;
    blockIdToScroll?: string;
    secondaryButtonText?: string;
    secondaryBlockIdToScroll?: string
}
