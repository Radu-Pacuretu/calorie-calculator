/* eslint-disable react/prop-types */
function SelectButton({ children }) {
  return (
    <label>
      <input type="radio" name="activity"></input>
      <div>{children}</div>
    </label>
  );
}

export default SelectButton;
