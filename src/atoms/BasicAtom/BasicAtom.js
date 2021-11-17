import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import * as styles from './BasicAtom.module.scss';

const cx = classNames.bind(styles);

const BasicAtom = ({ title }) => (
  <div className={cx('container')}><h1>{title}</h1></div>
);

BasicAtom.defaultProps = {
  title: '',
};

BasicAtom.propTypes = {
  title: PropTypes.string,
};
export default BasicAtom;
