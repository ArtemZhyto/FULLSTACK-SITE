import React, { useEffect, useState } from "react"
import { useParams } from "react-router"
import YourProfile from "../../../widgets/typesOfProfiles/UI/YourProfile"
import OtherProfile from "../../../widgets/typesOfProfiles/UI/OtherProfile"
import { useDispatch } from "react-redux"
import { chooseTheme } from "../../../features/slices/mainpage/mainPageInfo"
import {
	addCurrentUser,
	selectCurrentUser,
	sendEnter,
} from "../../../app/redux/slices/currentUser"
import axios from "axios"

const Profle = () => {
	let currentUser = localStorage.getItem("currentUser")
	console.log({currentUser})
	const dispatch = useDispatch()
	useEffect(() => {
		const handleNewCurUser = async () => {
			let localStorageUser = localStorage.getItem("currentUser")
			console.log(localStorageUser)
			if (localStorageUser !== "undefined" && localStorageUser) {
				localStorageUser = JSON.parse(localStorageUser)
				const res = await axios.get(
					`https://localhost:34673/enter/${localStorageUser.password}/${localStorageUser.mail}`
				).data
				localStorage.setItem("currentUser", JSON.stringify(res))
				dispatch(addCurrentUser(res))
			}
		}
		handleNewCurUser()
		window.addEventListener("addCurUser", handleNewCurUser)
		return () => window.removeEventListener("addCurUser", handleNewCurUser)
	}, [dispatch])
	const urlId = useParams().id
	if (currentUser) {
		if (currentUser.ID) {
			if (currentUser.ID === urlId) {
				return <YourProfile currentUser={currentUser} />
			}
			if (currentUser.ID !== urlId) {
				return <OtherProfile />
			}
		}
	}
}

export default Profle
// newCommitCheck