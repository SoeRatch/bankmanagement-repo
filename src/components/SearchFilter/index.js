import React from 'react';
import PropTypes from "prop-types";
import classNames from 'classnames/bind';
import { connect } from 'react-redux';
import { addstring } from '../../actions/banks';
import styles from './index.css';
const cx = classNames.bind(styles);

class SearchFilter extends React.Component{


	saveSearchString=(e)=>{
		let str = e.target.value;
		let ustr = str.toUpperCase();
		this.props.addstring(ustr);
	}

	render(){
		const { onTextChange } = this.props;
		return(
			<div className={cx("searchinput")}>
				<input type="search" 
					   placeholder="Search across all fields"
					   onKeyUp={event=>this.saveSearchString(event)}
				/>
			</div>
			);
	}
}



SearchFilter.propTypes = {
 addstring: PropTypes.func.isRequired
};

export default connect(null,{addstring})(SearchFilter);