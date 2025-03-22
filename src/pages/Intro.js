import {Link} from "react-router-dom";
import "./Intro.css";

function Intro(){
    return(
        <>
            <h1 style={{textAlign:"left"}}>🁢 Intro  </h1>
            <div class="container">
                <img src="https://raw.githubusercontent.com/Junseong0829/Introduce_Page/refs/heads/main/public/images/2-7.JPEG" className="image" />
                <div class="text">
                    <p style={{margin:"20px", marginLeft:"0px"}}>안녕하세요! 🤭 저는 21학번 이준성이구요..!</p>
                    <p>✅ GIST에서 전기전자컴퓨터공학과를 전공하고 있어요</p>
                    <p>✅ 자주 웃고, 주변에 긍정적인 기운을 많이 줘요</p>
                    <p>✅ 다양한 경험과 그 속에서 발전하는 걸 좋아해요</p>
                    <p>✅ 초면에 낯을 많이 가리지만 친해지면 그 누구보다 활발해요!  😉</p>
                    <p>✅ 저에 대해 더 자세히 알고 싶다면 상단 네비게이션 바를 활용해주세요 :)</p>
                </div>
            </div>
        </>
    )
}
export default Intro;