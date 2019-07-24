import React, { Component } from 'react';
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import classNames from 'classnames/bind';
import Bookmarks from "@material-ui/icons/Bookmarks";
import styles from './index.scss';
import { addbookmark } from '../../actions/banks';
import Spinner from '../../components/Spinner';

const cx = classNames.bind(styles);

class SearchDisplay extends React.Component{

	constructor(props) {
		super(props);
		this.state = {
			pageindex:0,
			dataqty:4,
			fixeddataqty:4
		};
		
	}
 

	leftbtnClick=()=>{
			let paginationWrapper = document.querySelector('#pagination-wrapper');
			paginationWrapper.classList.add('transition-prev');

			setTimeout(()=>{
				paginationWrapper.classList.remove('transition-prev');
				if(this.state.dataqty<this.state.fixeddataqty){
					this.setState({
						...this.state,
						dataqty:this.state.fixeddataqty
					});
				}
				if(this.state.pageindex>=this.state.fixeddataqty){
					let requiredvalue = this.state.pageindex-this.state.fixeddataqty;
					this.setState({
						...this.state,
						pageindex:requiredvalue
					});
				}

			},500);
			  
			}

	rightbtnClick=()=>{
			let {banks}=this.props;

			let paginationWrapper = document.querySelector('#pagination-wrapper');
			paginationWrapper.classList.add('transition-next');

			setTimeout(()=>{
				paginationWrapper.classList.remove('transition-next');
				let maxLength = (banks && banks.length) || 0;
				
				if(this.state.pageindex+this.state.fixeddataqty>=maxLength ){
					
					if(this.state.pageindex<=maxLength){
						let rem = maxLength%7;
						if(rem>0){
							this.setState({
								...this.state,
								dataqty:rem
							});
						}
					}

				}
				
				if(this.state.pageindex+this.state.fixeddataqty<maxLength){
					let requiredvalue = this.state.pageindex+this.state.fixeddataqty;
						this.setState({
							...this.state,
							pageindex:requiredvalue
						});
				}

			},500);
			  
			}

	
	addBookmark=(e,data)=>{
		this.props.addbookmark(data);
	}

	renderRows=()=>{
		let {banks,searchstring,bookmark,mobileview}=this.props;
		let {pageindex,dataqty} = this.state;
	   if(banks && banks.length>0){

	   		if(searchstring=="" || searchstring==null || searchstring==undefined){
	   			return banks.slice(pageindex,pageindex+dataqty).map((data, index) => {
						            return [
						              <tr key={index} className={cx("border_bottom")}>

						              	{!mobileview && <td >{data["bank_id"]}</td>}

						              	<td >{data["ifsc"]}</td>
						              	<td >{data["bank_name"]}</td>
						              	<td >{data["branch"]}</td>
						              	<td className={cx("addressrow")}>{data["address"]}</td>
						              	{!mobileview && <td >{data["city"]}</td>}
						              	{!mobileview && <td >{data["district"]}</td>}
						              	{!mobileview && <td >{data["state"]}</td>}
						              			        							        			
					        		  </tr>,
					        		  	<tr style={bookmark?{display:'none'}:{display:''}} key={`rowbutton-${index}`} onClick={(e)=>this.addBookmark(e,data)} >
					        		  	{!mobileview &&  <td></td>}
								       <td ><div 
								              	className={cx("rowbutton","fancy-button")} 
								              	id={`rowbutton-${pageindex+index}`}>
								              	<span><Bookmarks fontSize="small"/>Bookmark</span> 
								            </div></td>
								        <td></td>
								        <td></td>
								        <td></td>
								       {!mobileview &&  <td></td>}
								        {!mobileview &&  <td></td>}
								        {!mobileview &&  <td></td>}
					        		  </tr>
					        		  
					        		  
						            ];
						    });


	   		}
	   		else if(searchstring){
	   			return banks.filter(item=>
							    	item["bank_id"].toString().includes(searchstring)||
							    	item["ifsc"].toUpperCase().includes(searchstring)||
							    	item["bank_name"].toUpperCase().includes(searchstring)||
							    	item["branch"].toUpperCase().includes(searchstring)||
							    	item["address"].toUpperCase().includes(searchstring)||
							    	item["city"].toUpperCase().includes(searchstring)||
							    	item["district"].toUpperCase().includes(searchstring)||
							    	item["state"].toUpperCase().includes(searchstring)						    	
						    	).slice(pageindex,pageindex+dataqty).map((data, index) => {
						           return [
						              <tr key={index} className={cx("border_bottom")}>

						              	{!mobileview && <td >{data["bank_id"]}</td>}

						              	<td >{data["ifsc"]}</td>
						              	<td >{data["bank_name"]}</td>
						              	<td >{data["branch"]}</td>
						              	<td className={cx("addressrow")}>{data["address"]}</td>
						              	{!mobileview && <td >{data["city"]}</td>}
						              	{!mobileview && <td >{data["district"]}</td>}
						              	{!mobileview && <td >{data["state"]}</td>}
						              			        							        			
					        		  </tr>,
					        		  	<tr 
					        		  		key={`rowbutton-${index}`} 
					        		  		onClick={(e)=>this.addBookmark(e,data)}
					        		  		style={bookmark?{display:'none'}:{display:''}} >
					        		  	

								       {!mobileview &&  <td></td>}
								       <td ><div 
								              	className={cx("rowbutton","fancy-button")} 
								              	id={`rowbutton-${pageindex+index}`}>
								              	<span><Bookmarks fontSize="small"/>Bookmark</span> 
								            </div></td>
								        <td></td>
								        <td></td>
								        <td></td>
								       {!mobileview &&  <td></td>}
								        {!mobileview &&  <td></td>}
								        {!mobileview &&  <td></td>}
					        		  </tr>
					        		  
						            ];
						    })
	   		}
	   }
	   return null;



	}

