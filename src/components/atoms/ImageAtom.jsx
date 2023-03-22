import React from "react";
function ImageAtom({ src, alt, classImage }){
    return (
        <>
            <img src={src} alt={alt} className={classImage} />
        </>
    );
}
export default ImageAtom;