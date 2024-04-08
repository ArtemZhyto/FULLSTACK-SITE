import React, { useState } from "react"
import Header from '../pages/header/ui/Header';

const App = () => {
	const [theme, setTheme] = useState("dark")
	return <div id={theme } className="main">
        <Header />
    </div>
}

export default App
