import { tv } from "tailwind-variants";
import DottedLine from "../assets/images/bg-dots.svg?react";
import Button from "./Button";

import Chrome from "../assets/images/logo-chrome.svg?react";
import Firefox from "../assets/images/logo-firefox.svg?react";
import Opera from "../assets/images/logo-opera.svg?react";

const card = tv({
  slots: {
    base: [
      "max-w-[280px] text-dark h-[371px] bg-white shadow-card rounded-2xl flex flex-col px-6 pb-6 pt-12",
    ],
    icon: ["size-[100px] mx-auto mb-8"],
    h3: ["text-xl font-medium text-center mb-1 tracking-wide"],
    small: ["opacity-50 text-center text-sm tracking-wide"],
    dottedLine: ["mt-auto mb-6 -mx-6"],
    button: ["text-sm"],
  },
});

const { base, icon, h3, small, dottedLine, button } = card();

const renderBrowserIcon = (browser) => {
  switch (browser) {
    case "chrome":
      return <Chrome className={icon()} />;
    case "firefox":
      return <Firefox className={icon()} />;
    case "opera":
      return <Opera className={icon()} />;
    default:
      return null;
  }
};

const BrowserCard = ({ headline, minVersion, browser, className, ...rest }) => {
  return (
    <article {...rest} className={base(className)}>
      {renderBrowserIcon(browser)}
      <h3 className={h3()}>{headline}</h3>
      <small className={small()}>{`Minimum version ${minVersion}`}</small>
      <DottedLine className={dottedLine()} />
      <Button className={button()} color="secondary">
        Add & Install Extension
      </Button>
    </article>
  );
};

export default BrowserCard;
