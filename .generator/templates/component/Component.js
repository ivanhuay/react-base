import React from 'react';
import * as styles from './Component.module.scss';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);


function Component({title}) {
    return (
        <div className={cx('container')}>

        </div>
    );
}

Component.defaultProps = {
    title: ''
}

Component.propTypes = {
    title: PropTypes.string
}
export default Component;