import React, { useState } from "react";
import classNames from 'classnames';
import { SectionTilesProps } from '../../../utils/SectionProps';
import SectionHeader from '../partials/SectionHeader';
import '../../../assets/joinUs/section2.scss';
import { images } from "./helpers/CarouselData";
import Button from "../../elements/Button";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";



const propTypes = {
  ...SectionTilesProps.types
}
const defaultProps = {
  ...SectionTilesProps.defaults
}

const Carousel = ({
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
  const [currImg, setCurrImg] = useState(0);

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
    title: 'Open Positions',
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
            <div className='container'>
              <div className="hero-figure reveal-from-bottom illustration-element-01" data-reveal-value="20px" data-reveal-delay="600" >

                <div className="carousel" >
                  <div
                    className="carouselInner"
                    style={{ backgroundImage: `url(${images[currImg].img})` }}
                  >
                    <div
                      className="left"
                      onClick={() => {
                        currImg > 0 && setCurrImg(currImg - 1);
                      }}
                    >
                      <ArrowBackIosIcon style={{ fontSize: 30 }} />
                    </div>
                    <div className="center">
                      <h1 className="center-content">{images[currImg].title}</h1>
                      <Button tag="a" color="primary" wideMobile href="https://cruip.com/">
                        {images[currImg].subtitle}
                      </Button>

                    </div>
                    <div
                      className="right"
                      onClick={() => {
                        currImg < images.length - 1 && setCurrImg(currImg + 1);
                      }}
                    >
                      <ArrowForwardIosIcon style={{ fontSize: 30 }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
Carousel.propTypes = propTypes;
Carousel.defaultProps = defaultProps;

export default Carousel;