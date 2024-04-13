import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"
import { toast } from "react-toastify"
export const sendEnter = createAsyncThunk("sendEnter", async (inputVal) => {
	const { mail, password } = inputVal
	try {
		const resp = await axios.get(
			`https://localhost:34673/enter/${password}/${mail}`
		)
		return resp.data
	} catch (error) {
		console.log(error)
		if (error.response.data === "Помилка. Користувач не знайден") {
            toast.error("Пользователь не найден ^_____^")
		}
		throw error
	}
})
export const sendRegistration = createAsyncThunk(
	"sendRegistration",
	async (inputVal) => {
		const { mail, password } = inputVal
		try {
			const res = await axios.post(
				`https://localhost:34673/registration/${password}/${mail}`
			)
			return inputVal
		} catch (error) {
			console.log(error)
			throw error
		}
	}
)

const initialState = {
	mail: "",
	password: "",
	regist_data: 2024,
	id: undefined,
	sold: 0,
	contactMail: "no",
	phone: "no",
	region: "no",
	allowNotifications: true,
	instagram: "no",
	telegram: "no",
	img: "no",
}

const currentUser = createSlice({
	name: "currentUser",
	initialState,
	reducers: {
		addCurrentUser: (state, action) => {
			return action.payload
		},
	},
	extraReducers: (builder) => {
		builder.addCase(sendEnter.fulfilled, (state, action) => {
			return action.payload
		})
		builder.addCase(sendRegistration.fulfilled, (state, action) => {
			return { ...state, ...action.payload }
		})
	},
})

export const { addCurrentUser } = currentUser.actions

export default currentUser.reducer
