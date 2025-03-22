import React, { useState } from "react";
import {Link, Route, Routes} from "react-router-dom";
import "./Gallery.css";

function Gallery(){
    return(
        <>
            <div style={{marginBottom:"30px"}}>
                <h1>🁢 하나를 고르세요!</h1>
                <h2>➡️ 부끄러우니 너무 자세힌 보지 마세요 ^^..</h2>
            </div>
            <div class="container4">
                <Link to="Cat" style={{textDecoration:"none"}}>
                    <div className="cat-link">
                        <p>고양이 사진 보러가기</p>
                    </div>
                </Link>
                <Link to="me" style={{textDecoration:"none"}}>
                    <div className="cat-link">
                        <p>제 사진 보러가기</p>
                    </div>
                </Link>
            </div>
        </>
    )
}
export default Gallery;