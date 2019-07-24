import React from 'react';
import PropTypes from "prop-types";
import classNames from 'classnames/bind';

import { connect } from 'react-redux';
import styles from './index.css';
import Dropdown from './Dropdown';
import { selectbanks,enableloading } from '../../actions/banks';
const cx = classNames.bind(styles);


class DropdownComponent extends React.Component{
	state={

			location: [
					      {
					          id: 0,
					          title: 'Bangalore',
					          selected: false,
					          key: 'location'
					      },
					      {
					        id: 1,
					        title: 'Mumbai',
					        selected: false,
					        key: 'location'
					      },
					      {
					        id: 2,
					        title: 'Pune',
					        selected: false,
					        key: 'location'
					      },
					      {
					        id: 3,
					        title: 'Delhi',
					        selected: false,
					        key: 'location'
					      },
					      {
					        id: 4,
					        title: 'Guwahati',
					        selected: false,
					        key: 'location'
					      }
		      		]
	}


	resetThenSet = (id, key) => {
	  let temp = JSON.parse(JSON.stringify(this.state[key]));
	  temp.forEach(item => item.selected = false);
	  temp[id].selected = true;

	  let url="https://vast-shore-74260.herokuapp.com/banks"+`?city=${temp[id].title.toUpperCase()}`;
	  this.props.enableloading(true);
	  this.props.selectbanks(url);

	  this.setState({
	    [key]: temp
	  });
	}


	render(){
		return(
			<div>
				<Dropdown
				  title="Select location"
				  list={this.state.location}
				  resetThenSet={this.resetThenSet}
				/>
			</div>
			);
	}
}

DropdownComponent.propTypes = {
  selectbanks: PropTypes.func.isRequired,
  enableloading:PropTypes.func.isRequired
};


export default connect(null,{selectbanks,enableloading})(DropdownComponent);