import React, { useState } from "react"
import SubAdditionalCategory from "./SubAdditionalCategory"

const AccordionAdditionalItem = ({ additionalCategory, onCategoryClick }) => {
	const [isAdditionalActive, setIsAdditionalActive] = useState(false)
	const typeOfCategory = typeof additionalCategory === "object"

	return (
		<>
			<li
				className={
					isAdditionalActive
						? "AccordionItem__additionalItem AccordionItem__additionalItemActive"
						: "AccordionItem__additionalItem"
				}
				onClick={!typeOfCategory ? onCategoryClick : null}
			>
				{typeOfCategory ? additionalCategory.title : additionalCategory}
				{typeOfCategory ? (
					<button
						type="button"
						onClick={() => {
							setIsAdditionalActive(!isAdditionalActive)
						}}
						className="AccordionItem__arrow"
					></button>
				) : null}
			</li>
			{typeOfCategory ? (
				<ul className="AccordionItem__subadditonalList">
					{additionalCategory.value.map((subCategory, index) => (
						<SubAdditionalCategory
							key={index}
							onCategoryClick={onCategoryClick}
							SubAdditionalCategoryVal={subCategory}
						/>
					))}
				</ul>
			) : null}
		</>
	)
}

export default AccordionAdditionalItem
