import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit"
import axios from "axios"
import { toast } from "react-toastify"

export const sendRegistration = createAsyncThunk(
	"currentUser/sendRegistration",
	async (inputVal, thunkApi) => {
		const { mail, password } = inputVal
		try {
			await axios.post(
				"http://127.0.0.1:8000/registration/",
				{
					password,
					mail,
				},
				{
					headers: { Authorization: "ApiKey admin:1234" },
				}
			)
			const resp = await axios.get(
				`http://127.0.0.1:8000/enter?user_password=${password}&user_email=${mail}`
			)
			localStorage.setItem("currentUser", JSON.stringify(resp.data.objects[0]))
			window.dispatchEvent(new Event("addCurUser"))
			return resp.data.objects[0]
		} catch (error) {
			if (error.response.data.error_message === "object already exists!!") {
				toast.error("Пользователь уже существует, сделайте вход  ^_____^")
			}
			console.log(error)
			thunkApi.rejectWithValue(error)
		}
	}
)

export const sendEnter = createAsyncThunk(
	"currentUser/sendEnter",
	async (inputVal, thunkApi) => {
		const { mail, password } = inputVal
		try {
			const resp = await axios.get(
				`http://127.0.0.1:8000/enter?user_password=${password}&user_email=${mail}`
			)
			localStorage.setItem("currentUser", JSON.stringify(resp.data.objects[0]))
			window.dispatchEvent(new Event("addCurUser"))
			return resp.data.objects[0]
		} catch (error) {
			console.log(error)
			if (error.response.data.error_message === "object already exists!!") {
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
			id,
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
			image,
			products,
		} = curUser
		try {
			const headers = {
				Authorization: "ApiKey admin:1234",
			}
			await axios.post(
				`http://127.0.0.1:8000/update/`,
				{
					id,
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
					image,
					products,
				},
				{ headers: headers }
			)
			localStorage.setItem("currentUser", JSON.stringify(curUser))
			window.dispatchEvent(new Event("addCurUser"))
			toast.success("Профиль успешно изменен ;)")
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
	id: "",
	regist_data: 2024,
	sold: 0,
	contact_mail: null,
	phone: null,
	region: null,
	allowNotifications: false,
	instagram: null,
	telegram: null,
	products: [],
	image: null,
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
