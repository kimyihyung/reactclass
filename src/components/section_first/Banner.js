import React from 'react'

function Banner(props) {
    return (
        <section id="bannerType" className={`banner__wrap ${props.attr[0]} ${props.attr[1]}`}>
            <h2 className="blind">배너 영역</h2>
            <div className="banner__inner">
                <h3 className="title">기상 정보</h3>
                <p className="desc">
                    자세한 기상 정보는 기상청을 통해서 확인해 주세요
                    <a href="https://www.weather.go.kr" title="블로그 이동">https://www.weather.go.kr</a>
                </p>
                <span className="small">기상청</span>
            </div>
        </section>
    )
}

export default Banner