import Link from "next/link";
import { changedInfo } from '/pages/core/info';

export default function LogoNav(){

    return <>
        <Link href="/" legacyBehavior>
            <div className="logo-container">
                <div className="logo">
                    <img className="logo"src={changedInfo.businessLogo} />
                </div>
                <div className="logo-text">
                    <h2 className="logo-text-1">
                        {changedInfo.businessName}
                    </h2>
                    <div className="logo-text-2">
                        {changedInfo.businessAddressLevel2}
                    </div>
                </div>
            </div>
        </Link>
        <style>{`
            
        `}</style>
    </>;
}