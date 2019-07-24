import React from 'react';
import classNames from 'classnames/bind';
import styles from './index.css';
const cx = classNames.bind(styles);
var FontAwesome = require('react-fontawesome');

class Dropdown extends React.Component{

	  state={
				listOpen: false,
				headerTitle: this.props.title
			}


	close(timeOut){
		    this.setState({
		      listOpen: false
		    })
		  }

  componentDidUpdate(){
    const { listOpen } = this.state
	    setTimeout(() => {
	      if(listOpen){
	        window.addEventListener('click', this.close)
	      }
	      else{
	        window.removeEventListener('click', this.close)
	      }
	    }, 0)
	  }

	  componentWillUnmount(){
	    window.removeEventListener('click', this.close)
	  }

	  

	  selectItem=(title, id, stateKey)=>{
	    this.setState({
	      headerTitle: title,
	      listOpen: false
	    }, this.props.resetThenSet(id, stateKey))
	  }

	  toggleList=()=>{
	    this.setState(prevState => ({
	      listOpen: !prevState.listOpen
	    }))
	  }


	render(){
	  const{list,toggleItem} = this.props;
	  const{listOpen, headerTitle} = this.state;
	  return( 
	  	<div className={cx("dd-wrapper")}>
        <div className={cx("dd-header")} onClick={() => this.toggleList()}>
            <div className={cx("dd-header-title")}>{headerTitle}</div>
            {listOpen
              ? <FontAwesome name="angle-up" size="2x"/>
              : <FontAwesome name="angle-down" size="2x"/>
            }
        </div>
		{listOpen && <ul className={cx("dd-list")} onClick={e => e.stopPropagation()}>
		       {list.map((item) => (
		         <li className={cx("dd-list-item")}
		             key={item.id}
			         onClick={() => this.selectItem(item.title, item.id, item.key)}
			      >
			          {item.title} {item.selected && <FontAwesome name="check"/>}

		          </li>
		        ))}
		      </ul>}
		    </div>
	  )
	}


}



export default Dropdown;