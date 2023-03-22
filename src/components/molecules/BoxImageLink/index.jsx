import React from "react";
function BoxImageLink({ src, alt, classImage }){
    return (
        <>
            <img src={src} alt={alt} className={classImage} />
        </>
    )
}
export default BoxImageLink;