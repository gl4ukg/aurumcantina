export const menuWeekData = {
	subtitle: "This week's specials",
	title: "Delicious Dishes You Can't Miss",
	phrase: "The first restaurant proprietor is believed to have been one A. Boulanger, a soup vendor, who opened his business in 1765.",
	divider: true,
	align: "center",
	buttonText: "View Full Menu",
	buttonUrl: "/menu",
	emptyMessage: "No week specials available at the moment.",
	items: [
		{
			id: 1,
			title: "pan seared scallops",
			price: "$29.00",
			description: "Saffron, celeriac puree, black pudding, olive oil",
		},
		{
			id: 2,
			title: "Sea Bass Ceviche",
			price: "$28.50",
			description: "Avocado, butternut, lime",
		},
		{
			id: 3,
			title: "Pan Seared Sea Bass",
			price: "$18.50",
			description: "Saffron and mussel's broth, new potatoes",
		},
		{
			id: 4,
			title: "King prawns and Lobster",
			price: "$41.50",
			description: "Creamy saffron, sauce Vierge",
		},
		{
			id: 5,
			title: "Nduja Pork chicken Terrin",
			price: "$27.50",
			description: "Smoked duck breast, pistachio, smoked pancetta",
		},
		{
			id: 6,
			title: "King prawns and Lobster",
			price: "$41.50",
			description: "Creamy saffron, sauce Vierge",
		},
		{
			id: 7,
			title: "Crab With Curry Sources",
			price: "$38.00",
			description: "Candied Jerusalem artichokes, truffle",
		},
		{
			id: 8,
			title: "Viennese Veal Cutlet",
			price: "$26.00",
			description: "Ricotta and spinach gnocchi, Caccio de Pepe",
		},
		{
			id: 9,
			title: "Tender Octopus and Fennel",
			price: "$28.50",
			description: "Citrus, wild rocket condiment",
		},
		{
			id: 10,
			title: "Thinly Sliced Brittany Artichokes",
			price: "$42.50",
			description: "Citrus, wild rocket condiment",
		},
		{
			id: 11,
			title: "Cod Filet Cooked on One Side",
			price: "$32.50",
			description: "Chorizo, chickpea espuma, pequillos",
		},
		{
			id: 12,
			title: "Grilled Black Angus Sirloin Steak",
			price: "$22.50",
			description: "Coin de rue potatoes, Béarnaise sauce",
		},
	],
};

