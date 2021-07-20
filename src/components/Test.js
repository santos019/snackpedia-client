import React, { useState } from "react";
import { Radar } from "react-chartjs-2";

function Test(props) {
  const [isClicked, setIsClicked] = useState({
    btnA: false,
    btnB: false,
    btnC: false,
  });

  const { btnA, btnB, btnC } = isClicked;

  const handleClicked = (e) => {
    console.log(e.target);

    const clicked = {
      ...isClicked,
      [e.target.name]: !isClicked[e.target.name],
    };

    setIsClicked(clicked);
    e.target.style.background = "black";

    console.log(isClicked);
  };

  let radarData = {
    labels: ["재구매", "가격", "맛", "추천", "접근성"],
    datasets: [
      {
        label: "각 비율",
        backgroundColor: "rgba(65, 42, 100, 0.5)",
        fill: true,
        radius: 10,
        pointHoverRadius: 10,
        data: [3, 4, 1, 3, 2],
      },
    ],
  };

  return (
    <div>
      <Radar
        options={{
          scale: {
            gridLines: {
              color: "#rgba(255, 60, 0, 0.1)",
              lineWidth: 2,
            },
            angleLines: {
              display: false,
            },
            ticks: {
              beginAtZero: true,
              min: 0,
              max: 5,
              stepSize: 1,
            },
            backgroundColor: "rgba(255, 60, 0, 0.1)",
            pointLabels: {
              fontSize: 20,
              fontColor: "red",
            },
          },
        }}
        data={radarData}
      />

      {/* <Radar
      options={{
        scale: {
          ticks: {
            beginAtZero: true,
            min: 0,
            max: 5,
            stepSize: 1,
            display: false,
          },
          pointLabels: {
            fontSize: 14,
          },
        },
        legend: {
          position: 'right',
          display: false,
        },
      }}
      data={expData}
      height={240}
    /> */}

      <button name="btnA" onClick={handleClicked}>
        BUTTON
      </button>
      <button name="btnB" onClick={handleClicked}>
        BUTTON
      </button>
      <button name="btnC" onClick={handleClicked}>
        BUTTON
      </button>
    </div>
  );
}

export default Test;
