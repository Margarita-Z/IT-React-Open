import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../../utils/SectionProps';
import SectionHeader from '../partials/SectionHeader';
import Image from '../../elements/Image';

const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}
const Section5 = ({
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
    'features-tiles1 section',
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
    title: 'How we hire',
    paragraph: ''
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

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src='https://povio.com/assets/icons/step-1.png'
                      alt="Features tile icon 01"
                      width={64}
                      height={64} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8" >
                STEP 1
                  </div>
                  <h4 className="mt-0 mb-8">
                  Apply
                    </h4>
                  <p className="m-0 text-sm">
                  There is no CV required, we would like to make beginning of the funnel as smooth and as fast as possible so we encourage you to apply without second thoughts.
                    </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src='https://povio.com/assets/icons/step-2.png'
                      alt="Features tile icon 02"
                      width={64}
                      height={64} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8" >
                STEP 2
                  </div>
                  <h4 className="mt-0 mb-8">
                  Talk to our talent expert
                    </h4>
                  <p className="m-0 text-sm">
                  We’d like to get to know you and everything about you. We will connect to you with a meeting proposal where you will be talking about your career, expectations and any questions you might have.
                    </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom" data-reveal-delay="400">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src='https://povio.com/assets/icons/step-3.png'
                      alt="Features tile icon 03"
                      width={64}
                      height={64} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8" >
                STEP 3
                  </div>
                  <h4 className="mt-0 mb-8">
                  Technical Skills Check
                    </h4>
                  <p className="m-0 text-sm">
                  We would like to see you in action and get familiar with your thinking and problem solving abilities so you will work on a small task together with one of our lead engineers.
                    </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src='https://povio.com/assets/icons/step-3-1.png'
                      alt="Features tile icon 04"
                      width={64}
                      height={64} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8" >
                STEP 4
                  </div>
                  <h4 className="mt-0 mb-8">
                  Homework
                    </h4>
                  <p className="m-0 text-sm">
                  Sometimes it happens that we want to see you going the extra mile. For this situation we follow up with a ‘homework’ task that you can solve at your own leisure and send back the results.
                    </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src='https://povio.com/assets/icons/step-4.png'
                      alt="Features tile icon 05"
                      width={64}
                      height={64} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8" >
                STEP 5
                  </div>
                  <h4 className="mt-0 mb-8">
                  Onboarding
                    </h4>
                  <p className="m-0 text-sm">
                  We also have a special task prepared for you - you will work on something that will be seen in production that particular day.
                    </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom" data-reveal-delay="400">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src='https://povio.com/assets/icons/step-5.png'
                      alt="Features tile icon 06"
                      width={64}
                      height={64} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8" >
                STEP 6
                  </div>
                  <h4 className="mt-0 mb-8">
                  Continue to grow
                    </h4>
                  <p className="m-0 text-sm">
                  Povio is there to make sure you stay on track of your career path and goals and expectations.
We want you to grow and be better each day so if there is anything we can help you to achieve it, please let us know.
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

Section5.propTypes = propTypes;
Section5.defaultProps = defaultProps;

export default Section5;