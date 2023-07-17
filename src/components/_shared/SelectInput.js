import * as React from 'react'
import Box from '@mui/material/Box'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'

export default function BasicSelect() {
	const [age, setAge] = React.useState('')

	const handleChange = event => {
		setAge(event.target.value)
	}

	return (
		<Box sx={{ minWidth: 120, background: 'red' }}>
			<FormControl variant='standard' sx={{ m: 1, minWidth: 120, color: 'red' }}>
			
				<InputLabel id='demo-simple-select-standard-label'>Age</InputLabel>
				<Select
					style={{ color: 'red' }}
					labelId='demo-simple-select-standard-label'
					id='demo-simple-select-standard'
					value={age}
					onChange={handleChange}
					label='Age'>
					<MenuItem value=''>
						<em>None</em>
					</MenuItem>
					<MenuItem value={10}>Ten</MenuItem>
					<MenuItem value={20}>Twenty</MenuItem>
					<MenuItem value={30}>Thirty</MenuItem>
				</Select>
			</FormControl>
		</Box>
	)
}
