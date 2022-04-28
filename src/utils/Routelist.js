import Auth from '../pages/auth/Auth';
import Register from '../pages/register/Register';
import Main from '../pages/main/Main';
import Admin from '../pages/admin/Admin';
export const routeAuth = [
  {
    id:1,
    path:'/registration',
    exact:true,
    auth:false,
    element: Register
  },
  {
    id:2,
    path:'/authorization',
    exact:true,
    auth:false,
    element: Auth
  },
]

export const routePage = [
  {
    id:1,
    path:'/',
    exact:true,
    element:Main, 
    auth:true,
  },
  {
    id:2,
    path:'/admin',
    exact:true,
    auth:true,
    element: Admin
  },
]