import axios from "axios"
import { sendEnter } from "./sendEnter"
import { toast } from "react-toastify"
import { useSelector } from "react-redux"
import { chooseTheme } from "../slices/mainpage/mainPageInfo"

export const sendUpdate = async ({
	ID,
	name,
	mail,
	password,
	sold,
	contactMail,
	phone,
	region,
	allowNotifications,
	instagram,
	telegram,
}) => {
	try {
		await axios.post(
			`https://localhost:34673/profile/update/${ID}/${name}/${mail}/${password}/${sold}/${contactMail}/${phone}/${region}/${allowNotifications}/${instagram}/${telegram}`
		)
		await sendEnter({ mail, password })
		toast.success("Профиль успешно изменен ;)")
	} catch (error) {
		console.log(error)
	}
}
