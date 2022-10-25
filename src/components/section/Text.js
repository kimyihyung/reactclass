import React from 'react'

function Text(props) {
    return (
        <section id="textType" className={`text__wrap ${props.attr[0]} ${props.attr[1]}`}>
            <span>Natural Disasters</span>
            <h2 className="mb70">자연재해 종류 </h2>
            <div className={`text__inner ${props.attr[2]}`}>
                <div className="text t1">
                    <h3 className="text__title">해일</h3>
                    <p className="text__desc">
                        해안에 가까울수록 위험하므로 해일이 발생
                        하면 해안에서 멀리 떨어진 급경사가 없고
                        지형이 높은 안전한 곳으로 이동하여야 합니다.
                    </p>
                    <a className="text_btn" href="/">더보기</a>
                </div>
                <div className="text t2">
                    <h3 className="text__title">호우</h3>
                    <p className="text__desc">
                        자주 물에 잠기는 지역, 산사태 위험지역 등
                        위험한 곳 피하고 안전한 곳으로 대피하며,
                        실내에서 문과 창문을 닫고, 외출 삼가합니다.
                    </p>
                    <a className="text_btn" href="/">더보기</a>
                </div>
                <div className="text t3">
                    <h3 className="text__title">폭설</h3>
                    <p className="text__desc">
                        외출을 자제하고, 외출을 할 경우에는 대중
                        교통을 이용합니다. 보온 유지를 위해 외투,
                        장갑, 모자 등을 착용하여야 합니다. 폭설에는
                    </p>
                    <a className="text_btn" href="/">더보기</a>
                </div>
                <div className="text t4">
                    <h3 className="text__title">태풍</h3>
                    <p className="text__desc">
                        태풍이 시작된 때는 신속히 안전한 곳으로 <br />
                        대피하고, 외출을 삼가합니다. 실내에서는 <br />
                        문과 창문을 닫고 기상상황을 확인하여야 합니다.
                    </p>
                    <a className="text_btn" href="/">더보기</a>
                </div>
                <div className="text t5">
                    <h3 className="text__title">가뭄</h3>
                    <p className="text__desc">
                        가뭄은 비가 안오는 경우에 직면합니다.<br />
                        농촌에서 피해를 극명히 느끼게 됩니다. <br />
                        물 손실 방지에 노력해야 합니다.
                    </p>
                    <a className="text_btn" href="/">더보기</a>
                </div>
                <div className="text t6">
                    <h3 className="text__title">지진</h3>
                    <p className="text__desc">
                        낙하물에서 머리와 몸을 보호하는 것이 중요
                        합니다. 흔들림이 높은 상황에서는 움직이지
                        말고 잦아 들었을 때 대피를 해야합니다.
                    </p>
                    <a className="text_btn" href="/">더보기</a>
                </div>
            </div>
        </section>
    )
}

export default Text