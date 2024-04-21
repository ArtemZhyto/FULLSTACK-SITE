import { createSlice } from "@reduxjs/toolkit"

const initialState = {
	fromPrice: 0,
	toPrice: 0,
	country: "Все",
	type: "Отличное",
	date: "Все",
	sort: "Цена ↓",
	category: null,
}

const filterSlice = createSlice({
	name: "FilterSlice",
	initialState,
	reducers: {
		changeFilter: (state, action) => {
			return { ...state, ...action.payload }
		},
	},
})

export const { changeFilter } = filterSlice.actions

export const chooseFilters = (state) => state.FilterSlice

export default filterSlice.reducer
