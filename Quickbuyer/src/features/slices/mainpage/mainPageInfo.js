import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"
const initialState = {
	goods: [],
	isLoading: false,
	isOpened: false,
	themeColour: "white",
}

const fetchProducts = createAsyncThunk("goods/fetchproducts", async () => {
	try {
		const res = await axios.get("https://localhost:34673/products")
		return res.data
	} catch (error) {
		console.error(error)
	}
})

// const 

const mainpage = createSlice({
	name: "mainpage",
	initialState,
	reducers: {
		addGood: (state, action) => {
			state.push(action.payload)
		},
		toggleLeftPanel: (state) => {
			state.isOpened = !state.isOpened
		},
		changeTheme: (state) => {
			state.themeColour = state.themeColour === "white" ? "dark" : "white"
		},
	},
	extraReducers: (builder) => {
		builder.addCase(fetchProducts.fulfilled, (state, action) => {
			state.goods = action.payload
		})
	},
})

export const { addGood, toggleLeftPanel, changeTheme } = mainpage.actions
export const chooseTheme = (state) => state.mainpage.themeColour
export const selectIsOpened = (state) => state.mainpage.isOpened
export { fetchProducts }
export default mainpage.reducer
