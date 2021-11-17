import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import * as styles from './BasicMolecule.module.scss';
import BasicAtom from '../../atoms/BasicAtom';

const cx = classNames.bind(styles);

const BasicMolecule = ({ title }) => (
  <div className={cx('container')}>
    <BasicAtom title={title} />
  </div>
);

BasicMolecule.defaultProps = {
  title: '',
};

BasicMolecule.propTypes = {
  title: PropTypes.string,
};
export default BasicMolecule;
