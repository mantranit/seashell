import { useNavigate } from "react-router";
import "./style.scss";
import { t } from "i18next";
import { useEffect } from "react";
import { keyboard } from "../../keyboard";
import iconBack from "../../../assets/icons/tv_back_lg.png";

function ButtonBack() {
  const navigate = useNavigate();
  const handleKeyDown = (event: any) => {
    let keycode;
    if (window.event) {
      keycode = event.keyCode;
    } else if (event.which) {
      keycode = event.which;
    }

    if (keycode === keyboard.BACK) {
      navigate(-1);
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  });

  return (
    <div className="button-back-wrapper">
      <button onClick={() => navigate(-1)}>
        <span className="icon">
          <svg
            id="btn_back"
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="100%"
          >
            <g fill-rule="evenodd">
              <path
                fill-rule="nonzero"
                d="M16.553 19H8.9c-.587 0-1.063-.452-1.063-1.01s.476-1.01 1.063-1.01h7.654c2.936 0 5.316-2.261 5.316-5.05 0-2.789-2.38-5.05-5.316-5.05H3.594l3.094 2.98c.36.4.337.998-.056 1.37a1.104 1.104 0 0 1-1.443.054L.309 6.587a.975.975 0 0 1 0-1.424L5.252.467c.237-.353.678-.53 1.11-.447.43.084.763.412.835.824a.993.993 0 0 1-.51 1.037L3.595 4.86h12.97c4.11.003 7.439 3.17 7.436 7.075-.003 3.905-3.337 7.068-7.447 7.065z"
              />
            </g>
          </svg>
        </span>
        {t("menu.Back")}
      </button>
    </div>
  );
}

export default ButtonBack;
