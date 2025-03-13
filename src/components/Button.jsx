import {
  Button as AriaButton,
  composeRenderProps,
} from "react-aria-components";
import { tv } from "tailwind-variants";
import useSound from "use-sound";

import click from "../assets/sound/button-click.wav";

const button = tv({
  base: [
    "text-dark shadow-button inset-shadow-[0px_0px_48px_48px] font-medium px-4 relative tracking-widest cursor-pointer rounded h-12 text-center transition-all duration-300",
    "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 pressed:scale-95",
    "hover:inset-shadow-[0px_0px_0px_2px]",
  ],
  variants: {
    color: {
      primary: "text-white inset-shadow-primary hover:text-primary",
      secondary: "text-white inset-shadow-secondary hover:text-secondary",
      neutral: "text-dark/80 inset-shadow-neutral hover:inset-shadow-muted",
    },
  },
  defaultVariants: {
    color: "primary",
  },
});

const Button = ({ children, className, ...rest }) => {
  const [play] = useSound(click, { volume: 0.75 });
  return (
    <AriaButton
      {...rest}
      onPressStart={play}
      className={composeRenderProps(className, (className, renderProps) =>
        button({ ...renderProps, className, ...rest })
      )}
    >
      {children}
    </AriaButton>
  );
};

export default Button;
