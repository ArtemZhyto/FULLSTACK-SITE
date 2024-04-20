import mainpage from "../../features/slices/mainpage/mainPageInfo"
import { configureStore } from "@reduxjs/toolkit"
import currentUser from "./slices/currentUser"
import FilterSlice from "./slices/FilterSlice"

export const store = configureStore({
	reducer: {
		mainpage,
		currentUser,
		FilterSlice
	},
})
