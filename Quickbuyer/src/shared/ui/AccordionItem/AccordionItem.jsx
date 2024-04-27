import { useState } from "react"
import "./AccordionItemThemes.scss"
import AccordionAdditionalItem from "./AccordionAdditionalItem"
import { useLocation, useNavigate } from "react-router"
import { useDispatch } from "react-redux"
import { changeFilter } from "../../../app/redux/slices/FilterSlice"
const AccordionItem = ({ title, value }) => {
	const location = useLocation().pathname
	const navigate = useNavigate()
	const dispatch = useDispatch()
	const onCategoryClickHandler = (e) => {
		if (location !== "/products") {
			navigate("/products")
		}

		dispatch(changeFilter({ category: e.target.innerText }))
	}
	const [isActive, setIsActive] = useState(false)
	return (
		<>
			<div
				onClick={onCategoryClickHandler}
				className={
					isActive.isFirstActive
						? "AccordionItem AccordionItemActive"
						: "AccordionItem"
				}
			>
				{title}
				<button
					type="button"
					onClick={() =>
						setIsActive({ ...isActive, isFirstActive: !isActive.isFirstActive })
					}
					className="AccordionItem__arrow"
				></button>
			</div>
			<ul className="AccordionItem__additionalItemList">
				{value.map((additionalCategory, index) => (
					<AccordionAdditionalItem
						key={index}
						onCategoryClick={onCategoryClickHandler}
						additionalCategory={additionalCategory}
					></AccordionAdditionalItem>
				))}
			</ul>
		</>
	)
}

export default AccordionItem
