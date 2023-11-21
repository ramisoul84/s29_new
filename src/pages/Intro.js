import { useState, useEffect, useRef } from "react";
import "./intro.scss";
const colors = [
  "#73c046",
  "#cb866d",
  "#60a53a",
  "#af715d",
  "#3c6b26",
  "#73473c",
];
const startX = 4;
const getRandomInt = (n) => {
  return Math.floor(Math.random() * n);
};
const getRandomColor = () => {
  return `rgb(${getRandomInt(255)},${getRandomInt(255)},${getRandomInt(255)})`;
};
const Intro = () => {
  const gridRef = useRef(null);
  const [gridWidth, setGridWidth] = useState(window.innerWidth / 21);
  useEffect(() => {
    gridRef.current.style.setProperty("--w", `${window.innerWidth / 21}px`);
    const udpateGridWidth = () => {
      let gridWidth = window.innerWidth / 21;
      gridRef.current.style.setProperty("--w", `${gridWidth}px`);
      setGridWidth(window.innerWidth / 21);
    };
    window.addEventListener("resize", udpateGridWidth);
    return () => {
      window.removeEventListener("resize", udpateGridWidth);
    };
  }, []);
  return (
    <div id="intro">
      <div className="intro-grid" ref={gridRef}>
        <svg>
          {/* s */}
          <rect
            x={(startX + 0) * gridWidth + 1}
            y={5.8 * gridWidth + 1}
            fill={getRandomColor()}
            className="rect1"
          />
          <rect
            x={(startX + 2) * gridWidth + 1}
            y={3 * gridWidth + 1}
            fill={getRandomColor()}
            className="rect1"
          />
          <rect
            x={(startX + 0) * gridWidth + 1}
            y={2 * gridWidth + 1}
            fill={getRandomColor()}
          />
          <rect
            x={(startX + 1) * gridWidth + 1}
            y={2 * gridWidth + 1}
            fill={getRandomColor()}
          />
          <rect
            x={(startX + 2) * gridWidth + 1}
            y={2 * gridWidth + 1}
            fill={getRandomColor()}
          />
          <rect
            x={(startX + 0) * gridWidth + 1}
            y={3 * gridWidth + 1}
            fill={getRandomColor()}
          />
          <rect
            x={(startX + 0) * gridWidth + 1}
            y={4 * gridWidth + 1}
            fill={getRandomColor()}
          />
          <rect
            x={(startX + 1) * gridWidth + 1}
            y={4 * gridWidth + 1}
            fill={getRandomColor()}
          />
          <rect
            x={(startX + 2) * gridWidth + 1}
            y={4 * gridWidth + 1}
            fill={getRandomColor()}
          />
          <rect
            x={(startX + 2) * gridWidth + 1}
            y={5 * gridWidth + 1}
            fill={getRandomColor()}
          />
          <rect
            x={(startX + 2) * gridWidth + 1}
            y={6 * gridWidth + 1}
            fill={getRandomColor()}
          />
          <rect
            x={(startX + 1) * gridWidth + 1}
            y={6 * gridWidth + 1}
            fill={getRandomColor()}
          />
          <rect
            x={(startX + 0) * gridWidth + 1}
            y={6 * gridWidth + 1}
            fill={getRandomColor()}
          />

          {/* 2 */}
          <rect
            x={(startX + 6) * gridWidth + 1}
            y={2 * gridWidth + 1}
            fill={getRandomColor()}
          />
          <rect
            x={(startX + 7) * gridWidth + 1}
            y={2 * gridWidth + 1}
            fill={getRandomColor()}
          />
          <rect
            x={(startX + 8) * gridWidth + 1}
            y={2 * gridWidth + 1}
            fill={getRandomColor()}
          />
          <rect
            x={(startX + 8) * gridWidth + 1}
            y={3 * gridWidth + 1}
            fill={getRandomColor()}
          />
          <rect
            x={(startX + 8) * gridWidth + 1}
            y={4 * gridWidth + 1}
            fill={getRandomColor()}
          />
          <rect
            x={(startX + 7) * gridWidth + 1}
            y={4 * gridWidth + 1}
            fill={getRandomColor()}
          />
          <rect
            x={(startX + 6) * gridWidth + 1}
            y={4 * gridWidth + 1}
            fill={getRandomColor()}
          />
          <rect
            x={(startX + 6) * gridWidth + 1}
            y={5 * gridWidth + 1}
            fill={getRandomColor()}
          />
          <rect
            x={(startX + 6) * gridWidth + 1}
            y={6 * gridWidth + 1}
            fill={getRandomColor()}
          />
          <rect
            x={(startX + 7) * gridWidth + 1}
            y={6 * gridWidth + 1}
            fill={getRandomColor()}
          />
          <rect
            x={(startX + 8) * gridWidth + 1}
            y={6 * gridWidth + 1}
            fill={getRandomColor()}
          />
          {/* 9 */}
          <rect
            x={(startX + 10) * gridWidth + 1}
            y={2 * gridWidth + 1}
            fill={getRandomColor()}
          />
          <rect
            x={(startX + 11) * gridWidth + 1}
            y={2 * gridWidth + 1}
            fill={getRandomColor()}
          />
          <rect
            x={(startX + 12) * gridWidth + 1}
            y={2 * gridWidth + 1}
            fill={getRandomColor()}
          />
          <rect
            x={(startX + 10) * gridWidth + 1}
            y={3 * gridWidth + 1}
            fill={getRandomColor()}
          />
          <rect
            x={(startX + 12) * gridWidth + 1}
            y={3 * gridWidth + 1}
            fill={getRandomColor()}
          />
          <rect
            x={(startX + 12) * gridWidth + 1}
            y={4 * gridWidth + 1}
            fill={getRandomColor()}
          />
          <rect
            x={(startX + 11) * gridWidth + 1}
            y={4 * gridWidth + 1}
            fill={getRandomColor()}
          />
          <rect
            x={(startX + 10) * gridWidth + 1}
            y={4 * gridWidth + 1}
            fill={getRandomColor()}
          />
          <rect
            x={(startX + 12) * gridWidth + 1}
            y={5 * gridWidth + 1}
            fill={getRandomColor()}
          />
          <rect
            x={(startX + 12) * gridWidth + 1}
            y={6 * gridWidth + 1}
            fill={getRandomColor()}
          />
          <rect
            x={(startX + 11) * gridWidth + 1}
            y={6 * gridWidth + 1}
            fill={getRandomColor()}
          />
          <rect
            x={(startX + 10) * gridWidth + 1}
            y={6 * gridWidth + 1}
            fill={getRandomColor()}
          />

          <g>
            <rect
              x={(startX + 4) * gridWidth + 1}
              y={6 * gridWidth + 1}
              className="door"
              onClick={() => {
                document.getElementById("intro").style.display = "none";
                document.getElementById("main").style.display = "flex";
              }}
            />
          </g>
        </svg>
      </div>
    </div>
  );
};
export default Intro;
