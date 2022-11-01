import React from "react";

const textTitle = {
  title: "자연재해 종류",
  desc: "Natural Disasters",
};

const textText = [
  {
    classNum: "t1",
    title: "해일",
    desc: "해안에 가까울수록 위험하므로 해일이 발생 하면 해안에서 멀리 떨어진 급경사가 없고 지형이 높은 안전한 곳으로 이동하여야 합니다.",
  },
  {
    classNum: "t2",
    title: "호우",
    desc: "자주 물에 잠기는 지역, 산사태 위험지역 등 위험한 곳 피하고 안전한 곳으로 대피하며, 실내에서 문과 창문을 닫고, 외출 삼가합니다.",
  },
  {
    classNum: "t3",
    title: "폭설",
    desc: "외출을 자제하고, 외출을 할 경우에는 대중교통을 이용합니다. 보온 유지를 위해 외투, 장갑, 모자 등을 착용하여야 합니다. 폭설에는",
  },
  {
    classNum: "t4",
    title: "태풍",
    desc: `태풍이 시작된 때는 신속히 안전한 곳으로 대피하고, 외출을 삼가합니다. 실내에서는 문과 창문을 닫고 기상상황을 확인하여야 합니다.`,
  },
  {
    classNum: "t5",
    title: "가뭄",
    desc: "낙하물에서 머리와 몸을 보호하는 것이 중요합니다. 흔들림이 높은 상황에서는 움직이지 말고 잦아 들었을 때 대피를 해야합니다.",
  },
  {
    classNum: "t6",
    title: "지진",
    desc: "해안에 가까울수록 위험하므로 해일이 발생 하면 해안에서 멀리 떨어진 급경사가 없고 지형이 높은 안전한 곳으로 이동하여야 합니다.",
  },
];

function TextInner({ classNum, title, desc }) {
  return (
    <div className={`text ${classNum}`}>
      <h3 className="text__title">{title}</h3>
      <p className="text__desc">{desc}</p>
      <a className="text_btn" href="/">
        더보기
      </a>
    </div>
  );
}

function Text(props) {
  return (
    <section
      id="textType"
      className={`text__wrap ${props.attr[0]} ${props.attr[1]}`}
    >
      <span>{textTitle.desc}</span>
      <h2 className="mb70">{textTitle.title}</h2>
      <div className={`text__inner ${props.attr[2]}`}>
        {textText.map((text, index) => (
          <TextInner
            key={index}
            classNum={text.classNum}
            title={text.title}
            desc={text.desc}
          />
        ))}
      </div>
    </section>
  );
}

export default Text;
