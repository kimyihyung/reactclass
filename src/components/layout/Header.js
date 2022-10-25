import React from 'react'

function Header(props) {
    return (
        <header id="headerType" className={`header__wrap ${props.fonts}`}>
            <div className="header__inner">
                <div className="header__logo">
                    <a href="/">WEATHER <em></em></a>
                </div>
                <div className="header__menu">
                    <ul>
                        <li className="active"><a href="#imageType">PRECIP</a></li>
                        <li><a href="#imgTextType">SITE</a></li>
                        <li><a href="#cardType">SEASON</a></li>
                        <li><a href="#bannerType">INFO</a></li>
                        <li><a href="#textType">N.D</a></li>
                    </ul>
                </div>
                <div className="header__member">
                    <a href="/">로그인</a>
                </div>
                <div className="header__ham">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </header >
    )
}

export default Header