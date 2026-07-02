import { PropsWithChildren } from "react";

interface Props {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export function Button({ children, onClick }: PropsWithChildren<Props>) {
  return (
    <button
      className="button"
      onClick={(event) => {
        event.stopPropagation();
        if (onClick) {
          onClick(event);
        }
      }}>
      {children}
    </button>
  );
}
