import React, { useReducer } from "react";
import Accordian from "./components/Accordian";

type stateType = {
  size: string;
  labelColor: string;
  accordianColor: string;
  textColor: string;
};

const data = [
  {
    key: "first",
    value: {
      title: "How much is my case worth?",
      content: "Default Example of Law Firn NewsLetter",
    },
  },
  {
    key: "second",
    value: {
      title: "What should I do right after car accidect",
      content: "Default Example of Law Firn NewsLetter",
    },
  },
  {
    key: "third",
    value: {
      title: "How much is my case worth?",
      content: "Default Example of Law Firn NewsLetter",
    },
  },
  {
    key: "fourth",
    value: {
      title: "Do I need a personal injury report?",
      content:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer.",
    },
  },
];

function App() {
  const colorName = require("color-name");
  const [{ size, labelColor, accordianColor, textColor }, setstate] =
    useReducer(
      (state: stateType, newState: Partial<stateType>) => ({
        ...state,
        ...newState,
      }),
      {
        size: "w-[90%]",
        labelColor: "bg-[black]",
        accordianColor: "bg-[green]",
        textColor: "text-[white]",
      }
    );

  // function rgbToHex(r, g, b) {
  //   return "#" + (1 << 24 | r << 16 | g << 8 | b).toString(16).slice(1);
  // }

  // alert(rgbToHex(25, 51, 255)); // #0033ff

  // function hexToRgbToColorName(hex: string) {
  //   var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  //   hex = hex.replace(shorthandRegex, function (m, r, g, b) {
  //     return r + r + g + g + b + b;
  //   });

  //   var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  //   console.log(result);
  //   return result
  //     ? [
  //         `${parseInt(result[1], 16)}`,
  //         `${parseInt(result[2], 16)}`,
  //         `${parseInt(result[3], 16)}`,
  //       ]
  //     : null;
  // }

  const handleColorChange = ({
    title,
    color,
  }: {
    title: string;
    color: string;
  }) => {
    // console.log(title, color.toString());
    setstate({ [title]: color.toString() });
  };
  console.log(labelColor, accordianColor);

  return (
    <div>
      <div className="flex justify-evenly">
        <label htmlFor="size">
          <span>Select Size</span>
          <select
            name="size"
            id="size"
            value={size}
            onChange={(e) => setstate({ size: e.currentTarget.value })}
          >
            <option value="w-[10%]">10</option>
            <option value="w-[30%]">30</option>
            <option value="w-[50%]">50</option>
            <option value="w-[70%]">70</option>
            <option value="w-[90%]">90</option>
          </select>
        </label>
        <label htmlFor="">
          <span>Select Label Color</span>
          <select
            name="labelColor"
            id="labelColor"
            value={labelColor}
            onChange={(e) =>
              handleColorChange({
                title: "labelColor",
                color: e.currentTarget.value,
              })
            }
          >
            <option value="bg-[black]">Black</option>
            <option value="bg-[green]">Green</option>
            <option value="bg-[red]">Red</option>
            <option value="bg-[yellow]">Yellow</option>
            <option value="bg-[white]">White</option>
          </select>
        </label>
        <label htmlFor="">
          <span>Select Accordian Color</span>
          <select
            name="accordianColor"
            id="accordianColor"
            value={accordianColor}
            onChange={(e) =>
              handleColorChange({
                title: "accordianColor",
                color: e.currentTarget.value,
              })
            }
          >
            <option value="bg-[black]">Black</option>
            <option value="bg-[green]">Green</option>
            <option value="bg-[red]">Red</option>
            <option value="bg-[yellow]">Yellow</option>
            <option value="bg-[white]">White</option>
          </select>
        </label>
        <label htmlFor="">
          <span>Select Text Color</span>
          <select
            name="textColor"
            id="textColor"
            value={textColor}
            onChange={(e) =>
              handleColorChange({
                title: "textColor",
                color: e.currentTarget.value,
              })
            }
          >
            <option value="text-[black]">Black</option>
            <option value="text-[green]">Green</option>
            <option value="text-[red]">Red</option>
            <option value="text-[yellow]">Yellow</option>
            <option value="text-[white]">White</option>
          </select>
        </label>
      </div>
      <div className={`${size}`}>
        <Accordian
          data={data}
          labelColor={labelColor}
          accordianColor={accordianColor}
          textColor={textColor}
        />
      </div>
    </div>
  );
}

export default App;
