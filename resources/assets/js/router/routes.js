const Welcome = () => import('~/pages/welcome').then(m => m.default || m)
const Login = () => import('~/pages/auth/login').then(m => m.default || m)
const Register = () => import('~/pages/auth/register').then(m => m.default || m)
const PasswordEmail = () => import('~/pages/auth/password/email').then(m => m.default || m)
const PasswordReset = () => import('~/pages/auth/password/reset').then(m => m.default || m)
const NotFound = () => import('~/pages/errors/404').then(m => m.default || m)

const Cart = () => import('~/pages/cart').then(m => m.default || m)

const Home = () => import('~/pages/home').then(m => m.default || m)
const Settings = () => import('~/pages/settings/index').then(m => m.default || m)
const SettingsProfile = () => import('~/pages/settings/profile').then(m => m.default || m)
const SettingsPassword = () => import('~/pages/settings/password').then(m => m.default || m)

const Admin = () => import('~/pages/admin/index').then(m => m.default || m)
const AdminDashboard = () => import('~/pages/admin/dashboard').then(m => m.default || m)
const AdminProducts = () => import('~/pages/admin/products').then(m => m.default || m)
const AdminCategories = () => import('~/pages/admin/categories').then(m => m.default || m)

export default [
  { path: '/', name: 'welcome', component: Welcome },

  { path: '/login', name: 'login', component: Login },
  { path: '/register', name: 'register', component: Register },
  { path: '/password/reset', name: 'password.request', component: PasswordEmail },
  { path: '/password/reset/:token', name: 'password.reset', component: PasswordReset },

  // { path: '/home', name: 'home', component: Home },
  { path: '/cart', name: 'cart', component: Cart },
  { path: '/settings',
    component: Settings,
    children: [
      { path: '', redirect: { name: 'settings.profile' } },
      { path: 'profile', name: 'settings.profile', component: SettingsProfile },
      { path: 'password', name: 'settings.password', component: SettingsPassword }
    ]
  },

  { path: '/admin',
    component: Admin,
    children: [
      { path: '', redirect: { name: 'admin.dashboard' } },
      { path: 'dashboard', name: 'admin.dashboard', component: AdminDashboard },
      { path: 'products', name: 'admin.products', component: AdminProducts },
      { path: 'categories', name: 'admin.categories', component: AdminCategories },
      { path: 'orders', name: 'admin.orders', component: AdminCategories }
    ]
  },

  { path: '*', component: NotFound }
]
