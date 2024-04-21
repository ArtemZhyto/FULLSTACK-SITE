import React, { useState } from "react"

const SubAdditionalCategory = ({
	SubAdditionalCategoryVal,
	onCategoryClick,
}) => {
	return (
		<li className="AccordionItem__subAdditionalItem" onClick={onCategoryClick}>
			{SubAdditionalCategoryVal}
		</li>
	)
}

export default SubAdditionalCategory
