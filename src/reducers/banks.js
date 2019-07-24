import {SELECTBANKLOCATION,ENABLELOADING} from '../types';



export const banks = (state={banks:[]},action={})=>{
	switch(action.type){
		case SELECTBANKLOCATION:
			return [...action.bankdata]
		default: return state;
	}
}


export const isLoading = (state=false,action={})=>{
	switch(action.type){
		case ENABLELOADING:
			return action.bool
		default: return state;
	}
}
