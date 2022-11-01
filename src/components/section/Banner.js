import React from "react";

const bannerText = {
  blind: "배너 영역",
  title: "기상 정보",
  desc: "자세한 기상 정보는 기상청을 통해서 확인해 주세요",
  link: "https://www.weather.go.kr",
  linkTitle: "블로그 이동",
  small: "기상청",
};

function Banner(props) {
  return (
    <section
      id="bannerType"
      className={`banner__wrap ${props.attr[0]} ${props.attr[1]}`}
    >
      <h2 className="blind">{bannerText.blind}</h2>
      <div className="banner__inner">
        <h3 className="title">{bannerText.title}</h3>
        <p className="desc">
          {bannerText.desc}
          <a href={`${bannerText.link}`} title={`${bannerText.linkTitle}`}>
            {bannerText.link}
          </a>
        </p>
        <span className="small">{bannerText.small}</span>
      </div>
    </section>
  );
}

export default Banner;
