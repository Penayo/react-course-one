import AdminLayout from '../layouts/AdminLayout'
import NormalLayout from '../layouts/NormalLayout'
import AdminHome from '../pages/admin'
import AdminSignin from '../pages/admin/Signin'
import Home from '../pages/Home'
import Contacts from '../pages/Contacts'
import Error404 from '../pages/Error404'

const routes = [
  {
    path: "/admin",
    component: AdminLayout,
    exact: false,
    routes: [
      { path: '/admin', component: AdminHome, exact: true },
      { path: '/admin/login', component: AdminSignin, exact: true },
      {
        component: Error404
      }
    ]
  },
  {
    path: "/",
    component: NormalLayout,
    exact: false,
    routes: [{
      path: "/",
      component: Home,
      exact: true   
    }, {
      path: "/contacts",
      component: Contacts,
      exact: true   
    }, {
      component: Error404
    }]
  }
]

export default routes
