import mainpage from "../../features/slices/mainpage/mainPageInfo"
import { configureStore } from "@reduxjs/toolkit"

export const store = configureStore({
	reducer: {
		mainpage,
	},
})
