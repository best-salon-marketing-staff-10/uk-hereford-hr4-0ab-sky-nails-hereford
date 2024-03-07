import Head from 'next/head'
import Link from 'next/link'
import Button2 from '/pages/Components/buttons/button-2.js'
import TimeSchedule from '/pages/Components/time-schedule/time-schedule.js'
import DongVien1 from '/pages/Components/dong-vien/dong-vien-1.js'
import DongVien2 from '/pages/Components/dong-vien/dong-vien-2.js'
import DongVien3 from '/pages/Components/dong-vien/dong-vien-3'
import CustomerReview from '/pages/Components/customer-review.js'
import OurStory from '/pages/about-us/our-story'
import Carousel from 'react-bootstrap/Carousel'
import "/node_modules/bootstrap/dist/css/bootstrap.css"
import { images } from '/pages/core/info';
import { imageAlt } from '/pages/core/info';




export default function DesktopContent(){
    /*
    <div>
                    <Carousel fade={true} controls={false} interval="1800">
                        <Carousel.Item>
                            <div className="desktop-about-us-carousel-image">
                                <img className="d-block w-100" alt={imageAlt.desktopAboutUsImage1Alt} src={images.desktopAboutUsImage1} />
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div className="desktop-about-us-carousel-image">
                                <img className="d-block w-100" alt={imageAlt.desktopAboutUsImage2Alt} src={images.desktopAboutUsImage2} />
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div className="desktop-about-us-carousel-image">
                                <img className="d-block w-100" alt={imageAlt.desktopAboutUsImage3Alt} src={images.desktopAboutUsImage3} />
                            </div>
                        </Carousel.Item>
                    </Carousel> 
                </div>
    */
    return(
        <>
            <div className="desktop-about-us">
                
                <div className="desktop-about-us-our-story">
                    <OurStory />
                </div>
                <div className="button">
                    <Button2 />
                </div>
                
                <div className="desktop-about-us-dong-vien">
                    <div className="desktop-about-us-dong-vien-block-1">
                        <div className="desktop-about-us-dong-vien-text">
                            <DongVien1 />
                        </div>
                        <div className="desktop-about-us-dong-vien-image">
                            <img alt={imageAlt.desktopAboutUsDongVienImage1Alt} src={images.desktopAboutUsDongVienImage1} />
                        </div>
                    </div>
                    <div className="desktop-about-us-dong-vien-block-2">
                        <div className="desktop-about-us-dong-vien-image">
                            <img alt={imageAlt.desktopAboutUsDongVienImage2Alt} src={images.desktopAboutUsDongVienImage2} />
                        </div>
                        <div className="desktop-about-us-dong-vien-text">
                            <DongVien2 />
                        </div>
                    </div>
                    <div className="desktop-about-us-dong-vien-block-3">
                        <div className="desktop-about-us-dong-vien-text">
                            <DongVien3 />
                        </div>
                        <div className="desktop-about-us-dong-vien-image">
                            <img alt={imageAlt.desktopAboutUsDongVienImage3Alt} src={images.desktopAboutUsDongVienImage3} />
                        </div>
                    </div>
                <div>
                       
                    </div>
                    <div className="time-schedule">
                            <TimeSchedule />
                    </div>
                </div>
            </div>
        </>
    )
}