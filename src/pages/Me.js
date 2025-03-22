import React, { useState } from "react";
import {Link} from "react-router-dom";
import "./Me.css";

const images = [
    `${process.env.PUBLIC_URL}/images/2-1.jpg`,
    `${process.env.PUBLIC_URL}/images/2-2.jpg`,
    `${process.env.PUBLIC_URL}/images/2-3.jpg`,
    `${process.env.PUBLIC_URL}/images/2-4.jpg`,
    `${process.env.PUBLIC_URL}/images/2-5.jpg`,
    `${process.env.PUBLIC_URL}/images/4-1.jpg`,
    `${process.env.PUBLIC_URL}/images/4-2.jpg`,
    `${process.env.PUBLIC_URL}/images/2-6.jpg`,
    `${process.env.PUBLIC_URL}/images/2-8.jpg`,
    `${process.env.PUBLIC_URL}/images/2-9.jpg`,
    `${process.env.PUBLIC_URL}/images/2-10.jpg`,
    `${process.env.PUBLIC_URL}/images/2-13.jpg`,
    `${process.env.PUBLIC_URL}/images/2-14.jpg`,
    `${process.env.PUBLIC_URL}/images/2-16.jpg`,
    `${process.env.PUBLIC_URL}/images/2-17.jpg`,
    `${process.env.PUBLIC_URL}/images/2-18.png`,
    `${process.env.PUBLIC_URL}/images/4-6.jpeg`,
]

const Me = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(false);

  const nextImage = () => {
    setFade(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      setFade(false);
    }, 300); // 페이드 효과 시간과 맞춤
  };

  const prevImage = () => {
    setFade(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
      setFade(false);
    }, 300);
  };

  return (
    <>
        <div className="container5">
          <h1>🁢 Gallery </h1>
          <Link to={`../gallery`} style={{textDecoration:"none"}}>
          <p style={{fontSize:"30px", margin:"0px", fontWeight:"bold"}}>↪️뒤로 가기↩️</p>
          </Link>
        </div>
        <h2>➡️ 제 사진들입니다 :) 마지막 사진은 코로나 때 신입생 영어...ㅎ</h2>
        <h2>➡️ 여러 칭찬들은 사이트 개발자를 춤추게 합니다 🕺</h2>
        <div className="gallery-container">
            <button className="arrow left" onClick={prevImage}>◀</button>
            <div className={`image-wrapper ${fade ? "fade-out" : "fade-in"}`}>
                <img src={images[currentIndex]} alt="Gallery" />
            </div>
            <button className="arrow right" onClick={nextImage}>▶</button>
        </div>
    </>
  );
};
export default Me;