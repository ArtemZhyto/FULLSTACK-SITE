import Rarrow from "@widgets/Arrows/ui/Rarrow"
import Larrow from "@widgets/Arrows/ui/Larrow"

export const settings = {
	prevArrow: <Larrow />,
	nextArrow: <Rarrow />,
	dots: false,
	infinite: true,
	speed: 500,
	slidesToShow: 3,
	slidesToScroll: 1,
	responsive: [
		{
			breakpoint: 1024,
			settings: {
				slidesToShow: 1,
				prevArrow: null,
				nextArrow: null,
			},
		},
	],
}
