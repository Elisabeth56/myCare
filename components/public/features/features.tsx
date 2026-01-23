"use client";
import React from "react";
import featuresData from "./features-data";
import SingleFeature from "./single-feature";
import SectionHeader from "../section-header";

const Feature = () => {
  return (
    <>
      {/* <!-- ===== Features Start ===== --> */}
      <section id="features" className="py-20 lg:py-25 xl:py-30">
        <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
          {/* <!-- Section Title Start --> */}
          <SectionHeader
            headerInfo={{
              title: "MYCARE FEATURES",
              subtitle: "Core Features of myCare",
              description: `Core workflows like patient records, appointments, billing, and 
              role-based dashboards work end-to-end, while sensitive data is mocked for safety.`,
            }}
          />
          {/* <!-- Section Title End --> */}

          <div className="mt-12 grid grid-cols-1 gap-7 md:grid-cols-2 lg:mt-15 lg:grid-cols-3 xl:mt-20 xl:gap-12">
            {/* <!-- Features item Start --> */}

            {featuresData.map((feature, key) => (
              <SingleFeature feature={feature} key={key} />
            ))}
            {/* <!-- Features item End --> */}
          </div>
        </div>
      </section>

      {/* <!-- ===== Features End ===== --> */}
    </>
  );
};

export default Feature;