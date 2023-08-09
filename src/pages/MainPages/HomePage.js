import React from 'react'
import { StyledContainerHomePage, StyledImage } from './HomePage.css'
import { useSelector } from 'react-redux'
import Modal from '../../components/Modals/Modal'

const HomePage = () => {
	const isOpen = useSelector(store => store.modal.isOpen)

	return (
		<>
			{isOpen ? (
				<Modal openTime={1000}>
					<h4>You have successfully logged out</h4>
				</Modal>
			) : null}
			<StyledContainerHomePage>
				<StyledImage>
					<img
						src='https://www.slashgear.com/img/gallery/12-best-uses-for-old-iphones/l-intro-1652467350.jpg'
						alt='iphone'
					/>
				</StyledImage>
				<StyledImage>
					<img
						src='https://mir-s3-cdn-cf.behance.net/project_modules/disp/23aa2567167779.5b309f18be63f.jpg'
						alt='headphone'
					/>
				</StyledImage>
				<StyledImage>
					<img
						src='https://www.91-cdn.com/hub/wp-content/uploads/2023/03/cult.fit-smartwatch-1200x900.jpg'
						alt='smartwatch'
					/>
				</StyledImage>

				<StyledImage>
					<img
						src='https://images.unsplash.com/photo-1559485494-b45fbb7b586b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHx8&w=1000&q=80'
						alt='laptop'
					/>
				</StyledImage>
			</StyledContainerHomePage>
		</>
	)
}

export default HomePage
