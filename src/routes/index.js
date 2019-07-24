import Home from '../views/Home';
import Bookmark from '../views/Bookmark';
const indexRoutes =[
	{
		path:"/",
		component:Home,
		name:"home"

	},
	{
		path:"/bookmark",
		component:Bookmark,
		name:"bookmark"

	}
];

export default indexRoutes;