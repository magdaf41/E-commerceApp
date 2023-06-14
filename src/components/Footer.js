import React from 'react'
import { StyledFooterContainer, StyledFooterSection } from './Footer.css'

const Footer = () => {
	return (
		<StyledFooterContainer>
			<StyledFooterSection>
				<h4>Who we are</h4>
				<p>About us</p>
				<p>Get in touch</p>
			</StyledFooterSection>
			<StyledFooterSection>
				<h4>Account</h4>
				<p>Register</p>
				<p>My orders</p>
			</StyledFooterSection>
			<StyledFooterSection>
				<h4>Customer Support</h4>
				<p>Terms of services</p>
				<p>Refund policy</p>
			</StyledFooterSection>
		</StyledFooterContainer>
	)
}

export default Footer
