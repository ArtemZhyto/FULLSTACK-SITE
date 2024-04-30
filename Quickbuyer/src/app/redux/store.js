import { configureStore } from "@reduxjs/toolkit"
import mainPageSlice from "@features/slices/mainPageSlice"
import currentUserSlice from "@features/slices/currentUserSlice"
import FilterSlice from "@features/slices/FilterSlice"

export const store = configureStore({
	reducer: {
		mainpage: mainPageSlice,
		currentUser: currentUserSlice,
		FilterSlice,
	},
})
