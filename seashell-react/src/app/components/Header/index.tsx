import "./style.scss";

type THeaderProps = {};

function Header(props: THeaderProps) {
  return (
    <div className="header">
      <div>
        <div className="logo"></div>
      </div>
      <div className="generalInfo">
        <div className="guest">Welcome, Mr Tuan Le</div>
        <div className="room-number">Room 101</div>
        <div className="wearther">
          +30<sup>o</sup>C
        </div>
        <div className="clock">15:00</div>
        <div className="date">14 Feb 2025</div>
      </div>
    </div>
  );
}

export default Header;
