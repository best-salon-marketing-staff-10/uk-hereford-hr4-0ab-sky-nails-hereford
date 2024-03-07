import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import { images } from '/pages/core/info';
import { menu } from '/pages/core/info';
import { processedInfo } from '/pages/core/info';


export default function MobileBottomNavBar(){
    return <>
        
        <div className="mobile-bottom-nav-bar-section-bottom-nav-bar">
            <Navbar expand={false} bg="white" variant="d" fixed="bottom">
                <div className="mobile-bottom-nav-bar-section">
                    <Link
                        href={images.BottomNavButton1LinkTo}
                        className="mobile-bottom-nav-bar-link-a">

                        <div className="mobile-bottom-nav-bar-home">
                            <div>
                                <img className="mobile-bottom-nav-bar-img" alt={images.BottomNavButton1IconAlt} src={images.BottomNavButton1Icon} />
                            </div>
                            <div className="mobile-bottom-nav-bar-section-content">
                                {images.BottomNavButton1Content}
                            </div>   
                        </div>

                    </Link>
                    <Link
                        href={images.BottomNavButton2LinkTo}
                        className="mobile-bottom-nav-bar-link-a">

                        <div className="mobile-bottom-nav-bar-services">
                            <div>
                                <img className="mobile-bottom-nav-bar-img" alt={images.BottomNavButton2IconAlt} src={images.BottomNavButton2Icon} />
                            </div>
                            <div className="mobile-bottom-nav-bar-section-content">  
                                {images.BottomNavButton2Content}
                            </div> 
                        </div>

                    </Link>
                    <Link href={processedInfo.callBusiness} className="mobile-bottom-nav-bar-link-a">

                        <div className="mobile-bottom-nav-bar-contact-us">
                            <div>
                                <img className="mobile-bottom-nav-bar-img" alt={images.BottomNavButton3IconAlt} src={images.BottomNavButton3Icon} />
                            </div>
                            <div className="mobile-bottom-nav-bar-section-content">
                                Appointment&nbsp;now 
                            </div> 
                        </div>

                    </Link>
                </div>    
            </Navbar>
        </div>
    </>;
}