export const categoryDishesData = {
	subtitle: "Menu",
	title: "Shfletoni menunë tonë",
	phrase: "Where Espresso meets Tequila – Aurum Vibes All Day",
	divider: true,
	emptyMessage: "No offers available at the moment.",
	items: [
		{
			id: 1,
			tag: "Breakfast Bites",
			title: "Breakfast Bites",
			align: "left",
			phrase: "Shërbehen deri në orën 12:00",
			image: "/menu/menu-1.webp",
			altText: "Breakfast",
			icon: "/icons/burger.svg",
			link: "/",
			anchor: "breakfast",
			dishesList: [
				{
					id: 1,
					title: "Omelette Aurum",
					price: "2.50€",
					description: "Me djathë të bardhë, domate, spinaq",
				},
				{
					id: 2,
					title: "Llokuma Delight",
					price: "2.50€",
					description: "Llokuma të ngrohta me mjaltë ose reçel shtëpie",
				},
				{
					id: 3,
					title: "Toast Italiano",
					price: "2.00€",
					description: "Bukë e thekur me djathë kaçkavall & proshutë",
				},
			],
		},
		{
			id: 2,
			tag: "Urban Bites",
			title: "Urban Bites",
			align: "left",
			phrase: "",
			image: "/menu/menu-2.jpg",
			altText: "Urban Bites",
			icon: "/icons/specials.svg",
			link: "/",
			anchor: "urban-bites",
			dishesList: [
				{
					id: 1,
					title: "American Smash Burger",
					price: "3.20€",
					description: "Dy shtresa mishi, kaçkavall cheddar, qepë e fërguar",
				},
				{
					id: 2,
					title: "Chicken Burger Deluxe",
					price: "3.00€",
					description: "Fileto pule krokante, salcë shtëpie, rukola",
				},
				{
					id: 3,
					title: "Pizza La Notte",
					price: "4.00€",
					description: "Me mozzarella, proshutë & kërpurdha",
				},
				{
					id: 4,
					title: "Sanduiç me Pule (Panino di Pollo)",
					price: "3.00€",
					description: "Chicken sandwich me salcë dijon & djathë edamer",
				},
				{
					id: 5,
					title: "Sub Mexicano",
					price: "3.50€",
					description: "Sanduiç me mish viçi, salsa jo shumë e djegës dhe qepë të kuqe",
				},
			],
		},
		{
			id: 3,
			tag: "Viva La Mexico",
			title: "Viva La Mexico",
			align: "left",
			phrase: "",
			image: "/menu/menu-3.webp",
			altText: "Mexican",
			icon: "/icons/taco.svg",
			link: "/",
			anchor: "mexico",
			dishesList: [
				{
					id: 1,
					title: "Tacos Trio",
					price: "5.00€ / 2.00€ një copë",
					description: "3 tacos (pule, viç, vegjetarian)",
				},
				{
					id: 2,
					title: "Quesadilla Picante",
					price: "5.00€",
					description: "Me djathë, mish pule ose viçi dhe salcë të nxehtë",
				},
				{
					id: 3,
					title: "Burrito Grande",
					price: "5.50€",
					description: "I mbushur me oriz, mish, fasule dhe guacamole",
				},
				{
					id: 4,
					title: "Sub Mexicano (XL)",
					price: "4.00€",
					description: "Versión XL, me djathë të shkrirë dhe salcë chipotle",
				},
			],
		},
		{
			id: 4,
			tag: "Fresh & Fit",
			title: "Fresh & Fit – Salads Bar",
			align: "left",
			phrase: "",
			image: "/menu/menu-4.jpeg",
			altText: "Salads",
			icon: "/icons/salad.svg",
			link: "/",
			anchor: "salads",
			dishesList: [
				{
					id: 1,
					title: "Sallatë Shope “Tradizione”",
					price: "2.50€",
					description: "Domate, kastravec, djathë",
				},
				{
					id: 2,
					title: "Pollo Verde",
					price: "4.00€",
					description: "Sallatë me fileto pule, avokado dhe rukola",
				},
				{
					id: 3,
					title: "Tuna Breeze",
					price: "4.00€",
					description: "Sallatë me ton, vezë dhe limonette dressing",
				},
				{
					id: 4,
					title: "Greek Island Bowl",
					price: "3.00€",
					description: "Feta, ullinj, kastravec, rigon & dashuri",
				},
			],
		},
		{
			id: 5,
			tag: "Pasta",
			title: "Pasta e Passione",
			align: "left",
			phrase: "",
			image: "/menu/menu-5.jpg",
			altText: "Pasta",
			icon: "/icons/pasta.svg",
			link: "/",
			anchor: "pasta",
			dishesList: [
				{
					id: 1,
					title: "Tagliatelle Bolognese",
					price: "5.00€",
					description: "Recetë origjinale me mish viçi",
				},
				{
					id: 2,
					title: "Fettuccine Alfredo",
					price: "4.00€",
					description: "Me pana, gjalpë dhe parmixhan",
				},
				{
					id: 3,
					title: "Penne Primavera",
					price: "3.50€",
					description: "Me perime të freskëta dhe pesto verde",
				},
				{
					id: 4,
					title: "Spaghetti me Karkaleca",
					price: "8.00€",
					description: "Spaghetti al dente me karkaleca të freskët, hudhër, verë të bardhë dhe majdanoz",
				},
			],
		},
		{
			id: 6,
			tag: "Risotto",
			title: "Risotto Romantico",
			align: "left",
			phrase: "",
			image: "/menu/menu-6.webp",
			altText: "Risotto",
			icon: "/icons/risotto.svg",
			link: "/",
			anchor: "risotto",
			dishesList: [
				{
					id: 1,
					title: "Risotto alle Verdure",
					price: "3.50€",
					description: "Me perime të stinës dhe shafran",
				},
				{
					id: 2,
					title: "Risotto con Pollo",
					price: "5.00€",
					description: "Kremoz me copa pule dhe parmixhan",
				},
				{
					id: 3,
					title: "Risotto me Fruta Deti",
					price: "8.00€",
					description: "Me karkaleca, midhje dhe kallamarë, verë e bardhë dhe majdanoz",
				},
			],
		},
		{
			id: 7,
			tag: "Specials",
			title: "Specialet e Aurum – La Carne Selezionata",
			align: "left",
			phrase: "",
			image: "/menu/menu-7.jpg",
			altText: "Specials",
			icon: "/icons/steak.svg",
			link: "/",
			anchor: "specials",
			dishesList: [
				{
					id: 1,
					title: "Biftek i Zgarës",
					price: "14.00€",
					description: "Pjekur sipas preferencës, me patate dhe salcë piper të zi",
				},
				{
					id: 2,
					title: "Gjoks Pule i Marinuar dhe i Pjekur",
					price: "6.00€",
					description: "Me perime të freskëta dhe salcë shtëpie të bardhë",
				},
				{
					id: 3,
					title: "Karkaleca të Pjekur në Zgarë",
					price: "8.00€",
					description: "Marinuar me hudhër, limon dhe vaj ulliri",
				},
			],
		},
		{
			id: 8,
			tag: "Meza",
			title: "Meza e Zjarrtë – Aurum Platter",
			align: "left",
			phrase: "",
			image: "/menu/menu-8.webp",
			altText: "Meza",
			icon: "/icons/platter.svg",
			link: "/",
			anchor: "meza",
			dishesList: [
				{
					id: 1,
					title: "Meza e Zjarrtë",
					price: "15.00€",
					description: "Taco, kaçkavall, djathë i bardhë, chicken fingers, ullinj të marinuar",
				},
			],
		},
	],
};
