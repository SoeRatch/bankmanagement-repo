import React from 'react';
import PropTypes from "prop-types";
import classNames from 'classnames/bind';
import styles from './index.scss';
const cx = classNames.bind(styles);


class Spinner extends React.Component{



	render(){
		return(
			<div className={cx("container")}>
				<div className={cx("spinner")}></div>
				
			</div>
			);
	}
}



export default Spinner;