import { Dispatch, SetStateAction } from "react";

export interface IHamburgerMenuProps {
    menuActive: boolean;
    setMenuActive: Dispatch<SetStateAction<boolean>>;
}
