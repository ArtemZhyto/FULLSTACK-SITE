import React, { useState, useEffect } from "react"

function Expiriment() {
	// Состояние, которое будет отображать текущее значение из Local Storage
	const [localStorageValue, setLocalStorageValue] = useState(
		localStorage.getItem("myKey")
	)

	// Функция-обработчик для обновления состояния при изменении Local Storage
	const handleStorageChange = () => {
		setLocalStorageValue(localStorage.getItem("myKey"))
	}

	// Эффект, который будет вызываться при монтировании компонента
	useEffect(() => {
		// Добавляем слушатель событий для изменений Local Storage
		window.addEventListener("storage", handleStorageChange)

		// Очищаем слушатель событий при размонтировании компонента
		return () => {
			window.removeEventListener("storage", handleStorageChange)
		}
	}, []) // Пустой массив зависимостей означает, что эффект будет вызываться только один раз при монтировании компонента

	// Обработчик для изменения Local Storage
	const handleChangeLocalStorage = () => {
		const newValue = prompt("Введите новое значение:")
		localStorage.setItem("myKey", newValue)
		// Также обновляем состояние в компоненте после изменения Local Storage
		setLocalStorageValue(newValue)
	}

	return (
		<div>
			<p>Значение в Local Storage: {localStorageValue}</p>
			<button onClick={handleChangeLocalStorage}>Изменить Local Storage</button>
		</div>
	)
}

export default Expiriment
