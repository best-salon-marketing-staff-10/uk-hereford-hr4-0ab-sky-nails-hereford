import Head from 'next/head'
import Link from 'next/link'
import Button2 from '/pages/Components/buttons/button-2.js'
import TimeSchedule from '/pages/Components/time-schedule/time-schedule.js'
import DongVien1 from '/pages/Components/dong-vien/dong-vien-1.js'
import DongVien2 from '/pages/Components/dong-vien/dong-vien-2.js'
import DongVien3 from '/pages/Components/dong-vien/dong-vien-3.js'
import CustomerReview from '/pages/Components/customer-review.js'
import OurStory from '/pages/about-us/our-story'
import Carousel from 'react-bootstrap/Carousel'
import "/node_modules/bootstrap/dist/css/bootstrap.css"
import { images } from '/pages/core/info';
import { imageAlt } from '/pages/core/info';


export default function TabletContent(){
    /*
    <div>
                    <Carousel fade={true} controls={false} interval="1800">
                        <Carousel.Item>
                            <div className="carousel-image">
                                <img className="d-block w-100" alt={imageAlt.tabletAboutUsImage1Alt} src={images.tabletAboutUsImage1} />
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div className="carousel-image">
                                <img className="d-block w-100" alt={imageAlt.tabletAboutUsImage2Alt} src={images.tabletAboutUsImage2} />
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div className="carousel-image">
                                <img className="d-block w-100" alt={imageAlt.tabletAboutUsImage3Alt} src={images.tabletAboutUsImage3} />
                            </div>
                        </Carousel.Item>
                    </Carousel> 
                </div>
    */
    return(
        <>
            <div className="tablet-about-us">
                

                <div className="tablet-about-us-our-story">
                    <OurStory />
                </div>
                <div className="button">
                        <Button2 />
                </div>
                <div className="tablet-about-us-dong-vien">
                    <DongVien1 />
                </div>
                <div className="tablet-about-us-dong-vien">
                    <DongVien2 />
                </div>
                <div className="tablet-about-us-dong-vien">
                    <DongVien3 />
                </div>
                <div className="tablet-about-us-dong-vien">
                    <div className="time-schedule">
                        <TimeSchedule />
                    </div>
                </div>
            </div>
        </>
    )
}