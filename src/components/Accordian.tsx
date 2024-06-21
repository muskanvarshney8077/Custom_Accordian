import { useState } from "react";
import { DataType } from "../utils/Type";

type Prop = {
  data: DataType[];
  labelColor: string;
  accordianColor: string;
  textColor: string;
};

const Accordian = ({ data, labelColor, accordianColor, textColor }: Prop) => {
  const [clickedKey, setClickedKey] = useState("first");
  const handleChange = (selectedKey: string) => {
    setClickedKey(selectedKey);
  };

  return (
    <div>
      {data.map((item) => (
        <div
          key={item.key}
          className={`mx-[2%] mt-[1%] w-[100%] rounded-[10px] border-[2px] border-[black] ${accordianColor}`}
        >
          <input
            type="radio"
            id={item.key}
            name="options"
            className="hidden"
            onChange={() => handleChange(item.key)}
            onClick={() =>
              clickedKey === item.key
                ? handleChange("")
                : handleChange(item.key)
            }
            checked={clickedKey === item.key}
          />
          <label
            htmlFor={item.key}
            className={`cursor-pointer flex w-[100%] justify-between py-[2%] px-[1%] rounded-[10px] ${labelColor} ${textColor}`}
          >
            <p className="w-[90%]">{item.value.title}</p>
            <p
              className={`${clickedKey === item.key ? "rotate-[-90deg]" : ""}`}
            >
              {"<"}
            </p>
          </label>
          <div
            key={item.key}
            className={`overflow-hidden rounded-[10px] ${
              clickedKey === item.key ? "max-h-[100%]" : "max-h-[0]"
            } ${textColor}`}
            // className={clsx("w-[100%] text-[white]  rounded-[10px]", {
            //   "max-h-0": !radioClicked,
            //   "max-h-[100vh]": radioClicked,
            //   "overflow-hidden": !radioClicked,
            // })}
          >
            <p className="py-[2%] px-[1%]">{item.value.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordian;
