import { ISVG } from "./ISVG";
import style from "../themeButton.module.scss"

const DarkThemeSVG = ({
  color = "#000",
  width = "50px",
  height = "50px",
}: ISVG) => {
  return (
    <svg
      version="1.0"
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 50.000000 50.000000"
      preserveAspectRatio="xMidYMid meet"
      className={style.moon}
    >
      <g
        transform="translate(0.000000,50.000000) scale(0.100000,-0.100000)"
        fill={color}
        stroke="none"
      >
        <path
          d="M225 441 c-140 -65 -167 -247 -52 -348 19 -17 52 -36 73 -43 38 -13
130 -8 146 8 5 5 -10 23 -33 42 -103 82 -103 212 -1 300 l46 39 -28 10 c-41
16 -106 13 -151 -8z m127 -6 c3 -3 -12 -23 -33 -45 -78 -82 -78 -198 0 -280
21 -22 36 -42 33 -45 -11 -10 -74 -4 -110 10 -157 66 -161 275 -7 346 37 17
105 25 117 14z"
        />
      </g>
    </svg>
  );
};

export default DarkThemeSVG;
