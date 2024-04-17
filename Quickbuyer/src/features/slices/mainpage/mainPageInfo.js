import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"
const initialState = {
	goods: [],
	isLoading: false,
	isOpened: false,
	themeColour: "white",
}

export const fetchProducts = createAsyncThunk(
	"goods/fetchproducts",
	async (_, thunkApi) => {
		try {
			const res = await axios.get("https://localhost:34673/products")
			return res.data
		} catch (error) {
			console.log("rejected")
			thunkApi.rejectWithValue(error)
		}
	}
)

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
export const selectGoods = (state) => state.mainpage.goods
export default mainpage.reducer
