import React, { Component } from 'react';
import PropTypes from 'prop-types';
import root from 'react-shadow';
import classNames from 'classnames';
import styles from './styles.css'

class CardComponent extends Component {
  //Should be provided for the component to be correctly converted to a web-component
  static propTypes = {
    title: PropTypes.string,
    logo: PropTypes.string,
    body: PropTypes.string,
    button: PropTypes.string,
    className: PropTypes.string,
    onClick: PropTypes.func
  }

  static defaultProps = {
    title: '',
    logo: '',
    body: '',
    button: '',
    className: ''
  }

  constructor() {
    super();
  }

  render() {
    const { logo, title, body, button, onClick, className } = this.props;

    return (
      <root.div>
        <div className={classNames(className && className.card, 'card')}>
            <div className={classNames(className && className.header, 'header')}>
              <img alt='Logo' className={classNames(className && className.logo, 'logo')} src={logo} />
              <div className={classNames(className && className.title, 'title')}>
                {title}
              </div>
            </div>
            <div className={classNames(className && className.body, 'body')}>
              {body}
            </div>
            <div className={classNames(className && className.footer, 'footer')}>
              <button className={classNames(className && className.button, 'button')} onClick={onClick} >
                {button}
              </button>
            </div>
            <style type="text/css">{styles}</style>
            <style type="text/css">{className}</style>
        </div>
      </root.div>
    );
  }
}

export default CardComponent;
