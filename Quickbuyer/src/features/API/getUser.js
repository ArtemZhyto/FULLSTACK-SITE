import axios from "axios"

export const getUser = async (userName) => {
	try {
		const res = await axios.get(`https://localhost:34673/user/${userName}`)
		console.log(res.data)
		return res.data
	} catch (error) {
		console.log(error)
	}
}
