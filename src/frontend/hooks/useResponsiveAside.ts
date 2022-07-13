import { ScreenStates } from "../constants/ScreenStates";
import { useCallback, useEffect, useState } from "react";

const minDesktopWidth = 1300;

export const useResponsiveAside = (): ScreenStates => {
    const [responsive, setResponsive] = useState<ScreenStates>();

    const handleResize = useCallback(() => {
        const windowWidth = window.screen.width ? Math.min(window.innerWidth, window.screen.width) : window.innerWidth;

        if (windowWidth >= minDesktopWidth) {
            setResponsive(ScreenStates.Desktop);
        }

        if (windowWidth < minDesktopWidth) {
            return setResponsive(null);
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