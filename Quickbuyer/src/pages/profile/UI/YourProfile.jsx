import React from "react"
import { useSelector } from "react-redux"
import { selectCurrentUser } from "../../../features/slices/currentUser/currentUser"
import TextInput from "../../../shared/textInput/UI/TextInput.jsx"
const YourProfile = () => {
	const currentUser = useSelector(selectCurrentUser)
	return (
		<article className="yourProfile">
			<div className="yourProfile__globalinfo">
				<p className="yourProfile__soldProducts">
					Продано товаров : <span>{currentUser.sold}</span>
				</p>
				<p className="yourProfile__name">{currentUser.name}</p>
				<p className="yourProfile__years">
					Лет на нашем сайте {currentUser.regist_data - 2023}
				</p>
				<button type="button">Выйти</button>
			</div>
			<form className="yourProfile__additionalinfo">
				<TextInput
					customInput={<input type="email" />}
					text={currentUser.mail}
					label="Почта :"
				></TextInput>
			</form>
		</article>
	)
}

export default YourProfile
