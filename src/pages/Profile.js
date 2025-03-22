import "./Profile.css";

function Profile(){
    return(
        <>
            <h1>🁢 Profile  </h1>
            <div class="container">
                <img src= "./Introduce_Page/images/2-11.jpg" className="image" />
                <div class="text">
                    <p>🐣 학번 / 이름 : 20215166 이준성</p>
                    <p>🐣 생일 : 2002년 08월 29일</p>
                    <p>🐣 MBTI : INFJ</p>
                    <p>🐣 동아리 : 🐱InfoTeam, 🔥Ignition(이었던 것)</p>
                    <p>🐣 취미 : 운동(헬스, 풋살), 게임, 스키, 노래방, 방탈출, 보드게임...등등</p>
                </div>
            </div>
            <h1>🁢 MBTI</h1>
            <h2>➡️ 사진에 있는 것들이 대체로 맞는 거 같아요 ㅎㅎ..</h2>
            <div class="container2">
                <img src={"./Introduce_Page/images/3-1.jpg"} className="image2" />
                <img src={"./Introduce_Page/images/3-2.jpg"} className="image2" />
                <img src={"./Introduce_Page/images/3-3.jpg"} className="image" />
            </div>
            <h1>🁢 취미_스키</h1>    
            <h2>➡️ 항상 매년 1~2번은 가는 것 같아요! 올해 겨울에 같이 고고~?</h2>
            <div class="container2">
                <img style={{height:"645px", width:"450px"}}src={"./Introduce_Page/images/4-7.jpeg"} className="image" />
                <img style={{height:"645px", width:"450px"}}src={"./Introduce_Page/images/4-8.jpg"} className="image" />
                <div>
                    <img src="./Introduce_Page/images/2-15.jpeg" className="image" />
                    <img src="./Introduce_Page/images/4-11.jpeg" className="image" />
                </div>
            </div>
            <h1>🁢 취미_노래방</h1>
            <h2>➡️ 이미 몇몇 분들에겐 공개했지만....!! 랩 하는거 좋아합니다 :) 아래는 고등학교 힙동 사진이예요</h2>
            <div class="container2">
                <img src={"./Introduce_Page/images/4-4.jpeg"} className="image2" />
                <img src={"./Introduce_Page/images/4-3.jpeg"} className="image2" />
            </div>
            <h1>🁢 취미_방탈출</h1>
            <h2>➡️ 잘하진 않고 주로 잘하는 친구들 버스 타서 탈출 당하는 거 좋아합니다 😏</h2>
            <div class="container2">
                <div>
                    <img src={"./Introduce_Page/images/4-10.jpg"} className="image2" />
                    <img src={"./Introduce_Page/images/2-12.jpg"} className="image2" />
                </div>
                <img style={{height:"720px", width:"520px"}}src={"./Introduce_Page/images/4-9.jpg"} className="image" />
            </div>
        </>
    )
}
export default Profile;