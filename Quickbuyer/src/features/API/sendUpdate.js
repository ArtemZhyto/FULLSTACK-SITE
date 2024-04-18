import axios from "axios"
import { sendEnter } from "./sendEnter"

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
        console.log()
		await sendEnter({ mail, password })
	} catch (error) {
		console.log(error)
	}
}
