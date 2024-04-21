export const productsFilter = (products, qstring, filters) => {
	let sortedProducts = []
	switch (filters.sort) {
		case "Цена ↑":
			sortedProducts = [...products].sort((a, b) => b.price - a.price)
			break
		case "Цена ↓":
			sortedProducts = [...products].sort((a, b) => a.price - b.price)
			break
		case "оТновых":
			sortedProducts = [...products].sort((a, b) => a.date - b.date)
			break
		case "оТстарых":
			sortedProducts = [...products].sort((a, b) => b.date - a.date)
			break
		default:
			break
	}

	return sortedProducts
		.filter(
			(good) =>
				good.name.toLowerCase().includes(qstring.toLowerCase()) &&
				good.type === filters.type
		)
		.filter((good) => {
			switch (filters.date) {
				case "Все":
					return true
				case "Недавно":
					return good.date === 2024
				case "Давно":
					return good.date < 2024
				default:
					break
			}
		})
		.filter((good) =>
			filters.country === "Все" ? true : filters.country === good.country
		)
		.filter((good) => {
			if (filters.toPrice && filters.fromPrice) {
				return good.price >= filters.fromPrice && good.price <= filters.toPrice
			} else if (filters.fromPrice) {
				return good.price > filters.fromPrice
			} else if (filters.toPrice) {
				return good.price < filters.toPrice
			} else {
				return true
			}
		})
}
