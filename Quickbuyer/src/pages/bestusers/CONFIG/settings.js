import Rarrow from "../UI/arrows/Rarrow"
import Larrow from "../UI/arrows/Larrow"

export const settings = {
    prevArrow : <Larrow/>,
    nextArrow : <Rarrow />,
	dots: false,
	infinite: true,
	speed: 500,
	slidesToShow: 3,
	slidesToScroll: 1,
    responsive : [
        {
            breakpoint : 1024,
            settings : {
                slidesToShow : 1,
                prevArrow : null,
                nextArrow : null
            }
        }
    ]
}
