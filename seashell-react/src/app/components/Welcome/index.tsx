import { Link, useNavigate } from "react-router";
import "./style.scss";
import { t } from "i18next";
import { useEffect } from "react";

function Welcome() {
  const nagivate = useNavigate();
  const handleKeyDown = (event: any) => {
    let keycode;
    if (window.event) {
      keycode = event.keyCode;
    } else if (event.which) {
      keycode = event.which;
    }

    if (keycode === 13) {
      nagivate("/home");
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  });

  return (
    <div className="welcome-wrapper">
      <h1>
        DEAR, <strong>MR TUAN LE</strong>
      </h1>
      <div className="welcome">
        <p>
          We are delighted that you have chosen our hotel. <br />
          On behalf of the entire team of the SEASHELLS, I extend a very warm
          welcome to you and trust that your stay with us will be pleasant and
          comfortable.
        </p>
      </div>
      <div className="button-continue">
        <Link to="/home">Continue</Link>
      </div>
    </div>
  );
}

export default Welcome;
