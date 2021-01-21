import Card from "atoms/Card";
import CardContent from "atoms/CardContent";
import Section from "atoms/Section";
import React from "react";

import Fade from "react-reveal/Fade";

const Prices = () => {
  return (
    <Fade delay={500}>
      <Section className="pricing">
        <div className="container">
          <div className="pricing-inner section-inner has-top-divider">
            <div className="section-header center-content">
              <div className="container-xs">
                <h2 className="mt-0 mb-16">Simple, Transparent, Trusted</h2>
                <p className="m-0">
                  Lorem ipsum is common placeholder text used to demonstrate the
                  graphic elements of a document or visual presentation.
                </p>
              </div>
            </div>

            {/* CARD CONTENT */}
            <div className="tiles-wrap">
              <Card price="39.99" subtitle="Basic">
                <CardContent isChecked desc="Source Code"></CardContent>
                <CardContent isChecked desc="Monthly Access"></CardContent>
                <CardContent isChecked desc="Certificate"></CardContent>
                <CardContent desc="Community"></CardContent>
                <CardContent desc="Webinar"></CardContent>
                <CardContent desc="Portfolios"></CardContent>
              </Card>

              <Card price="149.99" subtitle="Professional">
                <CardContent isChecked desc="Source Code"></CardContent>
                <CardContent isChecked desc="Monthly Access"></CardContent>
                <CardContent isChecked desc="Certificate"></CardContent>
                <CardContent isChecked desc="Community"></CardContent>
                <CardContent isChecked desc="Webinar"></CardContent>
                <CardContent desc="Portfolios"></CardContent>
              </Card>

              <Card price="249.99" subtitle="Enterprise">
                <CardContent isChecked desc="Source Code"></CardContent>
                <CardContent isChecked desc="Monthly Access"></CardContent>
                <CardContent isChecked desc="Certificate"></CardContent>
                <CardContent isChecked desc="Community"></CardContent>
                <CardContent isChecked desc="Webinar"></CardContent>
                <CardContent isChecked desc="Portfolios"></CardContent>
              </Card>
            </div>
          </div>
        </div>
      </Section>
    </Fade>
  );
};

export default Prices;
