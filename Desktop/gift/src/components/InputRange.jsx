import style from "./styles/layoutSt/inputRange.module.css";
function InputRange({ setTextInp, textInp }) {
  return (
    <>
      <div className={style.inpBorder}>
        <input
          type="range"
          max="100"
          min="0"
          step="1"
          onChange={(e) => setTextInp(e.target.value)}
          value={textInp}
        />
      </div>
    </>
  );
}

export default InputRange;
