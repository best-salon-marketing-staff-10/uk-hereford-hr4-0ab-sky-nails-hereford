import Link from 'next/link';
import Head from 'next/head';
import NavDropdown from 'react-bootstrap/NavDropdown';
import LogoNav from '/pages/Components/logo-nav/logo-nav';
import { menu } from '/pages/core/info';
import { serviceCategory } from '/pages/core/info';
import { processedInfo } from '/pages/core/info';
import { imageAlt } from '/pages/core/info';
import { changedInfo } from '/pages/core/info';
import { images } from '/pages/core/info';
import { pageContent } from '/pages/core/info';

export default function MobileFooter(){
    return <>
        <Head>
        </Head>
        <div className="footer">
            <Link href="/" legacyBehavior>
                <LogoNav />
            </Link>
            <div className="divider">
                <NavDropdown.Divider />
            </div>
            <div className="footer-navigation">
                <h2 className="footer-navigation-item">
                    <Link href={menu.linkToMainMenu1} className="footer-navigation-item">

                        {menu.mainMenu1}

                    </Link>
                </h2>
                <div className="footer-navigation-item">
                    <h2 className="footer-navigation-item-services">
                        <Link href={menu.linkToMainMenu4} className="footer-navigation-item">

                            {menu.mainMenu4}

                        </Link>
                    </h2>
                    <div className="footer-navigation-item-detail-services">
                        <h3 className="footer-navigation-item-detail-services">
                            <Link
                                href={serviceCategory.mobileLinkToServiceCategory1}
                                className="services-list-1">

                                {serviceCategory.serviceCategory1}

                            </Link>
                        </h3>
                        <h3 className="footer-navigation-item-detail-services">
                            <Link
                                href={serviceCategory.mobileLinkToServiceCategory2}
                                className="services-list-2">

                                {serviceCategory.serviceCategory2}

                            </Link>
                        </h3>
                        <h3 className="footer-navigation-item-detail-services">
                            <Link
                                href={serviceCategory.mobileLinkToServiceCategory3}
                                className="services-list-3">

                                {serviceCategory.serviceCategory3}

                            </Link>
                        </h3>
                        <h3 className="footer-navigation-item-detail-services">
                            <Link
                                href={serviceCategory.mobileLinkToServiceCategory4}
                                className="services-list-4">

                                {serviceCategory.serviceCategory4}

                            </Link>
                        </h3>
                        <h3 className="footer-navigation-item-detail-services">
                            <Link
                                href={serviceCategory.mobileLinkToServiceCategory5}
                                className="services-list-5">

                                {serviceCategory.serviceCategory5}

                            </Link>
                        </h3>
                        <h3 className="footer-navigation-item-detail-services">
                            <Link
                                href={serviceCategory.mobileLinkToServiceCategory6}
                                className="services-list-6">

                                {serviceCategory.serviceCategory6}

                            </Link>
                        </h3>
                        <h3 className="footer-navigation-item-detail-services">
                            <Link
                                href={serviceCategory.mobileLinkToServiceCategory7}
                                className="services-list-7">

                                {serviceCategory.serviceCategory7}

                            </Link>
                        </h3>
                    </div>
                </div>
                <h2 className="footer-navigation-item">
                    <Link href={processedInfo.callBusiness} className="footer-navigation-item">

                        {menu.mainMenu3}

                    </Link>
                </h2>
                <h2 className="footer-navigation-item">
                    <Link href={menu.linkToMainMenu2} className="footer-navigation-item">

                        {menu.mainMenu2}

                    </Link>
                </h2>
                <h2 className="footer-navigation-item">
                    <Link href={menu.linkToMainMenu5} className="footer-navigation-item">

                        {menu.mainMenu5}

                    </Link>
                </h2>
                <div className="footer-navigation-item">
                    <h2 className="footer-navigation-item">
                        {menu.mainMenu6}
                    </h2>
                    <div className="footer-navigation-item-details">
                        <Link href={processedInfo.callBusiness} legacyBehavior>
                            <div className="footer-navigation-item-details-1">
                                <div>
                                    <img className="footer-image" alt={imageAlt.footerImagePhoneIconAlt} src={images.footerImagePhoneIcon} />
                                </div>
                                <div>
                                    <a className="footer-navigation-item-details">
                                        {changedInfo.businessPhoneNumber}
                                    </a>
                                </div>
                            </div>
                        </Link>  
                        <Link href={changedInfo.linkToMap} legacyBehavior>  
                            <div className="footer-navigation-item-details-2">
                                <div>
                                    <img className="footer-image" alt={imageAlt.footerImageMapPointerIconAlt}  src={images.footerImageMapPointerIcon} />
                                </div>
                                <div>
                                    <a className="footer-navigation-item-details">
                                        {processedInfo.businessAddress}
                                    </a>
                                </div>
                            </div>
                        </Link>
                    </div>
                     
                    <div className="footer-navigation-item">
                        <iframe src={changedInfo.iframeMapLink} width="480" height="300" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </div>
            <div className="footer-copyright">
                <Link
                    href={pageContent.copyrightWebsiteLink}
                    className="footer-copyright"
                    rel="dofollow">

                    {pageContent.copyrightContent}

                </Link>
            </div>
        </div>
    </>;
}