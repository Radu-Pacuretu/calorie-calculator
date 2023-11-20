import { useReducer } from "react";
import styles from "./Calculator.module.css";

import SelectButton from "./SelectButton";

const initialState = {
  gender: "female",
  units: "metric",
  activityLevel: 1.2,
  goal: "maintain",
  age: "",
  weight: "",
  height: "",
};

function reducer(state, action) {
  console.log(action);
  switch (action.type) {
    case "updateStrings":
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      };

    default:
      break;
  }
}

function Calculator() {
  const [{ gender, age, weight, height, units, activityLevel }, dispatch] =
    useReducer(reducer, initialState);

  function handleUpdate(e) {
    dispatch({
      type: "updateStrings",
      payload: { name: e.target.name, value: e.target.value },
    });
  }

  return (
    <div className={styles.calculator}>
      <form>
        <div>
          <fieldset>
            <legend>Gender</legend>
            <label>
              <input
                type="radio"
                name="gender"
                value="male"
                checked={gender === "male"}
                onChange={(e) => handleUpdate(e)}
              ></input>
              Male
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="female"
                checked={gender === "female"}
                onChange={(e) => handleUpdate(e)}
              ></input>
              Female
            </label>
          </fieldset>
          <fieldset>
            <legend>Age</legend>
            <input
              type="text"
              name="age"
              value={age}
              onChange={(e) => handleUpdate(e)}
            ></input>
          </fieldset>
          <fieldset>
            <legend>Units</legend>
            <label>
              <input
                type="radio"
                name="units"
                value="imperial"
                checked={units === "imperial"}
                onChange={(e) => handleUpdate(e)}
              ></input>
              Imperial
            </label>
            <label>
              <input
                type="radio"
                name="units"
                value="metric"
                checked={units === "metric"}
                onChange={(e) => handleUpdate(e)}
              ></input>
              Metric
            </label>
          </fieldset>
          <fieldset>
            <legend>Weight</legend>
            <label>
              <input
                type="text"
                name="weight"
                value={weight}
                onChange={(e) => handleUpdate(e)}
              ></input>
              kg
            </label>
          </fieldset>
          <fieldset>
            <legend>Height</legend>
            <label>
              <input
                type="text"
                name="height"
                value={height}
                onChange={(e) => handleUpdate(e)}
              ></input>
              cm
            </label>
          </fieldset>
        </div>
        <div>
          <fieldset>
            <legend>Activity Level</legend>
            <SelectButton
              activityLevel={activityLevel}
              activityValue={1.2}
              key={1.2}
              handleUpdate={handleUpdate}
            >
              <div className={styles.selector}></div>
              <div className={styles.title}>Sedentary</div>
              <div className={styles.description}>little or no exercise</div>
            </SelectButton>
            <SelectButton
              activityLevel={activityLevel}
              activityValue={1.375}
              key={1.3}
              handleUpdate={handleUpdate}
            >
              <div className={styles.selector}></div>
              <div className={styles.title}>Lightly Active</div>
              <div className={styles.description}>
                exercise 1-2 days per week
              </div>
            </SelectButton>
            <SelectButton
              activityLevel={activityLevel}
              activityValue={1.55}
              key={1.5}
              handleUpdate={handleUpdate}
            >
              <div className={styles.selector}></div>
              <div className={styles.title}>Moderately Active</div>
              <div className={styles.description}>
                exercise 3-5 days per week
              </div>
            </SelectButton>
            <SelectButton
              activityLevel={activityLevel}
              activityValue={1.725}
              key={1.7}
              handleUpdate={handleUpdate}
            >
              <div className={styles.selector}></div>
              <div className={styles.title}>Very Active</div>
              <div className={styles.description}>
                exercise 6-7 days per week
              </div>
            </SelectButton>
            <SelectButton
              activityLevel={activityLevel}
              activityValue={1.9}
              key={1.9}
              handleUpdate={handleUpdate}
            >
              <div className={styles.selector}></div>
              <div className={styles.title}>Extra Active</div>
              <div className={styles.description}>
                exercise 6-7 days per week and active job
              </div>
            </SelectButton>
          </fieldset>
        </div>
        <div>
          {/* <fieldset>
            <legend>Goal</legend>
            <SelectButton>
              <div className={styles.selector}></div>
              <div className={styles.title}>Lose weight</div>
            </SelectButton>
            <SelectButton>
              <div className={styles.selector}></div>
              <div className={styles.title}>Gain weight</div>
            </SelectButton>
            <SelectButton>
              <div className={styles.selector}></div>
              <div className={styles.title}>Maintain weight</div>
            </SelectButton>
          </fieldset> */}
          <div className={styles.calculateBtn}>
            <input type="submit"></input>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Calculator;
