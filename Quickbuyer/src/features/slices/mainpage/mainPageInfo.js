import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"
const initialState = {
	goods: [],
	isLoading: false,
	isBurgerOpened: false,
	isFiltersOpened: false,
	isCategorysOpened: false,
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
		toggleBurger: (state) => {
			return {
				...state,
				isBurgerOpened: !state.isBurgerOpened,
				isFiltersOpened: false,
				isCategorysOpened: false,
			}
		},
		toggleFilters: (state) => {
			return {
				...state,
				isBurgerOpened: false,
				isFiltersOpened: !state.isFiltersOpened,
				isCategorysOpened: false,
			}
		},
		toggleCategorys: (state) => {
			return {
				...state,
				isBurgerOpened: false,
				isFiltersOpened: false,
				isCategorysOpened: !state.isFiltersOpened,
			}
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

export const {
	addGood,
	changeTheme,
	toggleBurger,
	toggleCategorys,
	toggleFilters,
} = mainpage.actions
export const chooseTheme = (state) => state.mainpage.themeColour
export const selectIsBurgerOpened = (state) => state.mainpage.isBurgerOpened
export const selectIsFiltersOpened = (state) => state.mainpage.isFiltersOpened
export const selectIsCategorysOpened = (state) =>
	state.mainpage.isCategorysOpened
export const selectGoods = (state) => state.mainpage.goods
export default mainpage.reducer
