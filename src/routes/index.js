import Home from '~/pages/Home';
import PostDetail from '~/pages/PostDetail';
import Login from '~/pages/Login';
import Register from '~/pages/Register';
import SearchResult from '~/pages/SearchResult';
import SearchByImage from '~/pages/SearchByImage';

//LAYOUT
import BlankLayout from '~/layouts/User/BlankLayout';
import AdminLayout from '~/layouts/Admin/AdminLayout';
//USER
import AddPost from '~/pages/AddPost';
import EditPost from '~/pages/EditPost';
import Following from '~/pages/Following';
import PostsSaved from '~/pages/PostsSaved';
import ManagePosts from '~/pages/ManagePosts';
import Personal from '~/pages/Personal';
import BiographicalPage from '~/pages/BiographPage';

//ADMIN
import Dashboard from '~/pages/Admin/Dashboard';
import EditUser from '~/pages/EditUser';

export const publicRoute = [
  {
    path: '/',
    component: Home,
  },
  {
    path: 'auth',
    component: Login,
    layout: BlankLayout,
  },
  {
    path: 'register',
    component: Register,
    layout: BlankLayout,
  },

  {
    path: 'posts/:id',
    component: PostDetail,
  },
  {
    path: 'search',
    component: SearchResult,
  },
  {
    path: '/search/image',
    component: SearchByImage,
  },
];

export const userRoute = [
  {
    path: 'upload',
    component: AddPost,
  },
  {
    path: 'edit/:id',
    component: EditPost,
  },

  {
    path: '/personal/:id',
    component: Personal,
  },
  {
    path: '/personal/edit/:id',
    component: EditUser,
  },
  {
    path: 'managePosts',
    component: ManagePosts,
  },
  {
    path: 'following/:id',
    component: Following,
  },
  {
    path: 'postsSaved',
    component: PostsSaved,
  },
];
export const adminRoute = [
  {
    path: 'dashboard',
    component: Dashboard,
    layout: AdminLayout,
  },
];
