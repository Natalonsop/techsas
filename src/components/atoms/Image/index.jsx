import React from "react";
function Image({ src, alt, classImage }){
    return (
        <>
            <img src={src} alt={alt} className={classImage} />
        </>
    )
}
export default Image;