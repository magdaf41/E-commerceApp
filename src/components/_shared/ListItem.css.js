import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const ListItem = styled(Link)`
	transition: transform 0.5s;
	&:hover {
		transform: scale(1.5);
	}
	& :focus {
		color: #068fff;
	}
`
