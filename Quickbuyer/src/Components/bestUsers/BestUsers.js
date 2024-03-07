import {
	Carousel,
	Container,
	ExampleCarouselImage,
	Image,
} from "react-bootstrap"
import "./BestUsersGlobal.scss"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { Col } from "react-bootstrap"
import React from "react"
import { useRef } from "react"
function BestUsers({ image, arrow }) {
	let sliderRef = useRef(null)

	const settings = {
		dots: false,
		infinite: true,
		speed: 300,
		slidesToShow: 3,
		slidesToScroll: 1,
		arrows: false,
		responsive: [
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 1,
				},
			},
		],
	}
	return (
		<article className="slider-container best-users">
			<Container>
				<p className="title best-users__title">Топ продавцы</p>
				<div className="best-users__buttons">
					<a className="" onClick={() => sliderRef.current.slickPrev()}>
						<Image
							className="best-users__arrow best-users__arrowPrev"
							src={arrow}
						/>
					</a>
					<a className="" onClick={() => sliderRef.current.slickNext()}>
						<Image
							className="best-users__arrow best-users__arrowNext"
							src={arrow}
						/>
					</a>
				</div>
				<Slider className="slider" ref={sliderRef} {...settings}>
					<Col xs={4} className="best-users__elem">
						<div className="best-users__avatar"> </div>
						<p className="best-users__elem-info">SkyLover</p>
						<p className="best-users__elem-info">Лет на сайте: 2 года</p>
						<p className="best-users__elem-info">Продано товаров: 45</p>
						<p className="best-users__elem-info">Средняя оценка: 7/10</p>
					</Col>
					<Col xs={4} className="best-users__elem">
						<div className="best-users__avatar"> </div>
						<p className="best-users__elem-info">TechWizard</p>
						<p className="best-users__elem-info">Лет на сайте: 1 год</p>
						<p className="best-users__elem-info">Продано товаров: 28</p>
						<p className="best-users__elem-info">Средняя оценка: 6/10</p>
					</Col>
					<Col xs={4} className="best-users__elem">
						<div className="best-users__avatar"> </div>
						<p className="best-users__elem-info">DreamChaser</p>
						<p className="best-users__elem-info">Лет на сайте: 3 года</p>
						<p className="best-users__elem-info">Продано товаров: 62</p>
						<p className="best-users__elem-info">Средняя оценка: 8/10</p>
					</Col>
					<Col xs={4} className="best-users__elem">
						<div className="best-users__avatar"> </div>
						<p className="best-users__elem-info">GamerPro</p>
						<p className="best-users__elem-info">Лет на сайте: 4 года</p>
						<p className="best-users__elem-info">Продано товаров: 79</p>
						<p className="best-users__elem-info">Средняя оценка: 9/10</p>
					</Col>
					<Col xs={4} className="best-users__elem">
						<div className="best-users__avatar"> </div>
						<p className="best-users__elem-info">MusicLover</p>
						<p className="best-users__elem-info">Лет на сайте: 2 года</p>
						<p className="best-users__elem-info">Продано товаров: 37</p>
						<p className="best-users__elem-info">Средняя оценка: 7/10</p>
					</Col>
					<Col xs={4} className="best-users__elem">
						<div className="best-users__avatar"> </div>
						<p className="best-users__elem-info">CodeNinja</p>
						<p className="best-users__elem-info">Лет на сайте: 1 год</p>
						<p className="best-users__elem-info">Продано товаров: 21</p>
						<p className="best-users__elem-info">Средняя оценка: 5/10</p>
					</Col>
					<Col xs={4} className="best-users__elem">
						<div className="best-users__avatar"> </div>
						<p className="best-users__elem-info">AdventureSeeker</p>
						<p className="best-users__elem-info">Лет на сайте: 3 года</p>
						<p className="best-users__elem-info">Продано товаров: 58</p>
						<p className="best-users__elem-info">Средняя оценка: 8/10</p>
					</Col>
				</Slider>
			</Container>
		</article>
	)
}

export default BestUsers
