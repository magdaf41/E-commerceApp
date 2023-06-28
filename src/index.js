import React from 'react'
import './index.css'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import { Provider } from 'react-redux'
import { store } from './store'
import RegisterPage from './pages/RegisterPage'
import LoginPage from './pages/LoginPage'
import MobilePhonesPages from './pages/MobilePhonesPages'
import HeadphonesPages from './pages/HeadphonesPages'
import SmartwatchPages from './pages/SmartwatchPages'
import HomePage from './pages/HomePage'
import CartPage from './pages/CartPage'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import LaptopPages from './pages/LaptopPages'
import OrdersList from './pages/OrdersList'
import ProductsList from './pages/ProductsList'
import FormAdminAddProduct from './components/FormAdminAddProduct'
import FormAdminEditProduct from './components/FormAdminEditProduct'
import TheNewesPage from './pages/TheNewestPage'
import SalePage from './pages/SalePage'

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
					<HeadphonesPages />
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
		path: '/addNewproduct',
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
		path: '/editproduct',
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
])

createRoot(document.getElementById('root')).render(
	<Provider store={store}>
		<RouterProvider router={router} />
		<ToastContainer />
	</Provider>
)
