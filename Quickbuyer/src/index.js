import React from "react"
import ReactDOM from "react-dom/client"
import "./index.scss"
import CompletedRegistration from "./CompletedRegistration"
import App from "./App"
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { ErrorNotFound } from "./ErrorNotFound"
const router = createBrowserRouter([
	{ path: "/", element: <App />, errorElement : <ErrorNotFound/> },
	{ path: "/registration/:password/:mail", element: <CompletedRegistration />},
	{path : "/profile:/:ProfileId",/*  element :  */}
])

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<RouterProvider router={router} />)
