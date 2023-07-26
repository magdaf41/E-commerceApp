import React, { useState } from 'react'
import ProductPage from '../MainPages/ProductPage'

const SalePage = () => {
	return (
		<ProductPage
			name='sale'
			img='https://daisylinden.com/wp-content/uploads/apple-watch-girl-hand.jpg'
			autoCloseModalTime={1000}
		/>
	)
}

export default SalePage
