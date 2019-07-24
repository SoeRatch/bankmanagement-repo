import { combineReducers } from 'redux';
import {banks,isLoading} from './reducers/banks';
import {bookmarks,searchstring} from './reducers/bookmark';
export default combineReducers({
	banks,
	isLoading,
	bookmarks,
	searchstring
});