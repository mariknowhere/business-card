import {IMenuProps} from "../../components/hamburgerMenu/menu/MenuTypes";
import {IImageProps} from "../../components/image/ImageTypes";

export interface IBannerProps extends IMenuProps {
    hamburgerMenuImage: IImageProps;
}
