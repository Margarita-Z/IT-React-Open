import React, { useState } from 'react';
import classNames from 'classnames';
import { SectionProps } from '../../../utils/SectionProps';
import ButtonGroup from '../../elements/ButtonGroup';
import Button from '../../elements/Button';
import '../../../assets/joinUs/section1.scss';


const propTypes = {
    ...SectionProps.types
}

const defaultProps = {
    ...SectionProps.defaults
}

const Hero = ({
    className,
    topOuterDivider,
    bottomOuterDivider,
    topDivider,
    bottomDivider,
    hasBgColor,
    invertColor,
    ...props
}) => {

    const outerClasses = classNames(
        'hero section center-content',
        topOuterDivider && 'has-top-divider',
        bottomOuterDivider && 'has-bottom-divider',
        hasBgColor && 'has-bg-color',
        invertColor && 'invert-color',
        className
    );

    const innerClasses = classNames(
        'hero-inner section-inner',
        topDivider && 'has-top-divider',
        bottomDivider && 'has-bottom-divider'
    );

    return (
        <section
            {...props}
            className={outerClasses}
            
        >
            <div className="container-sm">
                <div className={innerClasses}>
                    <div className="hero-content">
                        <h1 className="mt-0 mb-16 reveal-from-bottom" data-reveal-delay="200" style={{ color: 'white' }}>
                            Are you an adventurous job seeker?
                        </h1>
                        <div className="container-xs">
                            <p className="m-0 mb-32 reveal-from-bottom" data-reveal-delay="400">
                                We’ve got plenty of different roles to offer. Apply now.</p>
                            <div className="reveal-from-bottom" data-reveal-delay="600">
                                <ButtonGroup>
                                    <Button tag="a" color="primary" wideMobile href="https://cruip.com/">
                                        Join us
                                    </Button>

                                </ButtonGroup>
                            </div>
                        </div>
                    </div>
                    <div className="hero-figure reveal-from-bottom illustration-element-01" data-reveal-value="20px" data-reveal-delay="800">
                       
                    </div>
                </div>
            </div>
        </section>
    );
}

Hero.propTypes = propTypes;
Hero.defaultProps = defaultProps;

export default Hero;