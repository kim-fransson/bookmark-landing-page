/* eslint-disable no-unused-vars */
import {
  Tabs,
  TabList,
  Tab,
  TabPanel as AriaTabPanel,
} from "react-aria-components";
import Button from "./Button";
import { tv } from "tailwind-variants";
import { AnimatePresence, motion } from "motion/react";

import illustrationFeaturesTab1 from "../assets/images/illustration-features-tab-1.svg";
import illustrationFeaturesTab2 from "../assets/images/illustration-features-tab-2.svg";
import illustrationFeaturesTab3 from "../assets/images/illustration-features-tab-3.svg";

const tabs = tv({
  slots: {
    base: ["text-dark space-y-[68px]"],
    tabList: ["flex flex-col divide-y"],
    tab: [
      "tracking-wider relative opacity-75 cursor-pointer text-center p-5 first:border-t last:border-b border-secondary/20",
      "selected:opacity-100",
    ],
    h3: ["md:text-3xl text-2xl font-medium text-center mb-3 text-balance"],
    p: ["md:text-lg opacity-50 text-center mb-5 text-balance"],
    imgWrapper: [
      "relative mb-20",
      "after:content-[''] after:bg-secondary after:absolute after:h-[203px] after:w-[577px] after:rounded-full after:-z-10",
      "after:top-[34px] after:left-[-266px]",
    ],
    img: [
      "max-w-[311px] h-[201px] md:max-w-[536px] md:h-[346px] w-full mx-auto",
    ],
    button: ["mx-auto block"],
  },
});

const { base, tabList, tab, h3, p, imgWrapper, img, button } = tabs();

const tabData = [
  {
    id: "sb",
    title: "Simple Bookmarking",
    panel: {
      title: "Bookmark in one click",
      description:
        "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favorites sites.",
      imgSrc: illustrationFeaturesTab1,
    },
  },
  {
    id: "ss",
    title: "Speedy Searching",
    panel: {
      title: "Intelligent Search",
      description:
        "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.",
      imgSrc: illustrationFeaturesTab2,
    },
  },
  {
    id: "es",
    title: "Easy Sharing",
    panel: {
      title: "Share your bookmarks",
      description:
        "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.",
      imgSrc: illustrationFeaturesTab3,
    },
  },
];

const FeaturesTab = () => {
  return (
    <Tabs className={base()}>
      <TabList className={tabList()} aria-label="features">
        {tabData.map(({ id, title }) => (
          <Tab className={tab()} key={id} id={id}>
            {({ isSelected }) => (
              <>
                {title}
                <AnimatePresence>
                  {isSelected && <ActiveIndicator />}
                </AnimatePresence>
              </>
            )}
          </Tab>
        ))}
      </TabList>
      {tabData.map((tab) => (
        <TabPanel
          key={tab.id}
          id={tab.id}
          title={tab.panel.title}
          description={tab.panel.description}
          imgSrc={tab.panel.imgSrc}
        >
          <Button className={button()} color="secondary">
            More info
          </Button>
        </TabPanel>
      ))}
    </Tabs>
  );
};

const TabPanel = ({ id, title, description, children, imgSrc }) => {
  return (
    <AriaTabPanel id={id}>
      <div className={imgWrapper()}>
        <img src={imgSrc} alt="" className={img()} />
      </div>
      <h3 className={h3()}>{title}</h3>
      <p className={p()}>{description}</p>
      {children}
    </AriaTabPanel>
  );
};

const ActiveIndicator = () => {
  return (
    <motion.div
      key="active-indicator"
      initial={{ width: 0 }}
      animate={{ width: "144px" }}
      transition={{
        type: "spring",
        bounce: 0.25,
        duration: 0.6,
      }}
      exit={{
        width: 0,
        transition: { duration: 0.25, ease: "easeInOut" },
      }}
      className="h-1 bg-primary absolute left-1/2 -translate-x-1/2 bottom-0"
    />
  );
};

export default FeaturesTab;
