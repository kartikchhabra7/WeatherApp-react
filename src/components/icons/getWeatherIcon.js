import React from "react";
import {
  BsFillCloudsFill,
  BsFillCloudDrizzleFill,
  BsCloudHaze2Fill,
  BsCloudRainHeavyFill,
  BsCloudHaze,
  GiFog,
  GiSnowing,
  IoThunderstorm,
  WiSmoke,
  FaCloud,
} from "../../import/icons";

export function getWeatherIcon(main) {
  let icon = null;

  if (main === "Clouds") {
    icon = <BsFillCloudsFill className="h-25 w-25 fw-bold" />;
  } else if (main === "Drizzle") {
    icon = (
      <BsFillCloudDrizzleFill className="h-25 w-25" style={{ color: "blue" }} />
    );
  } else if (main === "Thunderstorm") {
    icon = <IoThunderstorm className="h-25 w-25" />;
  } else if (main === "Rain") {
    icon = <BsCloudRainHeavyFill className="h-25 w-25" />;
  } else if (main === "Fog") {
    icon = <GiFog className="h-25 w-25" />;
  } else if (main === "Haze") {
    icon = <BsCloudHaze2Fill className="h-25 w-25 text-white" />;
  } else if (main === "Snow") {
    icon = <GiSnowing className="h-25 w-25" />;
  } else if (main === "Mist") {
    icon = <BsCloudHaze className="h-25 w-25" />;
  } else if (main === "Smoke") {
    icon = <WiSmoke className="h-25 w-25" />;
  } else {
    icon = <FaCloud className="h-25 w-25" />;
  }

  return icon;
}