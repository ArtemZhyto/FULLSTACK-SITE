import React, { useEffect, useState } from "react"
import { useParams } from "react-router"
import YourProfile from "../../../widgets/typesOfProfiles/UI/YourProfile"
import OtherProfile from "../../../widgets/typesOfProfiles/UI/OtherProfile"
import { useDispatch, useSelector } from "react-redux"
import { chooseTheme } from "../../../features/slices/mainpage/mainPageInfo"
import {
	addCurrentUser,
	selectCurrentUser,
} from "../../../app/redux/slices/currentUser"
import axios from "axios"
const Profle = () => {
	const currentUser = useSelector(selectCurrentUser)
	const dispatch = useDispatch()
	const getSeller = async () => {
		const res = await axios.get(
			`https://localhost:34673/user/${currentUser.name}`
		)
		return res
	}
	useEffect(() => {
		const handleNewCurUser = () => {
			let localStorageUser = localStorage.getItem("currentUser")
			if (localStorageUser !== "undefined" && localStorageUser) {
				localStorageUser = JSON.parse(localStorageUser)
				dispatch(addCurrentUser(localStorageUser))
			}
		}
		handleNewCurUser()
		window.addEventListener("addCurUser", handleNewCurUser)
		return () => window.removeEventListener("addCurUser", handleNewCurUser)
	}, [])
	const urlId = useParams().id
	if (currentUser) {
		if (currentUser.ID === urlId) {
			return <YourProfile currentUser={currentUser} />
		}
		if (currentUser.ID !== urlId) {
			return <OtherProfile currentUser={getSeller} />
		}
	}
}

export default Profle
