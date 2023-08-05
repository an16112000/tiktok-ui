import React, { forwardRef, useState } from "react";
import styles from './Image.module.scss'

const Image = forwardRef(({ src,
    style,
    fallback: errorImage = 'https://developers.google.com/static/maps/documentation/maps-static/images/error-image-generic.png' },
    ref) => {
    
    const [fallback, setFallBack] = useState('');

    return (
        <>
            <img className={`${styles.img} ${style}`} ref={ref} src={fallback || src} onError={() => setFallBack(errorImage)} />
        </>
    )
})

export default Image;