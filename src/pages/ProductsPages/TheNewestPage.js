import React, { useEffect } from 'react'
import ProductPage from '../MainPages/ProductPage'

const TheNewesPage = () => {
	return (
		<ProductPage
			name='newest'
			img='https://images.pexels.com/photos/4995996/pexels-photo-4995996.jpeg?cs=srgb&dl=pexels-ivan-samkov-4995996.jpg&fm=jpg'
			autoCloseModalTime={2000}
		/>
	)
}

export default TheNewesPage
