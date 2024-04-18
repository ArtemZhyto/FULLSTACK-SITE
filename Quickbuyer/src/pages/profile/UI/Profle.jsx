import React, { useEffect, useState } from "react"
import { useParams } from "react-router"
import YourProfile from "./YourProfile"
import OtherProfile from "./OtherProfile"
import { ToastContainer } from "react-bootstrap"
import { useSelector } from "react-redux"
import { chooseTheme } from "../../../features/slices/mainpage/mainPageInfo"
const Profle = () => {
	const urlId = useParams().id
	const [currentUser, setCurrentUser] = useState({})
	useEffect(() => {
		const currentUser = JSON.parse(localStorage.getItem("currentUser"))
		if (currentUser) {
			setCurrentUser(currentUser)
		}
	}, [])
	if (currentUser) {
		if (currentUser.ID === urlId) {
			return (
				<YourProfile
					currentUser={currentUser}
					setCurrentUser={setCurrentUser}
				/>
			)
		}
		if (currentUser.ID !== urlId) {
			return (
				<OtherProfile
					currentUser={currentUser}
					setCurrentUser={setCurrentUser}
				/>
			)
		}
	}
	return <div>Profle</div>
}

export default Profle
