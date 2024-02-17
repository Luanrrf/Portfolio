import { ISVG } from "./ISVG";

const IntroductionSVG = ({
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
          d="M130 399 c-109 -85 -144 -120 -106 -106 14 6 16 -8 16 -128 l0 -135
            210 0 210 0 0 135 c0 115 2 134 15 129 29 -11 15 12 -25 42 -34 25 -40 35 -40
            67 0 34 -2 37 -29 37 -16 0 -31 -5 -33 -11 -2 -6 -24 6 -50 25 -26 20 -48 36
            -50 36 -2 -1 -55 -41 -118 -91z m220 -10 l90 -71 0 -134 0 -134 -60 0 -60 0 0
            95 0 95 -70 0 -70 0 0 -95 0 -95 -60 0 -60 0 0 134 0 135 91 70 c50 39 95 71
            100 71 5 0 50 -32 99 -71z m40 16 c0 -8 -4 -15 -10 -15 -5 0 -10 7 -10 15 0 8
            5 15 10 15 6 0 10 -7 10 -15z m-90 -270 l0 -85 -50 0 -50 0 0 85 0 85 50 0 50
            0 0 -85z"
        />
      </g>
    </svg>
  );
};

export default IntroductionSVG;
