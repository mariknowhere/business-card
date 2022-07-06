import {IImageProps} from "../../components/image/ImageTypes";
import {IMenuProps} from "../../components/hamburgerMenu/menu/MenuTypes";

export interface IBannerProps extends IMenuProps {
    image: IImageProps;
}
