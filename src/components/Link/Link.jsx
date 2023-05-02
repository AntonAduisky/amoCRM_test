import React from "react";

import "./Link.scss";

function Link({ text, url, type, icon, alt }) {
    const classes = ["link"];
    switch(type) {
        case "header":
            classes.push("headerLink");
            break;
        case "footer":
            classes.push("footer__link");
            break;
        case "icon":
            classes.push("iconLink");
            break;
        case "phone":
            classes.push("phoneLink");
            break;
        }
        
    return (
        <a className={classes.join(" ")} href={url}>
            {type === "icon" 
            ? <img src={icon} alt={alt} />
            : text
            } 
        </a>
    );
}

export default Link;
