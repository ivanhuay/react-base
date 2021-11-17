import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import * as styles from './SecondMolecule.module.scss';

const cx = classNames.bind(styles);

const SecondMolecule = ({ title }) => (
  <div className={cx('container')}>{title}</div>
);

SecondMolecule.defaultProps = {
  title: '',
};

SecondMolecule.propTypes = {
  title: PropTypes.string,
};
export default SecondMolecule;
