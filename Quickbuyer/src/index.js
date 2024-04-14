import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import { useState } from "react"
import { RouterProvider } from "react-router-dom"
import router from "./app/routes/GlobalRouter"
import "./resetglobal.css"
import { Provider } from "react-redux"
import { store } from "./app/redux/store"
import ThemeWrapper from "./shared/ui/themeWrapper/ThemeWrapper"
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
	<Provider store={store}>
		<ThemeWrapper>
			<RouterProvider router={router} />
		</ThemeWrapper>
	</Provider>
)
