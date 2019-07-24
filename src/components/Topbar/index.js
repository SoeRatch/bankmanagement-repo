import React from 'react';
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";
import { NavLink } from "react-router-dom";

// @material-ui/core components
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Icon from "@material-ui/core/Icon";
import Home from "@material-ui/icons/Home";

import DropdownComponent from "../DropdownComponent";
import SearchFilter from "../SearchFilter";
import topbarStyle from "../../assets/jss/components/topbarStyle";

import cssStyles from './index.css';
import classNames from 'classnames/bind';
const cx = classNames.bind(cssStyles);

const Topbar =({...props})=>{

		const { classes, color, image, routes,topbarConfig,onTextChange} = props;

		

		var links = (
		    <List className={classes.tabs} className={cx("tabs")}>
		      {routes.map((prop, key) => {
		        if (prop.redirect) return null;
		        return (
		          <NavLink
		            to={prop.path}
		            activeClassName="active"
		            key={key}
		          >
		            <ListItem button>
		              <ListItemIcon style={{color:`${topbarConfig.navbuttonColor}`}}>
		                {typeof prop.icon === "string" ? (
		                  <Icon>{prop.icon}</Icon>
		                ) : (
		                  <prop.icon />
		                )}
		              </ListItemIcon>
		              <ListItemText
		              	style={{color:`${topbarConfig.navbuttonColor}`}}
		                primary={prop.topbarName}
		                disableTypography={true}
		              />
		            </ListItem>
		          </NavLink>
		        );
		      })}
		      
		    </List>
		  );

		return(
					<div className={cx("wrapper")}>
						
						<div className={classes.topbarActionWrapper}>
							<List className={classes.tabs} className={cx("tabs")}>
							     <NavLink
							            to="/"
							            activeClassName="active"
							          >
							            <ListItem button>
							              <ListItemIcon style={{color:`${topbarConfig.navbuttonColor}`}}>
							                <Home/>
							              </ListItemIcon>
							              <ListItemText
							              	style={{color:`${topbarConfig.navbuttonColor}`}}
							                primary="Home"
							                disableTypography={true}
							              />
							            </ListItem>
							      </NavLink>
							      
							</List>
						</div>
						<div className={classes.topbarActionWrapper}>
						<DropdownComponent/>
						<SearchFilter/>
						</div>
						<div className={classes.topbarActionWrapper}>
							{links}
						</div>
					</div>
						
					
		);
}

Topbar.propTypes={
	classes:PropTypes.object.isRequired
};

export default withStyles(topbarStyle)(Topbar);