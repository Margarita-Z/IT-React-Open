import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import '../../assets/partners.scss';



const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}
const Partners = ({
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
    title: '',
    paragraph: ''
  };

  return (
  

          <div id="partners" class="p-strip is-slanted--top-right js-active-target" >
  <div class="u-fixed-width u-align--center">
    <div class="p-logo-section">
      <p class="p-logo-section__title p-muted-heading u-no-max-width">Meet some of our partners</p>
      <div class="p-logo-section__items">
        <div class="p-logo-section__item">
          
    <img src="https://res.cloudinary.com/canonical/image/fetch/f_auto,q_auto,fl_sanitize,w_288,h_288/https://assets.ubuntu.com/v1/67f81bfe-intel-new-logo.png" srcset="https://res.cloudinary.com/canonical/image/fetch/f_auto,q_auto,fl_sanitize,w_576,h_576/https://assets.ubuntu.com/v1/67f81bfe-intel-new-logo.png 2x" alt="Intel" width="288" height="288" loading="auto" class="p-logo-section__logo"/>
        </div>
        <div class="p-logo-section__item">
          
    <img src="https://res.cloudinary.com/canonical/image/fetch/f_auto,q_auto,fl_sanitize,w_288,h_288/https://assets.ubuntu.com/v1/d14b2a66-fujitsu-logo.png" srcset="https://res.cloudinary.com/canonical/image/fetch/f_auto,q_auto,fl_sanitize,w_576,h_576/https://assets.ubuntu.com/v1/d14b2a66-fujitsu-logo.png 2x" alt="Fujitsu" width="288" height="288" loading="auto" class="p-logo-section__logo"/>
        </div>
        <div class="p-logo-section__item">
          
    <img src="https://res.cloudinary.com/canonical/image/fetch/f_auto,q_auto,fl_sanitize,w_288,h_288/https://assets.ubuntu.com/v1/58d0b333-texas-instruments-logo.png" srcset="https://res.cloudinary.com/canonical/image/fetch/f_auto,q_auto,fl_sanitize,w_576,h_576/https://assets.ubuntu.com/v1/58d0b333-texas-instruments-logo.png 2x" alt="Texa Instruments" width="288" height="288" loading="auto" class="p-logo-section__logo"/>
        </div>
        <div class="p-logo-section__item">
          
    <img src="https://res.cloudinary.com/canonical/image/fetch/f_auto,q_auto,fl_sanitize,w_288,h_288/https://assets.ubuntu.com/v1/4e5c6776-hp-enterprise-logo.png" srcset="https://res.cloudinary.com/canonical/image/fetch/f_auto,q_auto,fl_sanitize,w_576,h_576/https://assets.ubuntu.com/v1/4e5c6776-hp-enterprise-logo.png 2x" alt="Hewlett Packard Enterprise" width="288" height="288" loading="auto" class="p-logo-section__logo"/>
        </div>
        <div class="p-logo-section__item">
          
    <img src="https://res.cloudinary.com/canonical/image/fetch/f_auto,q_auto,fl_sanitize,w_288,h_288/https://assets.ubuntu.com/v1/618aed1b-supermicro-logo.png" srcset="https://res.cloudinary.com/canonical/image/fetch/f_auto,q_auto,fl_sanitize,w_576,h_576/https://assets.ubuntu.com/v1/618aed1b-supermicro-logo.png 2x" alt="Supermicro" width="288" height="288" loading="auto" class="p-logo-section__logo"/>
        </div>
        <div class="p-logo-section__item">
          
    <img src="https://res.cloudinary.com/canonical/image/fetch/f_auto,q_auto,fl_sanitize,w_288,h_288/https://assets.ubuntu.com/v1/bd6ca1f7-oracle-new-logo.png" srcset="https://res.cloudinary.com/canonical/image/fetch/f_auto,q_auto,fl_sanitize,w_576,h_576/https://assets.ubuntu.com/v1/bd6ca1f7-oracle-new-logo.png 2x" alt="Oracle" width="288" height="288" loading="auto" class="p-logo-section__logo"/>
        </div>
        <div class="p-logo-section__item">
          
    <img src="https://res.cloudinary.com/canonical/image/fetch/f_auto,q_auto,fl_sanitize,w_288,h_288/https://assets.ubuntu.com/v1/9e636877-microsoft-logo.png" srcset="https://res.cloudinary.com/canonical/image/fetch/f_auto,q_auto,fl_sanitize,w_576,h_576/https://assets.ubuntu.com/v1/9e636877-microsoft-logo.png 2x" alt="Microsoft" width="288" height="288" loading="auto" class="p-logo-section__logo"/>
        </div>
        <div class="p-logo-section__item">
          
    <img src="https://res.cloudinary.com/canonical/image/fetch/f_auto,q_auto,fl_sanitize,w_288,h_288/https://assets.ubuntu.com/v1/711be910-arm-logo.png" srcset="https://res.cloudinary.com/canonical/image/fetch/f_auto,q_auto,fl_sanitize,w_576,h_576/https://assets.ubuntu.com/v1/711be910-arm-logo.png 2x" alt="ARM" width="288" height="288" loading="auto" class="p-logo-section__logo"/>
        </div>
        <div class="p-logo-section__item">
          
    <img src="https://res.cloudinary.com/canonical/image/fetch/f_auto,q_auto,fl_sanitize,w_288,h_288/https://assets.ubuntu.com/v1/11814428-hp-logo.png" srcset="https://res.cloudinary.com/canonical/image/fetch/f_auto,q_auto,fl_sanitize,w_576,h_576/https://assets.ubuntu.com/v1/11814428-hp-logo.png 2x" alt="Hewlett Packard" width="288" height="288" loading="auto" class="p-logo-section__logo"/>
        </div>
        <div class="p-logo-section__item">
          
    <img src="https://res.cloudinary.com/canonical/image/fetch/f_auto,q_auto,fl_sanitize,w_288,h_288/https://assets.ubuntu.com/v1/31fde468-sandisk-logo.png" srcset="https://res.cloudinary.com/canonical/image/fetch/f_auto,q_auto,fl_sanitize,w_576,h_576/https://assets.ubuntu.com/v1/31fde468-sandisk-logo.png 2x" alt="SanDisk" width="288" height="288" loading="auto" class="p-logo-section__logo"/>
        </div>
        <div class="p-logo-section__item">
          
    <img src="https://res.cloudinary.com/canonical/image/fetch/f_auto,q_auto,fl_sanitize,w_288,h_288/https://assets.ubuntu.com/v1/de681426-aws-logo.png" srcset="https://res.cloudinary.com/canonical/image/fetch/f_auto,q_auto,fl_sanitize,w_576,h_576/https://assets.ubuntu.com/v1/de681426-aws-logo.png 2x" alt="Amazon Web Services" width="288" height="288" loading="auto" class="p-logo-section__logo"/>
        </div>
        <div class="p-logo-section__item">
          
    <img src="https://res.cloudinary.com/canonical/image/fetch/f_auto,q_auto,fl_sanitize,w_288,h_288/https://assets.ubuntu.com/v1/987acdaa-dell-logo.png" srcset="https://res.cloudinary.com/canonical/image/fetch/f_auto,q_auto,fl_sanitize,w_576,h_576/https://assets.ubuntu.com/v1/987acdaa-dell-logo.png 2x" alt="Dell" width="288" height="288" loading="auto" class="p-logo-section__logo"/>
        </div>
        <div class="p-logo-section__item">
          
    <img src="https://res.cloudinary.com/canonical/image/fetch/f_auto,q_auto,fl_sanitize,w_288,h_288/https://assets.ubuntu.com/v1/6079d02b-amd-logo.png" srcset="https://res.cloudinary.com/canonical/image/fetch/f_auto,q_auto,fl_sanitize,w_576,h_576/https://assets.ubuntu.com/v1/6079d02b-amd-logo.png 2x" alt="AMD" width="288" height="288" loading="auto" class="p-logo-section__logo"/>
        </div>
        <div class="p-logo-section__item">
          
    <img src="https://res.cloudinary.com/canonical/image/fetch/f_auto,q_auto,fl_sanitize,w_288,h_288/https://assets.ubuntu.com/v1/f69a071a-ntt-logo.png" srcset="https://res.cloudinary.com/canonical/image/fetch/f_auto,q_auto,fl_sanitize,w_576,h_576/https://assets.ubuntu.com/v1/f69a071a-ntt-logo.png 2x" alt="NTT" width="288" height="288" loading="auto" class="p-logo-section__logo"/>
        </div>
        <div class="p-logo-section__item">
          
    <img src="https://res.cloudinary.com/canonical/image/fetch/f_auto,q_auto,fl_sanitize,w_288,h_288/https://assets.ubuntu.com/v1/7eebe11c-cisco-logo.png" srcset="https://res.cloudinary.com/canonical/image/fetch/f_auto,q_auto,fl_sanitize,w_576,h_576/https://assets.ubuntu.com/v1/7eebe11c-cisco-logo.png 2x" alt="Cisco" width="288" height="288" loading="auto" class="p-logo-section__logo"/>
        </div>
        <div class="p-logo-section__item">
          
    <img src="https://res.cloudinary.com/canonical/image/fetch/f_auto,q_auto,fl_sanitize,w_288,h_288/https://assets.ubuntu.com/v1/5588e80d-ibm-logo.png" srcset="https://res.cloudinary.com/canonical/image/fetch/f_auto,q_auto,fl_sanitize,w_576,h_576/https://assets.ubuntu.com/v1/5588e80d-ibm-logo.png 2x" alt="IBM" width="288" height="288" loading="auto" class="p-logo-section__logo"/>
        </div>
        <div class="p-logo-section__item">
          
    <img src="https://res.cloudinary.com/canonical/image/fetch/f_auto,q_auto,fl_sanitize,w_288,h_288/https://assets.ubuntu.com/v1/c6e197c4-deutsche-telekom-logo.png" srcset="https://res.cloudinary.com/canonical/image/fetch/f_auto,q_auto,fl_sanitize,w_576,h_576/https://assets.ubuntu.com/v1/c6e197c4-deutsche-telekom-logo.png 2x" alt="Deutsche Telecom" width="288" height="288" loading="auto" class="p-logo-section__logo"/>
        </div>
        <div class="p-logo-section__item">
          
    <img src="https://res.cloudinary.com/canonical/image/fetch/f_auto,q_auto,fl_sanitize,w_288,h_288/https://assets.ubuntu.com/v1/c70b529e-lenovo-logo.png" srcset="https://res.cloudinary.com/canonical/image/fetch/f_auto,q_auto,fl_sanitize,w_576,h_576/https://assets.ubuntu.com/v1/c70b529e-lenovo-logo.png 2x" alt="Lenovo" width="288" height="288" loading="auto" class="p-logo-section__logo"/>
        </div>
        <div class="p-logo-section__item">
          
    <img src="https://res.cloudinary.com/canonical/image/fetch/f_auto,q_auto,fl_sanitize,w_288,h_288/https://assets.ubuntu.com/v1/83fb74ae-nec-logo.png" srcset="https://res.cloudinary.com/canonical/image/fetch/f_auto,q_auto,fl_sanitize,w_576,h_576/https://assets.ubuntu.com/v1/83fb74ae-nec-logo.png 2x" alt="NEC" width="288" height="288" loading="auto" class="p-logo-section__logo"/>
        </div>
        <div class="p-logo-section__item">
          
    <img src="https://res.cloudinary.com/canonical/image/fetch/f_auto,q_auto,fl_sanitize,w_288,h_288/https://assets.ubuntu.com/v1/0352e974-verizon-logo.png" srcset="https://res.cloudinary.com/canonical/image/fetch/f_auto,q_auto,fl_sanitize,w_576,h_576/https://assets.ubuntu.com/v1/0352e974-verizon-logo.png 2x" alt="Verizon" width="288" height="288" loading="auto" class="p-logo-section__logo"/>
        </div>
        <div class="p-logo-section__item">
          
    <img src="https://res.cloudinary.com/canonical/image/fetch/f_auto,q_auto,fl_sanitize,w_288,h_288/https://assets.ubuntu.com/v1/6474947f-china-telecom-logo.png" srcset="https://res.cloudinary.com/canonical/image/fetch/f_auto,q_auto,fl_sanitize,w_576,h_576/https://assets.ubuntu.com/v1/6474947f-china-telecom-logo.png 2x" alt="China Telecom" width="288" height="288" loading="auto" class="p-logo-section__logo"/>
        </div>
        <div class="p-logo-section__item">
          
    <img src="https://res.cloudinary.com/canonical/image/fetch/f_auto,q_auto,fl_sanitize,w_288,h_288/https://assets.ubuntu.com/v1/e89a2011-huawei-logo.png" srcset="https://res.cloudinary.com/canonical/image/fetch/f_auto,q_auto,fl_sanitize,w_576,h_576/https://assets.ubuntu.com/v1/e89a2011-huawei-logo.png 2x" alt="Huawei" width="288" height="288" loading="auto" class="p-logo-section__logo"/>
        </div>
      </div>
    </div>
  </div>
  
</div>

        
  );
}

Partners.propTypes = propTypes;
Partners.defaultProps = defaultProps;

export default Partners;