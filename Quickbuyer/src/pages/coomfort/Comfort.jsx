import ImageWithText from "../../shared/layouts/ImageWithText/UI/ImageWithText"

const Comfort = () => {
	return (
		<article className="comfort">
			<ImageWithText isComfortPage={true}>
				<p className="comfort__title title">Комфорт</p>
				<p className="comfort__info info subtitle">
					Мы понимаем, что ваш онлайн-шопинг должен быть комфортным и приятным.
					Поэтому мы предлагаем нечто большее, чем просто покупки. Наш сайт
					создан с учетом ваших предпочтений. У нас есть удобная опция смены
					темы, чтобы вы могли наслаждаться покупками в атмосфере, которая
					соответствует вашему настроению. Будь то светлая классика для утра или
					темные оттенки для вечернего шопинга - выбор за вами. Простота в
					использовании сайта сочетается с приятными цветовыми решениями, чтобы
					каждое посещение "Quick Buyer" приносило вам удовольствие. Добро
					пожаловать в мир комфорта и стиля!
				</p>
			</ImageWithText>
		</article>
	)
}

export default Comfort
