import axios from "axios"

export const getSingleProduct = async (setCurrentProduct, currentProductId) => {
	const res = await axios.get(
		`http://127.0.0.1:8000/products/${currentProductId}`
	)
	res.data.images = JSON.parse(res.data.images)
	setCurrentProduct(res.data)
}
