import React, { useState } from "react"
import Header from '../pages/header/Header';

const App = () => {
	const [theme, setTheme] = useState("dark")
	return <div id={`main ${theme}`}>
        <Header />
    </div>
}

export default App
