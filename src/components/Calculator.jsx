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
  const [state, dispatch] = useReducer(reducer, initialState);

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
              <input type="radio" name="male"></input>
              Male
            </label>
            <label>
              <input type="radio" name="female"></input>
              Female
            </label>
          </fieldset>
          <fieldset>
            <legend>Age</legend>
            <input
              type="text"
              name="age"
              onChange={(e) => handleUpdate(e)}
            ></input>
          </fieldset>
          <fieldset>
            <legend>Units</legend>
            <label>
              <input type="radio" name="imperial"></input>
              Imperial
            </label>
            <label>
              <input type="radio" name="metric"></input>
              Metric
            </label>
          </fieldset>
          <fieldset>
            <legend>Weight</legend>
            <label>
              <input
                type="text"
                name="weight"
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
                onChange={(e) => handleUpdate(e)}
              ></input>
              cm
            </label>
          </fieldset>
        </div>
        <div>
          <fieldset>
            <legend>Activity Level</legend>
            <SelectButton>
              <div className={styles.selector}></div>
              <div className={styles.title}>Sedentary</div>
              <div className={styles.description}>little or no exercise</div>
            </SelectButton>
            <SelectButton>
              <div className={styles.selector}></div>
              <div className={styles.title}>Lightly Active</div>
              <div className={styles.description}>
                exercise 1-2 days per week
              </div>
            </SelectButton>
            <SelectButton>
              <div className={styles.selector}></div>
              <div className={styles.title}>Moderately Active</div>
              <div className={styles.description}>
                exercise 3-5 days per week
              </div>
            </SelectButton>
            <SelectButton>
              <div className={styles.selector}></div>
              <div className={styles.title}>Very Active</div>
              <div className={styles.description}>
                exercise 6-7 days per week
              </div>
            </SelectButton>
            <SelectButton>
              <div className={styles.selector}></div>
              <div className={styles.title}>Extra Active</div>
              <div className={styles.description}>
                exercise 6-7 days per week and active job
              </div>
            </SelectButton>
          </fieldset>
        </div>
        <div>
          <fieldset>
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
          </fieldset>
          <div className={styles.calculateBtn}>
            <input type="submit"></input>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Calculator;
