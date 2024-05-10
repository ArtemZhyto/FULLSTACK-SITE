import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"
const initialState = {
	goods: [],
	isLoading: false,
	isBurgerOpened: false,
	isFiltersOpened: false,
	isCategorysOpened: false,
	themeColour: "white",
	search: "",
	sumOfBucket : 0
}

export const fetchProducts = createAsyncThunk(
	"goods/fetchproducts",	
	async (_, thunkApi) => {
		try {
			const res = await axios.get("http://127.0.0.1:8000/products/?limit=0")
			res.data.objects.forEach((product) => {
				product.images = JSON.parse(product.images)
			})
			return res.data.objects
		} catch (error) {
			console.log(error)
			thunkApi.rejectWithValue(error)
		}
	}
)

const mainpage = createSlice({
	name: "mainpage",
	initialState,
	reducers: {
		changeSearch: (state, action) => {
			state.search = action.payload
		},
		addGood: (state, action) => {
			state.push(action.payload)
		},
		changeMainPage : (state, action) => {
      return {...state, ...action.payload}
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
				isCategorysOpened: !state.isCategorysOpened,
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
	changeSearch,
	changeMainPage
} = mainpage.actions
export const chooseTheme = (state) => state.mainpage.themeColour
export const selectIsBurgerOpened = (state) => state.mainpage.isBurgerOpened
export const selectIsFiltersOpened = (state) => state.mainpage.isFiltersOpened
export const selectIsCategorysOpened = (state) =>
	state.mainpage.isCategorysOpened
export const selectGoods = (state) => state.mainpage.goods
export const selectSearch = (state) => state.mainpage.search
export const selectSumOfBucket = (state) => state.mainpage.sumOfBucket
export default mainpage.reducer
