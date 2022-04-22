import React from 'react';
import classNames from 'classnames';
import { SectionSplitProps } from '../../../utils/SectionProps';

import '../../../assets/joinUs/section4.scss';

const propTypes = {
  ...SectionSplitProps.types
}

const defaultProps = {
  ...SectionSplitProps.defaults
}

const Section4 = ({
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

  

  return (
  
            <section class="section-gallery">
    <div class="containerGalery">
        <div class="gallery-inner">
            <div class="grid-4">
                <div class="image-wrapper animated fadeIn" data-animation="fadeIn">
                    <img alt="Povio Bird" src="https://povio.com/assets/join-us/povio-labs-bird@2x.jpg" srcset="assets/join-us/povio-labs-bird@2x.jpg 2x, assets/join-us/povio-labs-bird@3x.jpg 3x" style={{verticalAlign: 'middle',borderStyle: 'none'}}/>
                </div>
                <div class="image-wrapper animated fadeIn" data-animation="fadeIn">
                    <img alt="Povio Office Full" src="https://povio.com/assets/join-us/povio-labs-office-full@2x.jpg" srcset="assets/join-us/povio-labs-office-full@2x.jpg 2x, assets/join-us/povio-labs-office-full@3x.jpg 3x"/>
                </div>
            </div>
            <div class="grid-8">
                <div class="image-wrapper animated fadeIn" data-animation="fadeIn">
                    <img alt="Povio Office Empty" src="https://povio.com/assets/join-us/povio-labs-office-empty.jpg" srcset="assets/join-us/povio-labs-office-empty@2x.jpg 2x, assets/join-us/povio-labs-office-empty@3x.jpg 3x" />
                </div>
            </div>
        </div>
        <div class="gallery-inner">
            <div class="grid-12">
                <div class="image-wrapper animated fadeIn" data-animation="fadeIn">
                    <img alt="Povio Couch" src="https://povio.com/assets/join-us/povio-labs-couch.jpg" srcset="assets/join-us/povio-labs-couch@2x.jpg 2x, assets/join-us/povio-labs-couch@3x.jpg 3x"/>
                </div>
            </div>
        </div>
        <div class="gallery-inner">
            <div class="grid-4">
                <div class="image-wrapper animated fadeIn" data-animation="fadeIn">
                    <img alt="Povio Piknik" src="https://povio.com/assets/join-us/povio-labs-piknik@2x.jpg" srcset="assets/join-us/povio-labs-piknik@2x.jpg 2x, assets/join-us/povio-labs-piknik@3x.jpg 3x"/>
                </div>
                <div class="image-wrapper animated fadeIn" data-animation="fadeIn">
                    <img alt="Povio Smoothie" src="https://povio.com/assets/join-us/povio-labs-smoothie@2x.jpg" srcset="assets/join-us/povio-labs-smoothie@2x.jpg 2x, assets/join-us/povio-labs-smoothie@3x.jpg 3x"/>
                </div>
            </div>
            <div class="grid-8">
                <div class="image-wrapper animated fadeIn" data-animation="fadeIn">
                    <img alt="Povio Office Ljubljana" src="https://povio.com/assets/join-us/povio-labs-office-lj.jpg" srcset="assets/join-us/povio-labs-office-lj@2x.jpg 2x, assets/join-us/povio-labs-office-lj@3x.jpg 3x"/>
                </div>
                <div class="gallery-inner">
                    <div class="grid-6">
                        <div class="image-wrapper animated fadeIn" data-animation="fadeIn">
                            <img alt="Povio PovioCon" src="https://povio.com/assets/join-us/povio-labs-poviocon@2x.jpg" srcset="assets/join-us/povio-labs-poviocon@2x.jpg 2x, assets/join-us/povio-labs-poviocon@3x.jpg 3x"/>
                        </div>
                    </div>
                    <div class="grid-6">
                        <div class="image-wrapper animated fadeIn" data-animation="fadeIn">
                            <img alt="Povio NY" src="https://povio.com/assets/join-us/povio-labs-ny@2x.jpg" srcset="assets/join-us/povio-labs-ny@2x.jpg 2x, assets/join-us/povio-labs-ny@3x.jpg 3x"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
</section>
            
         

           

      
  );
}

Section4.propTypes = propTypes;
Section4.defaultProps = defaultProps;

export default Section4;