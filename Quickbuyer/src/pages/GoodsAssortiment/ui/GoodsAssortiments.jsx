import React from "react"
import ImageWithText from "../../../shared/layouts/ImageWithText/UI/ImageWithText"

const GoodsAssortiments = () => {
	return (
		<article className="goodsAssortiments">
			<ImageWithText photoSrc="photos/iphone.png">
				<p className="goodsAssortiments__title title info">
					Ассортимент товаров
				</p>
				<p className="goodsAssortiments__subtitle subtitle info">
					{" "}
					Мы гордимся тем, что предоставляем вам доступ к широкому и
					разнообразному ассортименту товаров. Мы стремимся удовлетворить любые
					ваши потребности, предлагая различные товары в каждой категории. У нас
					есть все, что вам может понадобиться - от электроники и моды до
					товаров для дома и развлечений. Наш магазин предлагает большой выбор
					необходимых вещей для вашего удобства. Добро пожаловать в мир богатого
					ассортимента и удовлетворения ваших потребностей!
				</p>
			</ImageWithText>
		</article>
	)
}

export default GoodsAssortiments
