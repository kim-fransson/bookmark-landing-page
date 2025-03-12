import {
  Button as AriaButton,
  composeRenderProps,
} from "react-aria-components";
import { tv } from "tailwind-variants";
import useSound from "use-sound";

import click from "../assets/sound/button-click.wav";

const button = tv({
  base: [
    "text-dark shadow-button font-medium px-4 tracking-widest cursor-pointer rounded h-12 text-center transition-all duration-300",
    "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 pressed:scale-95",
  ],
  variants: {
    color: {
      primary:
        "text-white inset-shadow-primary-button hover:inset-shadow-active-primary-button hover:text-primary",
      secondary:
        "text-white inset-shadow-secondary-button hover:inset-shadow-active-secondary-button hover:text-secondary",
      neutral:
        "text-dark inset-shadow-neutral-button hover:inset-shadow-active-neutral-button",
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
