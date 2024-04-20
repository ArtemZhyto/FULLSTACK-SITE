import { createSlice } from "@reduxjs/toolkit"

const initialState = {
	fromPrice: 0,
	toPrice: 0,
	country: "Украина",
	type: "Отличное",
	date: "Все",
	sort: "От дорогих",
}

const filterSlice = createSlice({
	name: "filterSlice",
	initialState,
	reducers: {
		changeFilter: (state, action) => {
			return { state, ...action.payload }
		},
	},
})

export default filterSlice.reducer