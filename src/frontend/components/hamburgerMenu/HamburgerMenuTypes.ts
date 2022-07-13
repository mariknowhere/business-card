import { Dispatch, SetStateAction } from "react";
import {IImageProps} from "../image/ImageTypes";

export interface IHamburgerMenuProps {
    menuActive: boolean;
    setMenuActive: Dispatch<SetStateAction<boolean>>;
    image: IImageProps;
}
