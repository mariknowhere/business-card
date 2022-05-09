import React, { FC } from "react";
import Image from "../../components/image/Image";
import {IHeaderProps} from "./HeaderTypes";

const Header: FC<IHeaderProps> = ({ image }) => {
    return (
        <>
            <Image {...image} />
        </>
    );
};

export default Header;
