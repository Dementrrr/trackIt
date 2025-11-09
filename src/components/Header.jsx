export default function Header() {

  return (
    <>
      <div className="header">
        <a href="/" className="header__logo logo">
            <img src="logo.png" alt="" className="logo__img" />
        </a>
        
        <div className="header__content"></div>

        <a href="" className="header__profile profile">
            <img src="no_profile.png" alt="" className="profile__img" />
        </a>
      </div>
    </>
  )
}