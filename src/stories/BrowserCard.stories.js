import BrowserCard from "../components/BrowserCard";

export default {
  component: BrowserCard,
};

export const ChromeBrowserCard = {
  args: {
    browser: "chrome",
    minVersion: 62,
    headline: "Add to Chrome",
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/design/9DjY1Y8aOWPHvRtICZKS0t/bookmark-landing-page?node-id=92-54&t=rGpx5JSqzH8DczMX-4",
    },
  },
};

export const FirefoxBrowserCard = {
  args: {
    browser: "firefox",
    minVersion: 55,
    headline: "Add to Firefox",
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/design/9DjY1Y8aOWPHvRtICZKS0t/bookmark-landing-page?node-id=105-91&t=DLcgtScEyevaRLr4-4",
    },
  },
};

export const OperaBrowserCard = {
  args: {
    browser: "opera",
    minVersion: 46,
    headline: "Add to Opera",
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/design/9DjY1Y8aOWPHvRtICZKS0t/bookmark-landing-page?node-id=105-122&t=DLcgtScEyevaRLr4-4",
    },
  },
};
