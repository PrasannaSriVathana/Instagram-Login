import "./getAppContainer.css";
import {Link} from "react-router-dom";
import React from "react";

const GetAppContainer = () => {
    return (
        <div className="getAppContainer">
            <h5 className="getApp">Get the app.</h5>
            <div className="getApps">
                <Link
                    to="https://play.google.com/store/apps/details?id=com.instagram.android&referrer=ig_mid%3DC0CFA0DA-3225-497E-9A82-BC9582A26C3A%26utm_campaign%3DloginPage%26utm_content%3Dlo%26utm_source%3Dinstagramweb%26utm_medium%3Dbadge%26original_referrer%3Dhttps%253A%252F%252Fin.search.yahoo.com%252F"
                    className="gplay">
                    <img className="gplay1" alt="get it on google play"
                         src="https://static.cdninstagram.com/rsrc.php/v3/yz/r/c5Rp7Ym-Klz.png"/>
                </Link>
                <Link
                    to="https://play.google.com/store/apps/details?id=com.instagram.android&referrer=ig_mid%3DC0CFA0DA-3225-497E-9A82-BC9582A26C3A%26utm_campaign%3DloginPage%26utm_content%3Dlo%26utm_source%3Dinstagramweb%26utm_medium%3Dbadge%26original_referrer%3Dhttps%253A%252F%252Fin.search.yahoo.com%252F"
                    className="microsoft">
                    <img className="microsoft1" alt="get it on microsoft app"
                         src="	https://static.cdninstagram.com/rsrc.php/v3/yu/r/EHY6QnZYdNX.png"/>
                </Link>
            </div>
        </div>
    );
}

export default GetAppContainer;