import React from 'react'

function Card(props) {
    return (
        <section id="cardType" className={`card__wrap ${props.attr[0]} ${props.attr[1]}`}>
            <h2>SEASON</h2>
            <p>사계절에 대해 알아봅시다.</p>
            <div className={`card__inner ${props.attr[2]}`}>
                <article className="card">
                    <figure className="card__header">
                        <img src="assets/img/card_bg01.jpg" alt="여름" />
                    </figure>
                    <div className="card__body">
                        <h3 className="tit">여름</h3>
                        <p className="desc">여름은 덥고, 습하며 두드러지는 계절 중에
                            하나입니다. 6월에서 8월까지를 여름으로
                            분류하며, 장마가 내리는 계절입니다.<br />
                            날씨가 덥고 녹음이 우거지는 계절입니다.
                        </p>
                        <a className="btn" href="/">
                            더 자세히 보기
                            <span aria-hidden="true">
                                <svg width="65" height="8" viewBox="0 0 65 8" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M64.3536 4.35355C64.5488 4.15829 64.5488 3.84171 64.3536 3.64645L61.1716 0.464466C60.9763 0.269204 60.6597 0.269204 60.4645 0.464466C60.2692 0.659728 60.2692 0.976311 60.4645 1.17157L63.2929 4L60.4645 6.82843C60.2692 7.02369 60.2692 7.34027 60.4645 7.53553C60.6597 7.7308 60.9763 7.7308 61.1716 7.53553L64.3536 4.35355ZM0 4.5H64V3.5H0V4.5Z"
                                        fill="black" />
                                </svg>
                            </span>
                        </a>
                    </div>
                </article>
                <article className="card">
                    <figure>
                        <img src="assets/img/card_bg03.jpg" alt="겨울" />
                    </figure>
                    <div className="card__body">
                        <h3 className="tit">겨울</h3>
                        <p className="desc">겨울은 춥고, 건조하며 두드러지는 계절 중
                            하나입니다. 12월에서 2월까지를 겨울로
                            분류하며, 눈이 내리는 계절입니다.
                            날씨가 춥고, 나무는 잎이 지는 계절입니다.
                        </p>
                        <a className="btn" href="/">
                            더 자세히 보기
                            <span aria-hidden="true">
                                <svg width="65" height="8" viewBox="0 0 65 8" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M64.3536 4.35355C64.5488 4.15829 64.5488 3.84171 64.3536 3.64645L61.1716 0.464466C60.9763 0.269204 60.6597 0.269204 60.4645 0.464466C60.2692 0.659728 60.2692 0.976311 60.4645 1.17157L63.2929 4L60.4645 6.82843C60.2692 7.02369 60.2692 7.34027 60.4645 7.53553C60.6597 7.7308 60.9763 7.7308 61.1716 7.53553L64.3536 4.35355ZM0 4.5H64V3.5H0V4.5Z"
                                        fill="black" />
                                </svg>
                            </span>
                        </a>
                    </div>
                </article>
                <article className="card">
                    <figure>
                        <img src="assets/img/card_bg02.jpg" alt="봄/가을" />
                    </figure>
                    <div className="card__body">
                        <h3 className="tit">봄/가을</h3>
                        <p className="desc">봄은 겨울에서 여름으로 가는 중간의 계절.
                            가을은 여름과 겨울의 중간에 있는 계절.
                            봄과 가을은 온도가 덥거나 춥지 않은 중간
                            온도로 사람들이 좋아하는 계절입니다.
                        </p>
                        <a className="btn" href="/">
                            더 자세히 보기
                            <span aria-hidden="true">
                                <svg width="65" height="8" viewBox="0 0 65 8" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M64.3536 4.35355C64.5488 4.15829 64.5488 3.84171 64.3536 3.64645L61.1716 0.464466C60.9763 0.269204 60.6597 0.269204 60.4645 0.464466C60.2692 0.659728 60.2692 0.976311 60.4645 1.17157L63.2929 4L60.4645 6.82843C60.2692 7.02369 60.2692 7.34027 60.4645 7.53553C60.6597 7.7308 60.9763 7.7308 61.1716 7.53553L64.3536 4.35355ZM0 4.5H64V3.5H0V4.5Z"
                                        fill="black" />
                                </svg>
                            </span>
                        </a>
                    </div>
                </article>
            </div>
        </section>
    )
}

export default Card