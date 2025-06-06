import React from "react";

const EALogo = ({ size = 30, color = "#ffffff" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 200 200"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g fill="none" stroke={color} strokeWidth="10" strokeLinecap="round">
      {/* "E" */}
      <path
        d="
          M 40 50
          L 40 150
          M 40 50
          L 120 50
          M 40 100
          L 90 100
          M 40 150
          L 120 150
        "
      />
      {/* "A" */}
      <path
        d="
          M 130 150
          L 170 50
          L 210 200
          M 145 115
          L 195 100
        "
      />
      {/* Interwoven overlap */}
      <path
        d="
          M 90 100
          L 120 100
        "
        stroke={color}
        strokeWidth="10"
        strokeLinecap="round"
        fill="none"
      />
    </g>
  </svg>
);

export default EALogo;
