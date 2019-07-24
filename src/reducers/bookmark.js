import {ADDBOOKMARK,ADDSTRING} from '../types';

export const bookmarks = (state={data:[]},action={})=>{
	switch(action.type){
		case ADDBOOKMARK:
			return Object.assign({},{
				...state,
				["data"]:[...state["data"],action.objdata]
			});
		default: return state;
	}
}

export const searchstring = (state="",action={})=>{
	switch(action.type){
		case ADDSTRING:
			return action.str;
		default: return state;
	}
}
