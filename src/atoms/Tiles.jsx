import React from "react";
import propTypes from "prop-types";

const Tiles = (params) => {
  const className = ["tiles-item"]
  className.push(params.className)

  return (
    <div className={className.join(" ")}>
      <div class="tiles-item-inner">
        <div class="features-tiles-item-header">
          <div class="features-tiles-item-image mb-16">
            <img
              src={params.icon}
              alt="features"
              width="64"
              height="64"
            />
          </div>
        </div>
        <div class="features-tiles-item-content">
          <h4 class="mt-0 mb-8">{params.title}</h4>
          <p class="m-0 text-sm">
            {params.desc}
          </p>
        </div>
      </div>
    </div>
  );
};

Tiles.propTypes = {
  className: propTypes.string,
  icon: propTypes.string,
  title: propTypes.string,
  desc: propTypes.string,
};

export default Tiles;
