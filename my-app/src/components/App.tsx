import React, { useCallback, useRef } from "react";
import store from "../redux/store";
import { setData } from "../redux/reducers/wheater";
import WapiKey from "../apiKey";
import { useSelector } from "react-redux";
export default function App() {
  const CityInput = useRef<HTMLInputElement>(null);
  const StateArray = useSelector<State.CityW[], State.CityW[]>(
    (state) => state
  );
  async function getDataWeatherWithCity() {
    try {
      if (!CityInput.current) {
        throw CityInput;
      }
      const CityValue = CityInput.current.value;
      const data = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${CityValue}&appid=${WapiKey}&units=metric`,
        { headers: { Accept: "application/json" } }
      );
      console.log(data);
      if (!data.ok) {
        throw data;
      }
      const CityObj = await data.json();
      console.log(CityObj, "cityObj");
      store.dispatch(setData(CityObj));
    } catch (err) {
      console.log(err, "city dont here");
    }
  }

  const getWeatherState = useCallback(() => {
    console.log(StateArray, "StateArray");

    if (StateArray && StateArray.length > 0) {
      const StateJSX = StateArray.map((CityObj) => {
        return (
          <li>
            {CityObj.name} {CityObj.main.temp}
          </li>
        );
      });
      console.log(StateJSX, "JSX");
      return StateJSX;
    }
    return;
  }, [StateArray]);

  return (
    <div>
      <h1>Get Weather on Cities</h1>
      <p>
        <input ref={CityInput} />
        <button
          onClick={() => {
            getDataWeatherWithCity();
          }}
        >
          Get Data
        </button>
      </p>
      <ul>{getWeatherState()}</ul>
    </div>
  );
}
