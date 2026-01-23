"use client";
import Image from "next/image";
import { useState } from "react";
import FeaturesTabItem from "./featurestab-item";
import featuresTabData from "./featurestab-data";
import { motion } from "framer-motion";

const FeaturesTab = () => {
  const [currentTab, setCurrentTab] = useState("tabOne");

  return (
    <>
      {/* ===== Features Tab Start ===== */}
      <section className="relative pb-20 pt-18.5 lg:pb-22.5">
  <div className="relative mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">

    {/* MAIN CONTENT */}
    {/* tabs, titles, images, etc */}

    {/* Decorative SVG – BELOW ALL CONTENT */}
    <div className="pointer-events-none absolute bottom-20 left-1/2 z-0 -translate-x-1/2 w-full flex justify-center">
      <div className="relative h-[350px] w-[90%]">
        <Image
          src="/images/shape/shape-dotted-light.svg"
          alt="Dotted Shape Light"
          fill
          className="object-contain dark:hidden"
        />
        <Image
          src="/images/shape/shape-dotted-dark.svg"
          alt="Dotted Shape Dark"
          fill
          className="hidden object-contain dark:block"
        />
      </div>
    </div>

          {/* Tab Menus */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: -20 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="animate_top mb-15 flex flex-wrap justify-center rounded-[10px] border border-stroke bg-card shadow-solid-5 dark:border-strokedark dark:bg-blacksection dark:shadow-solid-6 md:flex-nowrap md:items-center lg:gap-7.5 xl:mb-21.5 xl:gap-12.5"
          >
            {["tabOne", "tabTwo", "tabThree"].map((tab, index) => {
              const titles = [
                "Administrator Dashboard",
                "Doctor Dashboard",
                "Finance Dashboard",
              ];
              return (
                <div
                  key={tab}
                  onClick={() => setCurrentTab(tab)}
                  className={`relative flex w-full cursor-pointer items-center gap-4 border-b border-stroke px-6 py-2 last:border-0 dark:border-strokedark md:w-auto md:border-0 xl:px-13.5 xl:py-5 ${
                    currentTab === tab
                      ? "active before:absolute before:bottom-0 before:left-0 before:h-1 before:w-full before:rounded-tl-[4px] before:rounded-tr-[4px] before:bg-primary"
                      : ""
                  }`}
                >
                  <div className="flex h-12.5 w-12.5 items-center justify-center rounded-full border border-stroke dark:border-strokedark dark:bg-blacksection">
                    <p className="text-metatitle3 font-medium text-black dark:text-white">
                      {`0${index + 1}`}
                    </p>
                  </div>
                  <div className="md:w-3/5 lg:w-auto">
                    <button className="text-sm font-medium text-black dark:text-white xl:text-regular">
                      {titles[index]}
                    </button>
                  </div>
                </div>
              );
            })}
          </motion.div>
          {/* Tab Menus End */}

          {/* Tab Content */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: -20 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
            className="animate_top mx-auto max-w-c-1154"
          >
            {featuresTabData.map((feature, key) => (
              <div
                className={feature.id === currentTab ? "block" : "hidden"}
                key={key}
              >
                <FeaturesTabItem featureTab={feature} />
              </div>
            ))}
          </motion.div>
          {/* Tab Content End */}
        </div>
      </section>
      {/* ===== Features Tab End ===== */}
    </>
  );
};

export default FeaturesTab;
