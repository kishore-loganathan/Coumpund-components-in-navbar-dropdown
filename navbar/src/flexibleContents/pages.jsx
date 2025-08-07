import Home from '../pages/Home';
import About from '../pages/About';
import Products from '../pages/Products';
import Category from '../pages/Category';
export const pages = [
  { path: '/', component: Home, label: 'Home' },
  { path: '/about', component: About, label: 'About' },
  { path: '/products', component: Products, label: 'Products' },
    { path: '/Category', component: Category, label: 'Category' }
];
export default pages;