/* eslint-disable react/prop-types */
function SelectButton({
  children,
  activityLevel,
  activityValue,
  handleUpdate,
}) {
  return (
    <label>
      <input
        type="radio"
        name="activityLevel"
        value={activityValue}
        checked={activityLevel === activityValue}
        onChange={(e) => handleUpdate(e)}
      ></input>
      <div>{children}</div>
    </label>
  );
}

export default SelectButton;
