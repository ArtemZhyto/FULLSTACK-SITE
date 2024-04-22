import axios from "axios"

export const getSingleProduct = async (setCurrentProduct, currentProductId) => {
	const res = await axios.get(
		`https://localhost:34673/products/${currentProductId}`
	)
	setCurrentProduct(res.data)
}
