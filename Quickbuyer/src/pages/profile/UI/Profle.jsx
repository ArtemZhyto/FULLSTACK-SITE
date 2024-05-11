import React, { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router"
import YourProfile from "../../../widgets/typesOfProfiles/UI/YourProfile"
import OtherProfile from "../../../widgets/typesOfProfiles/UI/OtherProfile"
import { useDispatch, useSelector } from "react-redux"
import { chooseTheme } from "@features/slices/mainPageSlice"
import {
	addCurrentUser,
	exitFromUser,
	selectCurrentUser,
	sendEnter,
} from "@features/slices/currentUserSlice"
import axios from "axios"
import { ToastContainer } from "react-toastify"

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
						`http://127.0.0.1:8000/enter/?user_password=${localStorageUser.password}&user_email=${localStorageUser.mail}`
					)
					localStorage.setItem(
						"currentUser",
						JSON.stringify(res.data.objects[0])
					)
					dispatch(addCurrentUser(res.data.objects[0]))
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
	}, [dispatch, navigate])
	const urlId = parseInt(useParams().id)
	if (currentUser) {
		if (currentUser.id) {
			if (currentUser.id === urlId) {
				return <YourProfile currentUser={currentUser} />
			} else {
				return <OtherProfile></OtherProfile>
			}
		}
	}
}

export default Profle
// newCommitCheck
