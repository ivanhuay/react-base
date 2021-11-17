import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import * as styles from './BasicAtom.module.scss';

const cx = classNames.bind(styles);

const BasicAtom = ({ title }) => (
  <div className={cx('container')}><h2>{title}</h2></div>
);

BasicAtom.defaultProps = {
  title: '',
};

BasicAtom.propTypes = {
  title: PropTypes.string,
};
export default BasicAtom;
