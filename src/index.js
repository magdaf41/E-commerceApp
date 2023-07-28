import React from 'react'
import './index.css'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import { Provider } from 'react-redux'
import { store } from './store'
import RegisterPage from './pages/MainPages/RegisterPage'
import LoginPage from './pages/MainPages/LoginPage'
import MobilePhonesPages from './pages/ProductsPages/MobilePhonesPages'
import HeadphonePages from './pages/ProductsPages/HeadphonePages'
import LaptopPages from './pages/ProductsPages/LaptopPages'
import SmartwatchPages from './pages/ProductsPages/SmartwatchPages'
import TheNewesPage from './pages/ProductsPages/TheNewestPage'
import SalePage from './pages/ProductsPages/SalePage'
import HomePage from './pages/MainPages/HomePage'
import CartPage from './pages/MainPages/CartPage'

import OrdersList from './pages/PagesForEmployee/OrdersList'
import ProductsList from './pages/PagesForEmployee/ProductsList'
import FormAdminAddProduct from './components/Forms/FormAdminAddProduct'
import FormAdminEditProduct from './components/Forms/FormAdminEditProduct'

import UsersListPage from './pages/PagesForEmployee/UsersListPage'

// import Modal from './components/Modal'

const router = createBrowserRouter([
	{
		path: '/',
		element: (
			<>
				<Header />
				<HomePage />
				<Footer />
			</>
		),
	},
	{
		path: '/mobile',
		element: (
			<>
				<Header />
				<MobilePhonesPages />
				<Footer />
			</>
		),
	},
	{
		path: '/headphone',
		element: (
			<>
				<Header />
				<HeadphonePages />
				<Footer />
			</>
		),
	},
	{
		path: '/smartwatch',
		element: (
			<>
				<Header />
				<SmartwatchPages />
				<Footer />
			</>
		),
	},
	{
		path: '/laptop',
		element: (
			<>
				<Header />
				<LaptopPages />
				<Footer />
			</>
		),
	},
	{
		path: '/thenewest',
		element: (
			<>
				<Header />
				<TheNewesPage />
				<Footer />
			</>
		),
	},
	{
		path: '/sale',
		element: (
			<>
				<Header />
				<SalePage />
				<Footer />
			</>
		),
	},
	{
		path: '/register',
		element: (
			<>
				<Header />
				<RegisterPage />
				<Footer />
			</>
		),
	},
	{
		path: '/login',
		element: (
			<>
				<Header />
				<LoginPage />
				<Footer />
			</>
		),
	},
	{
		path: '/order',
		element: (
			<>
				<Header />
				<CartPage />
				<Footer />
			</>
		),
	},
	{
		path: '/ordersList',
		element: (
			<>
				<Header />
				<OrdersList />
				<Footer />
			</>
		),
	},
	{
		path: '/products',
		element: (
			<>
				<Header />
				<ProductsList />
				<Footer />
			</>
		),
	},
	{
		path: '/products/addNewproduct',
		element: (
			<>
				<Header />
				<FormAdminAddProduct />
				<Footer />
			</>
		),
	},
	{
		path: '/editproduct/:id',
		element: (
			<>
				<Header />
				<FormAdminEditProduct />
				<Footer />
			</>
		),
	},
	{
		path: '/usersList',
		element: (
			<>
				<Header />
				<UsersListPage />
				<Footer />
			</>
		),
	},
])

createRoot(document.getElementById('root')).render(
	<Provider store={store}>
		<RouterProvider router={router} />
	</Provider>
)
