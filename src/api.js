import axios from 'axios';

export default {
	banks:{
		fetchbanks: url =>axios.get(`https://cors-anywhere.herokuapp.com/${url}`).then(res=>res.data)
	}
};


