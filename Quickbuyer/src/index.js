import React from "react"
import ReactDOM from "react-dom/client"
import "./index.scss"

import { RouterProvider } from "react-router-dom"
import router from "./app/routes/GlobalRouter"
import "./resetglobal.css"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<RouterProvider router={router} />)
