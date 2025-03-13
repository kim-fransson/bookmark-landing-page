import {
  Tabs,
  TabList,
  Tab,
  TabPanel as AriaTabPanel,
} from "react-aria-components";
import Button from "./Button";
import { tv } from "tailwind-variants";

import illustrationFeaturesTab1 from "../assets/images/illustration-features-tab-1.svg";
import illustrationFeaturesTab2 from "../assets/images/illustration-features-tab-2.svg";
import illustrationFeaturesTab3 from "../assets/images/illustration-features-tab-3.svg";

const tabs = tv({
  slots: {
    base: ["text-dark"],
    h3: ["md:text-3xl text-2xl font-medium"],
    p: ["md:text-lg opacity-50"],
    img: ["max-w-[311px] h-[201px] md:max-w-[536px] md:h-[346px] w-full"],
  },
});

const { base, h3, p, img } = tabs();

const tabData = [
  {
    id: "sb",
    title: "Bookmark in one click",
    description:
      "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favorites sites.",
    imgSrc: illustrationFeaturesTab1,
  },
  {
    id: "ss",
    title: "Intelligent Search",
    description:
      "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.",
    imgSrc: illustrationFeaturesTab2,
  },
  {
    id: "es",
    title: "Share your bookmarks",
    description:
      "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.",
    imgSrc: illustrationFeaturesTab3,
  },
];

const FeaturesTab = () => {
  return (
    <Tabs className={base()}>
      <TabList aria-label="History of Ancient Rome">
        {tabData.map((tab) => (
          <Tab key={tab.id} id={tab.id}>
            {tab.title}
          </Tab>
        ))}
      </TabList>
      {tabData.map((tab) => (
        <TabPanel
          key={tab.id}
          id={tab.id}
          title={tab.title}
          description={tab.description}
          imgSrc={tab.imgSrc}
        >
          <Button color="secondary">More info</Button>
        </TabPanel>
      ))}
    </Tabs>
  );
};

const TabPanel = ({ id, title, description, children, imgSrc }) => {
  return (
    <AriaTabPanel id={id}>
      <img src={imgSrc} alt="" className={img()} />
      <h3 className={h3()}>{title}</h3>
      <p className={p()}>{description}</p>
      {children}
    </AriaTabPanel>
  );
};

export default FeaturesTab;
