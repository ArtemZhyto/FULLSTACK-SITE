import mainpage from "../../features/slices/mainpage/mainPageInfo"
import { configureStore } from "@reduxjs/toolkit"
import currentUser from "./slices/currentUser"

export const store = configureStore({
	reducer: {
		mainpage,
		currentUser,
	},
})
