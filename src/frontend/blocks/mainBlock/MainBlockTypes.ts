import {IBlockProps} from "../BlocksTypes";
import {ISelectProps} from "../../components/select/SelectTypes";

export interface IMainBlockProps extends IBlockProps {
    buttonText: string;
    select: ISelectProps;
    description?: string;
    blockIdToScroll?: string;
    secondaryButtonText?: string;
    secondaryBlockIdToScroll?: string
}
