import React from "react";

export default function Map() {
    return (
        <iframe
            id="map-iframe"
            width="500"
            height="500"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            src="https://maps.google.com/maps?q=Leonding&t=&z=9&ie=UTF8&iwloc=&output=embed">
        </iframe>
    )
}