// @material-ui/icons
import Bookmark from "@material-ui/icons/Bookmark";

const dashboardRoutes = [  
  {
    path: "/bookmark",
    topbarName: "Bookmarks",
    navbarName: "Bookmarks",
    icon: Bookmark
  },
  { redirect: true, path: "/", to: "/home", navbarName: "Redirect" }
];

export default dashboardRoutes;
