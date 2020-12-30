import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";

function Footer({ onFooterClick, whichIndex }) {
  const [colorSet, setcolorSet] = useState("blue");
  let varName = [
    "--background-page-color",
    "--background-tabA-color",
    "--background-tabN-color",
    "--font-dark-color",
    "--font-2light-color",
    "--webkit-filter",
    "--filter",
  ];
  let blue = [
    "#96c4d8",
    "#cbe3ee",
    "aliceblue",
    "#214753",
    "white",
    "invert(0)",
    "invert(0)",
  ];
  let coffee = [
    "#dbc1ac",
    "#a38068",
    "#ece0d1",
    "#66462F",
    "#ecede3",
    "invert(0)",
    "invert(0)",
  ];
  let gray = [
    "black",
    "#2e2e2e",
    "#5c5c5c",
    "rgb(199, 199, 199)",
    "rgb(25, 25, 25)",
    "invert(1)",
    "invert(1)",
  ];

  useEffect(() => {
    varName.map((data, index) => {
      colorSet === "blue" &&
        document.documentElement.style.setProperty(data, blue[index]);
      colorSet === "coffee" &&
        document.documentElement.style.setProperty(data, coffee[index]);
      colorSet === "gray" &&
        document.documentElement.style.setProperty(data, gray[index]);
      return colorSet;
    });
  }, [colorSet]);

  const onFooterClick2 = () => {
    whichIndex === 17 ? onFooterClick(0) : onFooterClick(17);
  };
  const showinfo = (i) => {
    Swal.fire({
      title: "Read carefully!",
      text:
        "Here you'll find no adds, no data collection, no cookies (only externs), no login, no passwords, no monitoring or tracking. We don't like this and we assume, you don't like this either. Whatever you're doing here is anonymous and only your business. Except the ideas you send us, everything else is going to God knows where (Internet-Nirvana). We don't know you and we would keep it like that. What we want is you feeling good. Nothing else. If you are happy, even for one minute, you will make happy someone else too. We believe that. Just be happy.",
      confirmButtonText: "OK",
    });
  };
  return (
    <div className="footer">
      <div className="iconsRefferer">
        <div className="minitext" onClick={onFooterClick2}>
          .
        </div>
        <div className="infoContButtons">
          <button
            className="buttonHW"
            style={{ height: "22px" }}
            onClick={showinfo}
          >
            info
          </button>
          <button
            className="buttonHW"
            style={{ height: "22px" }}
            onClick={(e) => setcolorSet("blue")}
          >
            blue
          </button>
          <button
            className="buttonHW"
            style={{ height: "22px" }}
            onClick={(e) => setcolorSet("coffee")}
          >
            coffee
          </button>
          <button
            className="buttonHW"
            style={{ height: "22px" }}
            onClick={(e) => setcolorSet("gray")}
          >
            gray
          </button>
        </div>
      </div>
    </div>
  );
}
export default React.memo(Footer);
