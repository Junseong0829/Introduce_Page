import React, { useState } from "react";
import {Link} from "react-router-dom";
import "./Cat.css";

const images = [
    `${process.env.PUBLIC_URL}/images/1-1.jpg`,
    `${process.env.PUBLIC_URL}/images/1-2.jpg`,
    `${process.env.PUBLIC_URL}/images/1-3.jpg`,
    `${process.env.PUBLIC_URL}/images/1-4.jpg`,
    `${process.env.PUBLIC_URL}/images/1-5.jpg`,
    `${process.env.PUBLIC_URL}/images/1-6.jpg`,
    `${process.env.PUBLIC_URL}/images/1-7.jpg`,
    `${process.env.PUBLIC_URL}/images/1-8.jpg`,
    `${process.env.PUBLIC_URL}/images/1-11.jpg`,
    `${process.env.PUBLIC_URL}/images/1-9.jpg`,
    `${process.env.PUBLIC_URL}/images/1-10.jpg`,
    `${process.env.PUBLIC_URL}/images/1-12.jpg`,
    `${process.env.PUBLIC_URL}/images/1-13.jpg`,
]

const Cat = () => {
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
        <h2>➡️ 스트릿 출신 저희 집 고양이🐱 입니다 :)</h2>
        <h2>➡️ 이름 : 꼬질이 / 나이 : 6살 / 자동차 본네트에 있던 걸 구출해온거라 꼬질꼬질했어서 꼬질이가 되었구요 네</h2>
        <h2>➡️ 마지막 4장은 원래 첫 째 아이였던 로또🐱 였는데 지금은 무지개다리를 건넜습니다 ;ㅅ;</h2>
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
export default Cat;