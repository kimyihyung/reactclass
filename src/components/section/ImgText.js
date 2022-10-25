import React from 'react'

function ImgText({ attr }) {
    return (
        <section id="imgTextType" className={`ImgText__wrap ${attr[0]} ${attr[1]} ${attr[2]}`}>
            <h2 className="blind">유용한 사이트 살펴보기</h2>
            <div className={`imgText__inner ${attr[3]}`}>
                <div className="imgText__txt">
                    <span>weather forecast</span>
                    <h3>일기 예보 정보
                        사이트 알아보기</h3>
                    <p>날씨 정보 확인을 위한 유용한 사이트<br />
                        다양한 사이트로 정보를 확인합시다.</p>
                    <ul>
                        <li><a href="/">네이버 날씨</a></li>
                        <li><a href="/">아큐웨더</a></li>
                        <li><a href="/">웨더채널</a></li>
                        <li><a href="/">웨더 뉴스</a></li>
                        <li><a href="/">에어코리아</a></li>
                        <li><a href="/">벤투스카이</a></li>
                    </ul>
                </div>
                <div className="imgText__img img1">
                    <a href="/">cold</a>
                </div>
                <div className="imgText__img img2">
                    <a href="/" className="red">warm</a>
                </div>
            </div>
        </section>
    )
}

export default ImgText