import React, { useState } from "react";
import {Link} from "react-router-dom";
import "./Cat.css";

const images = [
    "https://raw.githubusercontent.com/Junseong0829/Introduce_Page/refs/heads/main/public/images/1-1.JPG",
    "https://raw.githubusercontent.com/Junseong0829/Introduce_Page/refs/heads/main/public/images/1-2.JPG",
    "https://raw.githubusercontent.com/Junseong0829/Introduce_Page/refs/heads/main/public/images/1-3.JPG",
    "https://raw.githubusercontent.com/Junseong0829/Introduce_Page/refs/heads/main/public/images/1-4.JPG",
    "https://raw.githubusercontent.com/Junseong0829/Introduce_Page/refs/heads/main/public/images/1-5.JPG",
    "https://raw.githubusercontent.com/Junseong0829/Introduce_Page/refs/heads/main/public/images/1-6.JPG",
    "https://raw.githubusercontent.com/Junseong0829/Introduce_Page/refs/heads/main/public/images/1-7.JPG",
    "https://raw.githubusercontent.com/Junseong0829/Introduce_Page/refs/heads/main/public/images/1-8.JPG",
    "https://raw.githubusercontent.com/Junseong0829/Introduce_Page/refs/heads/main/public/images/1-11.JPG",
    "https://raw.githubusercontent.com/Junseong0829/Introduce_Page/refs/heads/main/public/images/1-9.JPG",
    "https://raw.githubusercontent.com/Junseong0829/Introduce_Page/refs/heads/main/public/images/1-10.JPG",
    "https://raw.githubusercontent.com/Junseong0829/Introduce_Page/refs/heads/main/public/images/1-12.JPG",
    "https://raw.githubusercontent.com/Junseong0829/Introduce_Page/refs/heads/main/public/images/1-13.JPG",
]

const Cat = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(false);

  const nextImage = () => {
    setFade(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      setFade(false);
    }, 300);
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