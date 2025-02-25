import { Link, useNavigate } from "react-router";
import "./style.scss";
import { t } from "i18next";
import { useEffect } from "react";
import { keyboard } from "../../keyboard";

function Welcome() {
  const nagivate = useNavigate();
  const handleKeyDown = (event: any) => {
    let keycode;
    if (window.event) {
      keycode = event.keyCode;
    } else if (event.which) {
      keycode = event.which;
    }

    if (keycode === keyboard.ENTER) {
      nagivate("/home");
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className="welcome-wrapper">
      <h1>
        {t("welcome.Dear")}, <strong>MR. Tuấn Lê</strong>
      </h1>
      <div className="welcome">
        <p>{t("welcome.Brief")}</p>
      </div>
      <div className="button-continue">
        <Link to="/home">{t("welcome.Continue")}</Link>
      </div>
    </div>
  );
}

export default Welcome;
