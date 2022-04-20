import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Button from '../elements/Button';


const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}
const FeaturesTiles = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  ...props
}) => {

  const outerClasses = classNames(
    'features-tiles section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-tiles-inner section-inner pt-0',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const tilesClasses = classNames(
    'tiles-wrap center-content',
    pushLeft && 'push-left'
  );

  const sectionHeader = {
    title: 'Our Services',
    paragraph: 'Design & development done right.Be it a mobile or web app, SaaS, or any other software solution, we have the skillset and expertise to turn your ideas into remarkable products.'
  };

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={tilesClasses}>



            <div className="tiles-item reveal-from-bottom" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <svg height="46" viewBox="0 0 60 46" width="60" xmlns="http://www.w3.org/2000/svg">
                      <g fill="none" fill-rule="evenodd" stroke="#9FB1E2" stroke-linecap="square" stroke-width="2">
                        <path d="M1 1h58v44H1zM21.5 18v16M13.5 30v4M45.5 13v21M29.5 24v10M37.5 28v6"></path>
                      </g>
                    </svg>
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Research
                  </h4>
                  <p className="m-0 text-sm">
                    We inform and inspire decisions using agile research methods.
                  </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom" data-reveal-delay="400">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <svg height="49" viewBox="0 0 56 49" width="56" xmlns="http://www.w3.org/2000/svg">
                      <g fill="none" fill-rule="evenodd" stroke="#69D7F1" stroke-linecap="square" stroke-width="2">
                        <path d="M1 1h54v47H1zM1 10.038h54M11.8 1v9.038"></path>
                        <path d="M20.8 22.692l-5.4 5.423 5.4 5.423M35.2 22.692l5.4 5.423-5.4 5.423"></path>
                      </g>
                    </svg>
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Development
                  </h4>
                  <p className="m-0 text-sm">
                    We translate your ideas into clean, fast and quality code.
                  </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <svg height="60" viewBox="0 0 56 60" width="56" xmlns="http://www.w3.org/2000/svg">
                      <g fill="none" fill-rule="evenodd" transform="translate(1 1)">
                        <g stroke="#E8CEBE" stroke-linecap="square" stroke-width="2">
                          <path d="M23 51H5a5 5 0 0 1-5-5V5a5 5 0 0 1 5-5h32a5 5 0 0 1 5 5v14"></path>
                          <rect height="33" rx="4" width="25" x="29" y="25"></rect>
                        </g>
                        <circle cx="42" cy="50" fill="#E8CEBE" r="2"></circle>
                        <path d="M0 7.5h42M30 30.5h24" stroke="#E8CEBE" stroke-width="2" stroke-linecap="square"></path>
                        <circle cx="22" cy="39" fill="#333" r="2"></circle>
                        <circle cx="22" cy="39" fill="#E8CEBE" r="2"></circle>
                      </g>
                    </svg>
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Product Design
                  </h4>
                  <p className="m-0 text-sm">
                    We design beautiful interfaces based on strong UX fundamentals.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

FeaturesTiles.propTypes = propTypes;
FeaturesTiles.defaultProps = defaultProps;

export default FeaturesTiles;