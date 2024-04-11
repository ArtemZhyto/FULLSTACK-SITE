import Goods from "../../features/goods/Goods"
import { configureStore } from "@reduxjs/toolkit"

export const store = configureStore({
	reducer: {
		goods: Goods,
	},
})
