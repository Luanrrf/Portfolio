import { ISVG } from "./ISVG";

const ProjectsSVG = ({
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
    >
      <g
        transform="translate(0.000000,50.000000) scale(0.100000,-0.100000)"
        fill={color}
        stroke="none"
      >
        <path
          d="M7 464 c-4 -4 -7 -103 -7 -221 l0 -213 250 0 250 0 -2 218 -3 217
            -241 3 c-132 1 -243 -1 -247 -4z m473 -34 c0 -19 -7 -20 -230 -20 -223 0 -230
            1 -230 20 0 19 7 20 230 20 223 0 230 -1 230 -20z m0 -210 l0 -170 -230 0
            -230 0 0 170 0 170 230 0 230 0 0 -170z"
        />
        <path
          d="M236 235 c-50 -126 -50 -125 -37 -125 7 0 101 218 101 235 0 3 -4 5
            -9 5 -5 0 -30 -52 -55 -115z"
        />
        <path
          d="M118 268 c-21 -12 -38 -25 -38 -28 0 -7 73 -50 84 -50 15 0 4 18 -19
            30 -14 7 -25 16 -25 20 0 4 11 13 25 20 24 13 34 30 18 30 -5 0 -25 -10 -45
            -22z"
        />
        <path
          d="M330 282 c0 -5 11 -15 25 -22 14 -7 25 -16 25 -20 0 -4 -11 -13 -25
            -20 -23 -12 -34 -30 -19 -30 11 0 84 43 84 50 0 7 -73 50 -84 50 -3 0 -6 -4
            -6 -8z"
        />
      </g>
    </svg>
  );
};

export default ProjectsSVG;
