import React from "react"
import { CarouselBadge, DivContainer} from "../tags/Tags";
import { Carousel } from "react-bootstrap";
import CarouselBG1 from "../../assets/images/bg.jpg"
import { BtnGradientRoundSky } from "../buttons/Button";
import { FaCalendar } from "react-icons/fa";

export function LandingCarousel () {
    return(
        <DivContainer className="LandingCarousel py-3">
            <Carousel>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={CarouselBG1}
                    alt="First slide"
                    />
                    <Carousel.Caption>
                        <CarouselBadge><FaCalendar/><span className="pl-2">UPCOMING</span></CarouselBadge>
                        <p className="my-1">Mon, Apr 18</p>
                        <h3 className="">Darko #2452</h3>                        
                        <BtnGradientRoundSky>View</BtnGradientRoundSky>
                    </Carousel.Caption>
                </Carousel.Item>               
            </Carousel>
        </DivContainer>
    );
}

