import PropTypes from "prop-types";
import React from "react";
import featureIconData from "../../data/feature-icons/feature-icon-two.json";
import FeatureIconTwoSingle from "../../components/feature-icon/FeatureIconTwoSingle.js";
import welcomeText from "../../data/pages/home/welcome.json";
import ColumnLayout from "../../components/containers/ColumnLayout";

const FeatureIconTwo = ({ spaceTopClass, spaceBottomClass }) => {
  return (
    <div
      className={`support-area ${spaceTopClass ? spaceTopClass : ""} ${
        spaceBottomClass ? spaceBottomClass : ""
      }`}
    >
      <div className="container">
        <ColumnLayout data={welcomeText[0]} />
      
        <div className="row feature-icon-two-wrap">
         
          {featureIconData &&
            featureIconData.map((single, key) => {
              return (
                <FeatureIconTwoSingle
                  data={single}
                  spaceBottomClass="mb-30"
                  textAlignClass="text-center"
                  key={key}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
};

FeatureIconTwo.propTypes = {
  spaceBottomClass: PropTypes.string,
  spaceTopClass: PropTypes.string
};

export default FeatureIconTwo;
