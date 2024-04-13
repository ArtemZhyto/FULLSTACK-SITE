import { createSlice } from "@reduxjs/toolkit"
const initialState = {
	email: "",
	password: "",
}

const currentUser = createSlice({
	name: "currentUser",
	initialState,
	reducers: {
		addCurrentUser: (state, action) => {
			return action.payload
		},
	},
})

export const {addCurrentUser} = currentUser.actions


export default currentUser.reducer
