import {SELECTBANKLOCATION,ADDBOOKMARK,ADDSTRING,ENABLELOADING} from '../types';
import api from '../api';

const addbanks=(bankdata)=>({
	type:SELECTBANKLOCATION,
	bankdata
});

const loading = (bool)=>({
	type:ENABLELOADING,
	bool
});

const addbookmarks=(objdata)=>({
	type:ADDBOOKMARK,
	objdata
});

const savestring=(str)=>({
	type:ADDSTRING,
	str
});

export const selectbanks = url => dispatch => api.banks.fetchbanks(url).then(data=>dispatch(addbanks(data)))
													.then(()=>dispatch(loading(false)));

export const enableloading = (bool) => (dispatch)=>{
	dispatch(loading(bool));
};

export const addbookmark = (objdata) => (dispatch) =>{
		dispatch(addbookmarks(objdata));
	};

export const addstring = (str) => (dispatch) =>{
		dispatch(savestring(str));
	};



