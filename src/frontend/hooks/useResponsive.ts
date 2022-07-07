import { ScreenStates } from "../constants/ScreenStates";
import { useCallback, useEffect, useState } from "react";

const minDesktopWidth = 1200;
const minTabletWidth = 768;
const maxTabletWidth = minDesktopWidth - 1;
const maxMobileWidth = minTabletWidth - 1;

export const useResponsive = (): ScreenStates => {
    const [responsive, setResponsive] = useState<ScreenStates>();

    const handleResize = useCallback(() => {
        const windowWidth = window.screen.width ? Math.min(window.innerWidth, window.screen.width) : window.innerWidth;

        if (windowWidth >= minDesktopWidth) {
            setResponsive(ScreenStates.Desktop);
        }

        if (windowWidth >= minTabletWidth && windowWidth <= maxTabletWidth) {
            setResponsive(ScreenStates.Tablet);
        }

        if (windowWidth <= maxMobileWidth) {
            setResponsive(ScreenStates.Mobile);
        }
    }, []);

    useEffect(() => {
        handleResize();

        window.addEventListener('resize', handleResize);

        return (): void => {
            window.removeEventListener('resize', handleResize);
        };
    }, [handleResize]);

    return responsive;
}