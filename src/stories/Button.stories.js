import Button from "../components/Button";

export default {
  component: Button,
};

export const PrimaryButton = {
  args: {
    children: "Primary Button",
  },
  a11y: {
    manual: true,
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/design/9DjY1Y8aOWPHvRtICZKS0t/bookmark-landing-page?node-id=4-30&t=gZQH83JvzhS5qchd-4",
    },
  },
};

export const SecondaryButton = {
  args: {
    children: "Secondary Button",
    color: "secondary",
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/design/9DjY1Y8aOWPHvRtICZKS0t/bookmark-landing-page?node-id=4-29&t=gZQH83JvzhS5qchd-4",
    },
  },
};

export const NeutralButton = {
  args: {
    children: "Neutral Button",
    color: "neutral",
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/design/9DjY1Y8aOWPHvRtICZKS0t/bookmark-landing-page?node-id=4-28&t=gZQH83JvzhS5qchd-4",
    },
  },
};
