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
])

createRoot(document.getElementById('root')).render(
	<Provider store={store}>
		<RouterProvider router={router} />
	</Provider>
)
