import { PropsWithChildren } from "react";
import { Button } from "./Button";

interface Props {
    theme: 'light' | 'dark';
}

export function SwitchThemeButton({ theme, children }: PropsWithChildren<Props>) {
    const handleClick = () => {
        const shouldChangeTheme = confirm(`Você deseja selecionar o tema ${theme}?`);

        if (!shouldChangeTheme) {
            return;
        }

        document.body.classList.add(`${theme}-theme`);
        const themeToRemove = theme === 'light' ? 'dark' : 'light';
        document.body.classList.remove(`${themeToRemove}-theme`);
    }

    return (
        <Button onClick={handleClick}>
            {children}
        </Button>
    );
}