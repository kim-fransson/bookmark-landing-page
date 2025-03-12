import { Link as AriaLink, composeRenderProps } from "react-aria-components";
import { tv } from "tailwind-variants";

const link = tv({
  base: [
    "cursor-pointer uppercase rounded transition-all duration-300 tracking-widest hover:text-primary",
    "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500",
    "lg:text-base text-xl",
  ],
});

const Link = ({ children, className, ...rest }) => {
  return (
    <AriaLink
      {...rest}
      className={composeRenderProps(className, (className, renderProps) =>
        link({ ...renderProps, className, ...rest })
      )}
    >
      {children}
    </AriaLink>
  );
};

export default Link;
