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
import FormAdminAddProduct from './components/FormAdminAddProduct'
import FormAdminEditProduct from './components/FormAdminEditProduct'

import Modal from './components/Modals/ClearCartModal'
import UsersListPage from './pages/PagesForEmployee/UsersListPage'

// import Modal from './components/Modal'

const router = createBrowserRouter([
	{
		path: '/',
		element: (
			<>
				<Header />
				<main>
					<HomePage />
				</main>
				<Footer />
			</>
		),
	},
	{
		path: '/mobile',
		element: (
			<>
				<Header />
				<main>
					<MobilePhonesPages />
				</main>
				<Footer />
			</>
		),
	},
	{
		path: '/headphone',
		element: (
			<>
				<Header />
				<main>
					<HeadphonePages />
				</main>
				<Footer />
			</>
		),
	},
	{
		path: '/smartwatch',
		element: (
			<>
				<Header />
				<main>
					<SmartwatchPages />
				</main>
				<Footer />
			</>
		),
	},
	{
		path: '/laptop',
		element: (
			<>
				<Header />
				<main>
					<LaptopPages />
				</main>
				<Footer />
			</>
		),
	},
	{
		path: '/thenewest',
		element: (
			<>
				<Header />
				<main>
					<TheNewesPage />
				</main>
				<Footer />
			</>
		),
	},
	{
		path: '/sale',
		element: (
			<>
				<Header />
				<main>
					<SalePage />
				</main>
				<Footer />
			</>
		),
	},
	{
		path: '/register',
		element: (
			<>
				<Header />
				<main>
					<RegisterPage />
				</main>
				<Footer />
			</>
		),
	},
	{
		path: '/login',
		element: (
			<>
				<Header />
				<main>
					<LoginPage />
				</main>
				<Footer />
			</>
		),
	},
	{
		path: '/order',
		element: (
			<>
				<Header />
				<main>
					<CartPage />
				</main>
				<Footer />
			</>
		),
	},
	{
		path: '/ordersList',
		element: (
			<>
				<Header />
				<main>
					<OrdersList />
				</main>
				<Footer />
			</>
		),
	},
	{
		path: '/products',
		element: (
			<>
				<Header />
				<main>
					<ProductsList />
				</main>
				<Footer />
			</>
		),
	},
	{
		path: '/products/addNewproduct',
		element: (
			<>
				<Header />
				<main>
					<FormAdminAddProduct />
				</main>
				<Footer />
			</>
		),
	},
	{
		path: '/editproduct/:id',
		element: (
			<>
				<Header />
				<main>
					<FormAdminEditProduct />
				</main>
				<Footer />
			</>
		),
	},
	{
		path: '/usersList',
		element: (
			<>
				<Header />
				<main>
					<UsersListPage />
				</main>
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
