import React from "react";

const imageTitle = {
  title: "PRECIPITATION",
  desc: "지구의 물 순환으로 수증기가 응축하여 땅에 내리는 강수현상",
};

const imageText = [
  {
    title: "비",
    desc: "대기 중의 수증기가 물방울이 되어 지상으로 떨어지는 기상현상. 비가 내리는 대표적인 계절로는 여름이 있습니다.",
    imgClass: "img1",
    btnClass: "basic",
    btnLink: "/",
  },
  {
    title: "눈",
    desc: "대기 중의 수증기가 얼어붙은 상태가 되어 지상으로 떨어지는 기상현상. 눈이 내리는 대표적인 계절로는 겨울이 있습니다.",
    imgClass: "img2",
    btnClass: "yellow",
    btnLink: "/",
  },
];

function ImageInner({ title, desc, imgClass, btnClass, btnLink }) {
  return (
    <article className={`image ${imgClass}`}>
      <h3 className="image__title">{title}</h3>
      <p className="image__desc">{desc}</p>
      <a
        className={`image__btn ${btnClass}`}
        href={`${btnLink}`}
        title="자세히 보기"
      >
        자세히 보기
      </a>
    </article>
  );
}

function Image(props) {
  return (
    <section
      id="imageType"
      className={`image__wrap ${props.attr[0]} ${props.attr[1]}`}
    >
      <h2>{imageTitle.title}</h2>
      <p>{imageTitle.desc}</p>

      <div className={`image__inner ${props.attr[2]}`}>
        {/* img라는 이름은 임의, map 사용하며, 처음 들어가는 것은 임의 정한 이름, 뒤는 여러개의 경우 index */}
        {imageText.map((img, index) => (
          <ImageInner
            key={index}
            title={img.title}
            desc={img.desc}
            imgClass={img.imgClass}
            btnClass={img.btnClass}
            btnLink={img.btnLink}
          />
        ))}
      </div>
    </section>
  );
}

export default Image;
