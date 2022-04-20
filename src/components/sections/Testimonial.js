import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';

const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}

const Testimonial = ({
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
    'testimonial section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'testimonial-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const tilesClasses = classNames(
    'tiles-wrap',
    pushLeft && 'push-left'
  );

  const sectionHeader = {
    title: 'You are in good company',
    paragraph: 'Working on top start-up projects from top accelerators is the dream job for any tech-savvy person'
  };

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div  className={tilesClasses}>

            <div className="tiles-item reveal-from-right" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <div className="testimonial-item-content">
                <img alt="Alexis Ohanian" src="https://povio.com/assets/home/testimonial-alexis.png" srcset="assets/home/testimonial-alexis@2x.png 2x, assets/home/testimonial-alexis@3x.png 3x"/>
                  <p className="text-sm mb-0">
                  “ I am pitched apps by founders all the time and I keep sending them to Povio because getting from idea to execution has never been easier thanks to this great team and platform. ”
                      </p>
                </div>
                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                  <span className="testimonial-item-name text-color-high">Alexis Ohanian</span>
                  <span className="text-color-low"> / </span>
                  <span className="testimonial-item-link">
                    <a href="#0">Co-founder @ Reddit & Initialized Capital</a>
                  </span>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="testimonial-item-content">
                <img alt="Sanjay Dastoor" src="https://povio.com/assets/home/testimonial-dastoor.png" srcset="assets/home/testimonial-dastoor@2x.png 2x, assets/home/testimonial-dastoor@3x.png 3x"/>
                  <p className="text-sm mb-0">
                  “ Povio has helped us build faster. We rely on support from their great team because they're flexible, hard-working, and ship with both quality and speed. ”
                      </p>
                </div>
                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                  <span className="testimonial-item-name text-color-high">Sanjay Dastoor</span>
                  <span className="text-color-low"> / </span>
                  <span className="testimonial-item-link">
                    <a href="#0">Co-founder @ Skip and Boosted boards</a>
                  </span>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-left" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <div className="testimonial-item-content">
                <img alt="Ryan Peterson" src="https://povio.com/assets/home/testimonial-petersen.png" srcset="assets/home/testimonial-petersen@2x.png 2x, assets/home/testimonial-petersen@3x.png 3x"/>
                  <p className="text-sm mb-0">
                  “ We've relied on Povio for non-core projects such as marketing sites, public data collection, and web publishing tools. They consistently deliver high quality work within the budget. ”
                      </p>
                </div>
                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                  <span className="testimonial-item-name text-color-high">Ryan Petersen</span>
                  <span className="text-color-low"> / </span>
                  <span className="testimonial-item-link">
                    <a href="#0">Founder and CEO @ Flexport</a>
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

Testimonial.propTypes = propTypes;
Testimonial.defaultProps = defaultProps;

export default Testimonial;