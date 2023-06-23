const { v4: uuidv4 } = require('uuid')

export const ordersList = [
	{
		id: '1',
		date: new Date(),
		user: {
			id: '60444f59-cc0f-4be5-84d6-87c6c7c4e4ab',
			name: 'John Doe',
			email: 'john.doe@example.com',
			password: 'password123',
			role: 'admin',
		},
		products: [
			{
				id: 'd9e6cf7c-f332-423d-b936-d9a9b98d4435',
				title: 'Asus ZenBook 14',
				desc: 'Slim and lightweight laptop with a powerful processor and immersive display',
				image:
					'https://prod-api.mediaexpert.pl/api/images/gallery_500_500/thumbnails/images/52/5216542/Laptop-ASUS-ZenBook-Flip-UP3404VA-1.jpg',
				price: 1299,
				type: 'laptop',
				category: 'newest',
			},
			{
				id: 'b8aadf6b-6ccd-4c23-8753-4e9a96ed1cb1',
				title: 'Microsoft Surface Book 3',
				desc: 'Premium 2-in-1 laptop with detachable display and excellent performance',
				image:
					'https://f00.esfr.pl/foto/2/65674149761/83d6cc13508bbdfc795c05f5cdad833b/microsoft-laptop-book-3-i5-8gb-256ssd-w10,65674149761_3.jpg',
				price: 1799,
				type: 'laptop',
				category: 'newest',
			},
		],
	},
]
