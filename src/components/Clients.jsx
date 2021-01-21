import Section from "atoms/Section";
import React from "react";
import Fade from 'react-reveal/Fade';

import Client01 from "assets/images/clients-01.svg";
import Client02 from "assets/images/clients-02.svg";
import Client03 from "assets/images/clients-03.svg";
import Client04 from "assets/images/clients-04.svg";
import Client05 from "assets/images/clients-05.svg";

const Clients = () => {
  return (
    <Fade bottom delay={200}>
      <Section className="clients">
        <div class="container">
          <div class="clients-inner section-inner has-top-divider has-bottom-divider">
            <ul class="list-reset">
              <li>
                <img src={Client01} alt="Clients 01" />
              </li>
              <li>
                <img src={Client02} alt="Clients 02" />
              </li>
              <li>
                <img src={Client03} alt="Clients 03" />
              </li>
              <li>
                <img src={Client04} alt="Clients 04" />
              </li>
              <li>
                <img src={Client05} alt="Clients 05" />
              </li>
            </ul>
          </div>
        </div>
      </Section>
    </Fade>
  );
};

export default Clients;
