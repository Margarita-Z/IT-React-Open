import React from 'react';
import classNames from 'classnames';
import { SectionSplitProps } from '../../../utils/SectionProps';
import SectionHeader from '../partials/SectionHeader';
import Image from '../../elements/Image';
import '../../../assets/joinUs/section3.scss';

const propTypes = {
  ...SectionSplitProps.types
}

const defaultProps = {
  ...SectionSplitProps.defaults
}

const Section3 = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  invertMobile,
  invertDesktop,
  alignTop,
  imageFill,
  ...props
}) => {

  const outerClasses = classNames(
    'features-split1 section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-split-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const splitClasses = classNames(
    'split-wrap',
    invertMobile && 'invert-mobile',
    invertDesktop && 'invert-desktop',
    alignTop && 'align-top'
  );

  const sectionHeader = {
    title: 'Why IT M?',
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
          <div className={splitClasses}>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
               
                <h3 className="mt-0 mb-12" >
                Projects that matter
                  </h3>
                  <div className="text-xxs text-color-primary fw-600 tt-u mb-8" >
                  Working on top start-up projects from top accelerators is the dream job for any tech-savvy person.
                  </div>
                <p className="m-0">
                We are the preferred partner for many top start-up accelerator programs, including Y Combinator, 500Startups and Techstars. We guarantee you steady work from some of the coolest and most promising projects coming out of Silicon Valley. Feel free to browse our Work.
                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src='https://povio.com/assets/join-us/why-povio-1.jpg'
                  alt="Features split 01"
                  width={528}
                  height={396} />
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-right" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  </div>
                <h3 className="mt-0 mb-12">
                Learn from the best
                  </h3>
                  <div className="text-xxs text-color-primary fw-600 tt-u mb-8" >
                  We’ll share what we have learned along the way with you.
                  </div>
                <p className="m-0">
                At Povio we believe in benefiting from learning and sharing each other's know-how, so we will share with you all we have learned along the way. Learn from the best, become the best.
                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src='https://povio.com/assets/join-us/why-povio-2.jpg'
                  alt="Features split 02"
                  width={528}
                  height={396} />
                  
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  </div>
                <h3 className="mt-0 mb-12">
                Cutting-edge technology
                  </h3>
                  <div className="text-xxs text-color-primary fw-600 tt-u mb-8" >
                  Working with top start-ups we're keen to take part in the development of new gadgets and technologies on a daily basis.
                  </div>
                <p className="m-0">
               
                  </p>
    
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src='https://povio.com/assets/join-us/why-povio-3.jpg'
                  alt="Features split 03"
                  width={528}
                  height={396} />
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-right" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
               
                  </div>
                <h3 className="mt-0 mb-12" >
                Internationalise yourself
                  </h3>
                  <div className="text-xxs text-color-primary fw-600 tt-u mb-8" >
                  Our team is international so you can practice your English with your peers.
                  </div>
                <p className="m-0">
                You will get the opportunity to peek into some of the world’s best start-ups and direct access to the Silicon Valley’s top entrepreneurs. Our clients are US-based, and you'll get to talk to them as well.
                  </p>
               
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src='https://povio.com/assets/join-us/why-povio-4.jpg'
                  alt="Features split 02"
                  width={528}
                  height={396} />
                  
              </div>
            </div>
            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  </div>
                <h3 className="mt-0 mb-12" >
                Taste Silicon Valley
                  </h3>
                  <div className="text-xxs text-color-primary fw-600 tt-u mb-8" >
                  Silicon Valley is the place where the best start-ups are born.
                  </div>
                <p className="m-0">
                Povio is headquartered right here in San Francisco, and most of our clients are as well.
                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src='https://povio.com/assets/join-us/why-povio-5.jpg'
                  alt="Features split 03"
                  width={528}
                  height={396} />
              </div>
            </div>


          </div>
        </div>
      </div>
    </section>
  );
}

Section3.propTypes = propTypes;
Section3.defaultProps = defaultProps;

export default Section3;