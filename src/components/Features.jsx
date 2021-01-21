import Section from "atoms/Section";
import Tiles from "atoms/Tiles";
import React from "react";

import Fade from "react-reveal/Fade";

import FeatureIcon01 from "assets/images/feature-tile-icon-01.svg";
import FeatureIcon02 from "assets/images/feature-tile-icon-02.svg";
import FeatureIcon03 from "assets/images/feature-tile-icon-03.svg";

const Features = () => {
  return (
    <Section className="features-tiles">
      <div className="container">
        <div className="features-tiles-inner section-inner">
          <Fade bottom delay={700}>
            <div className="tiles-wrap">
              <Tiles
                icon={FeatureIcon01}
                title="Branch Tracking"
                desc="A pseudo-Latin text used in web
                            design, layout, and printing in
                            place of things to emphasise
                            design."
              ></Tiles>
              <Tiles
                icon={FeatureIcon02}
                title="Limitless Checkpoints"
                desc="A pseudo-Latin text used in web
                            design, layout, and printing in
                            place of things to emphasise
                            design."
              ></Tiles>
              <Tiles
                icon={FeatureIcon03}
                title="Integrated System"
                desc="A pseudo-Latin text used in web
                            design, layout, and printing in
                            place of things to emphasise
                            design."
              ></Tiles>
            </div>
          </Fade>
        </div>
      </div>
    </Section>
  )
}

export default Features;
