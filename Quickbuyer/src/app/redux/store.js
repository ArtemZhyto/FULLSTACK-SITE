import currentUser from "../../features/slices/currentUser/currentUser"
import mainpage from "../../features/slices/mainpage/mainPageInfo"
import { configureStore } from "@reduxjs/toolkit"

export const store = configureStore({
	reducer: {
		mainpage,
		currentUser,
	},
})
