import React from "react";

function Image(props) {
  return (
    <section
      id="imageType"
      className={`image__wrap ${props.attr[0]} ${props.attr[1]}`}
    >
      <h2>PRECIPITATION</h2>
      <p>지구의 물 순환으로 수증기가 응축하여 땅에 내리는 강수현상</p>
      <div className={`image__inner ${props.attr[2]}`}>
        <article className="image img1">
          <h3 className="image__title">비</h3>
          <p className="image__desc">
            대기 중의 수증기가 물방울이 되어 지상으로 떨어지는 기상현상. 비가
            내리는 대표적인 계절로는 여름이 있습니다.
          </p>
          <a className="image__btn" href="/" title="자세히 보기">
            자세히 보기
          </a>
        </article>
        <article className="image img2">
          <h3 className="image__title">눈</h3>
          <p className="image__desc">
            대기 중의 수증기가 얼어붙은 상태가 되어 지상으로 떨어지는 기상현상.
            눈이 내리는 대표적인 계절로는 겨울이 있습니다.
          </p>
          <a className="image__btn yellow" href="/" title="자세히 보기">
            자세히 보기
          </a>
        </article>
      </div>
    </section>
  );
}

export default Image;
