import axios from "axios"
import { toast } from "react-toastify"

export const sendEnter = async (inputVal) => {
	const { mail, password } = inputVal
	try {
		const resp = await axios.get(
			`https://localhost:34673/enter/${password}/${mail}`
		)
		console.log(resp)
		localStorage.setItem("currentUser", JSON.stringify(resp.data))
		window.dispatchEvent(new Event("addCurUser"))
	} catch (error) {
		console.log(error)
		if (error.response.data === "Помилка. Користувач не знайден") {
			toast.error("Пользователь не найден ^_____^")
		}
		console.log(error)
	}
}
