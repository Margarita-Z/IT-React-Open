import React from "react";
import classNames from 'classnames';
import { SectionTilesProps } from '../../../utils/SectionProps';
import SectionHeader from '../partials/SectionHeader';
import '../../../assets/timeline.scss'

const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}
const Timeline = ({
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
    title: 'Abot Us',
    paragraph: 'The story behind the project.Developers are trusted to create an engaging experience for their companies, so we build tools to help them.'
  };

  return (
    <section
      {...props}
      className={outerClasses}
      id='about'
    >
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={tilesClasses}>
          <div class="timeline">
  <div class="container1 left">
    <div class="content">
      <h2  style={{color: 'white'}}>2021</h2>
      <h3 className="mt-0 mb-12" style={{color: 'white'}}>
      Open PRO was founded in Milan
                  </h3>
      <p>Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto primis ea eam.</p>
    </div>
  </div>
  <div class="container1 right">
    <div class="content">
      <h2 style={{color: 'white'}}>2020</h2>
      <h3 className="mt-0 mb-12" style={{color: 'white'}}>
      1 million happy customers
                  </h3>
      <p>Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto primis ea eam.</p>
    </div>
  </div>
  <div class="container1 left">
    <div class="content">
      <h2 style={{color: 'white'}}>2015</h2>
      <h3 className="mt-0 mb-12" style={{color: 'white'}}>
      Transitioned to a SaaS business model
                  </h3>
      <p>Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto primis ea eam.</p>
    </div>
  </div>
  <div class="container1 right">
    <div class="content">
      <h2 style={{color: 'white'}}>2012</h2>
      <h3 className="mt-0 mb-12" style={{color: 'white'}}>
               Certificates
                  </h3>
      <p>Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto primis ea eam.</p>
    </div>
  </div>
  <div class="container1 left">
    <div class="content">
      <h2 style={{color: 'white'}}>2011</h2>
      <h3 className="mt-0 mb-12" style={{color: 'white'}}>
                Say hello to research data
                  </h3>
      <p>Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto primis ea eam.</p>
    </div>
  </div>
  <div class="container1 right">
    <div class="content">
      <h2 style={{color: 'white'}}>2007</h2>
      <h3 className="mt-0 mb-12" style={{color: 'white'}}>
                Say hello to research data
                  </h3>
      <p>Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto primis ea eam.</p>
    </div>
  </div>
</div>
           
          </div>
        </div>
      </div>
    </section>
  );
}

Timeline.propTypes = propTypes;
Timeline.defaultProps = defaultProps;

export default Timeline;