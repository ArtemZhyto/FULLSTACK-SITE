import ImageWithText from "../../../shared/layouts/ImageWithText/UI/ImageWithText"

const About = () => {
	return (
		<article className="about">
			<ImageWithText photoSrc="./photos/girl.png" row="row-reverse">
				<p className="about__info info subtitle">
					"Quick Buyer" – это ваш виртуальный торговый партнер, обещающий
					удивить вас разнообразием и качеством ассортимента. От модных трендов
					до технологических новинок, у нас есть все, что вам нужно. Наш
					интерфейс интуитивно понятен, а процесс оформления заказа максимально
					удобен. Мы поощряем лояльность, предоставляя постоянным клиентам
					уникальные бонусы и специальные предложения. "Quick Buyer" - это не
					просто магазин, это сообщество любителей умных и быстрых покупок.
					Присоединяйтесь к нам, чтобы насладиться преимуществами современных
					онлайн-покупок
				</p>
			</ImageWithText>
		</article>
	)
}

export default About
