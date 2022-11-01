import React from "react";

const imgtextText = {
  blind: "유용한 사이트 살펴보기",
  sub: "weather forecast",
  title: "일기 예보 정보 사이트 알아보기",
  desc1: "날씨 정보 확인을 위한 유용한 사이트",
  desc2: "다양한 사이트로 정보를 확인합시다.",
};

const imgtextList = [
  {
    list: "네이버 날씨",
  },
  {
    list: "아큐웨더",
  },
  {
    list: "웨더채널",
  },
  {
    list: "웨더 뉴스",
  },
  {
    list: "에어코리아",
  },
  {
    list: "벤투스카이",
  },
];

function ListInner({ list }) {
  return (
    <li>
      <a href="/">{list}</a>
    </li>
  );
}

const imgtextBox = [
  {
    imgName: "img1",
    colorName: "blue",
    name: "cold",
  },
  {
    imgName: "img2",
    colorName: "red",
    name: "warm",
  },
];

function BoxInner({ imgName, colorName, name }) {
  return (
    <div className={`imgText__img ${imgName}`}>
      <a href="/" className={`${colorName}`}>
        {name}
      </a>
    </div>
  );
}

function ImgText({ attr }) {
  return (
    <section
      id="imgTextType"
      className={`ImgText__wrap ${attr[0]} ${attr[1]} ${attr[2]}`}
    >
      <h2 className="blind">{imgtextText.blind}</h2>
      <div className={`imgText__inner ${attr[3]}`}>
        <div className="imgText__txt">
          <span>{imgtextText.sub}</span>
          <h3>{imgtextText.title}</h3>
          <p>
            {imgtextText.desc1}
            <br />
            {imgtextText.desc2}
          </p>
          <ul>
            {imgtextList.map((list, index) => (
              <ListInner key={index} list={list.list} />
            ))}
          </ul>
        </div>
        {imgtextBox.map((box, index) => (
          <BoxInner
            key={index}
            imgName={box.imgName}
            colorName={box.colorName}
            name={box.name}
          />
        ))}
      </div>
    </section>
  );
}

export default ImgText;
