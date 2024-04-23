import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit"
import axios from "axios"
import { toast } from "react-toastify"

export const sendRegistration = createAsyncThunk(
	"currentUser/sendRegistration",
	async (inputVal, thunkApi) => {
		const { mail, password } = inputVal
		try {
			await axios.post(
				`https://localhost:34673/registration/${password}/${mail}`
			)
			const resp = await axios.get(
				`https://localhost:34673/enter/${password}/${mail}`
			)
			localStorage.setItem("currentUser", JSON.stringify(resp.data))
			window.dispatchEvent(new Event("addCurUser"))
			return resp.data
		} catch (error) {
			console.log(error)
			thunkApi.rejectWithValue(error)
		}
	}
)

export const sendEnter = createAsyncThunk(
	"currentUser/sendEnter",
	async (inputVal, thunkApi) => {
		const { mail, password } = inputVal
		console.log(inputVal)
		try {
			const resp = await axios.get(
				`https://localhost:34673/enter/${password}/${mail}`
			)
			localStorage.setItem("currentUser", JSON.stringify(resp.data))
			window.dispatchEvent(new Event("addCurUser"))
			return resp.data
		} catch (error) {
			console.log(error)
			if (error.response.data === "Помилка. Користувач не знайден") {
				toast.error("Пользователь не найден ^_____^")
			}
			thunkApi.rejectWithValue(error)
		}
	}
)

export const sendUpdate = createAsyncThunk(
	"currentUser/sendUpdate",
	async (_, thunkApi) => {
		const curUser = thunkApi.getState().currentUser
		const {
			ID,
			name,
			mail,
			password,
			sold,
			contactMail,
			phone,
			region,
			allowNotifications,
			instagram,
			telegram,
			img,
		} = curUser
		try {
			await axios.post(
				`https://localhost:34673/profile/update/${ID}/${name}/${mail}/${password}/${sold}/${contactMail}/${phone}/${region}/${allowNotifications}/${instagram}/${telegram}`,
				{ image: img }
			)
			// localStorage.setItem("currentUser", JSON.stringify(curUser))
			// window.dispatchEvent(new Event("addCurUser"))
			// toast.success("Профиль успешно изменен ;)")
		} catch (error) {
			thunkApi.rejectWithValue(error)
			console.log(error)
		}
	}
)

const initialState = {
	name: "",
	mail: "",
	password: "",
	ID: "",
	regist_data: 2024,
	sold: 0,
	contactMail: "no",
	phone: "no",
	region: "no",
	allowNotifications: true,
	instagram: "no",
	telegram: "no",
	products: [],
	image: "no",
}

const currentUser = createSlice({
	name: "currentUser",
	initialState,
	reducers: {
		addCurrentUser: (state, action) => {
			return { ...state, ...action.payload }
		},
		exitFromUser: (state, action) => {
			return { initialState }
		},
	},
	extraReducers: (builder) => {
		builder.addCase(sendRegistration.fulfilled, (state, action) => {
			return action.payload
		})
		builder.addCase(sendEnter.fulfilled, (state, action) => {
			return action.payload
		})
	},
})

export const selectCurrentUser = (state) => state.currentUser

export const { addCurrentUser, exitFromUser } = currentUser.actions

export default currentUser.reducer
