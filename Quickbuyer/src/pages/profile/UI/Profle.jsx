import React, { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router"
import YourProfile from "../../../widgets/typesOfProfiles/UI/YourProfile"
import OtherProfile from "../../../widgets/typesOfProfiles/UI/OtherProfile"
import { useDispatch, useSelector } from "react-redux"
import { chooseTheme } from "../../../features/slices/mainpage/mainPageInfo"
import {
	addCurrentUser,
	exitFromUser,
	selectCurrentUser,
	sendEnter,
} from "../../../app/redux/slices/currentUser"
import axios from "axios"

const Profle = () => {
	let currentUser = useSelector(selectCurrentUser)
	const dispatch = useDispatch()
	const navigate = useNavigate()
	useEffect(() => {
		const handleNewCurUser = async () => {
			let localStorageUser = localStorage.getItem("currentUser")
			if (localStorageUser !== "undefined" && localStorageUser) {
				localStorageUser = JSON.parse(localStorageUser)
				try {
					const res = await axios.get(
						`https://localhost:34673/enter/${localStorageUser.password}/${localStorageUser.mail}`
					)
					localStorage.setItem("currentUser", JSON.stringify(res.data))
					dispatch(addCurrentUser(res.data))
				} catch (error) {
					localStorage.clear()
					dispatch(exitFromUser())
					navigate("/registration")
				}
			} else {
				navigate("/registration")
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
			} else {
				return <OtherProfile></OtherProfile>
			}
		}
	}
}

export default Profle
// newCommitCheck