	render(){
		let {banks,searchstring,bookmark,mobileview,isloading}=this.props;
		let {pageindex,dataqty} = this.state;
		return(
				<div className={cx("wrapper")}>
					{ isloading?<Spinner/>:
						<table> 
					      <thead>
					        <tr>	
					        		{!mobileview && <th  scope="col">ID</th>}
					        		<th  scope="col">IFSC</th>
					        		<th  scope="col">NAME</th>
					        		<th  scope="col">BRANCH</th>
					        		<th  scope="col" style={{"width":"200px"}}>ADDRESS</th>
					        		{!mobileview && <th  scope="col">CITY</th>}
					        		{!mobileview && <th  scope="col">DISTRICT</th>}
					        		{!mobileview && <th  scope="col">STATE</th>}
					        </tr>
					      </thead>
					      <tbody>


					        { this.renderRows() }
						   
						   
					      </tbody>
				      
				    </table>

					}
				   <div className={cx("pagination-wrapper")} id="pagination-wrapper">
					  <svg 
					  onClick={this.leftbtnClick} className={cx("btnangular","btnangular--prev")} height="56" viewBox="0 0 24 24" width="56" xmlns="http://www.w3.org/2000/svg">
					    <path d="M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"/>
					    <path d="M0-.5h24v24H0z" fill="none"/>
					  </svg>
					  	

					  		 <div className={cx("pagination-container")}>
							    <div className={cx("little-dot","little-dot--first")}></div>

							    <div className={cx("little-dot")}>
							      <div className={cx("big-dot-container")}>
							        <div className={cx("big-dot")}></div>
							      </div>
							    </div>

							    <div className={cx("little-dot","little-dot--last")}></div>
							  </div>

					  
					  <svg 
					  	onClick={this.rightbtnClick}
					  	className={cx("btnangular","btnangular--next")} height="56" viewBox="0 0 24 24" width="56" xmlns="http://www.w3.org/2000/svg">
					    <path d="M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"/>
					    <path d="M0-.25h24v24H0z" fill="none"/>
					  </svg>
					</div>

				</div>

			);
	}
}




SearchDisplay.propTypes = {
  addbookmark: PropTypes.func.isRequired
};

function mapStateToProps(state){
  return{
   searchstring:state.searchstring,
   isloading:state.isLoading
  };
}

export default connect(mapStateToProps,{addbookmark})(SearchDisplay);

