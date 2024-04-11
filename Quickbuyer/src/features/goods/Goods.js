import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"
const initialState = { goods: [], isLoading: false }

const fetchProducts = createAsyncThunk("goods/fetchproducts", async () => {

	try {
		const res = await axios.get("https://localhost:34673/products")
		return res.data
	} catch (error) {
		console.error(error)
	}
})

const Goods = createSlice({
	name: "goods",
	initialState,
	reducers: {
		addGood: (state, action) => {
			state.push(action.payload)
		},
	},
	extraReducers: (builder) => {
		builder.addCase(fetchProducts.fulfilled, (state, action) => {
			state.goods = action.payload
		})
	},
})

export const { addGood } = Goods.actions

export { fetchProducts }
export default Goods.reducer
