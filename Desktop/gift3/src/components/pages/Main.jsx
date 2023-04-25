import { useState } from "react";
import { Link } from "react-router-dom";
import style from "../styles/pagesSt/main.module.css";
import InputRange from "../InputRange";
import Persons from "../personsOfAge/Persons";
import GiftsPage from "./GiftsPage";
function Main() {
  const [textInp, setTextInp] = useState("0");
  const [textSelect, setTextSelect] = useState("man");

  const ageNum = Number(textInp);

  function formSubmit(event) {
    event.preventDefault();
  }

  return (
    <>
      {/* Добавление текста слева на главном меню  */}
      <div className={style.contentMain}>
        <div className={style.textMain}>
          <h1 className={style.h1}>YOURGIFT</h1>
          <h2 className={style.h2}>ВЫБИРАЙ ПОДАРОК САМ</h2>
          <hr className={style.hrText}></hr>
          <p className={style.p}>Подарки по любому поводу</p>
          <p className={style.p}>и на разный вкус</p>
          <br></br>
          <p className={style.p}>Наличие продвинутой</p>
          <p className={style.p}>фильтрации поможет быстрее</p>
          <p className={style.p}>выбрать то, что вам нужно</p>
        </div>
        {/* Добавление формы для выбора параметров */}
        <div className={style.form}>
          <div className={style.formInside}>
            <h2 style={{ color: "#FB6C5E" }}>Для кого подарок?</h2>
            <hr className={style.hrForm}></hr>

            {/* Выбор пола */}
            <h3>Пол</h3>

            <select
              onChange={(e) => {
                setTextSelect(e.target.value);
              }}
              value={textSelect}
            >
              <option value="" disabled>
                --Выбрать пол--
              </option>
              <option value="man">Мужчина</option>
              <option value="woman">Женщина</option>
            </select>
            {/* Если при нажатии на кнопку не выборан пол, то выдает ошибку */}

            {/* Выбор возраста */}
            <h3>Возраст</h3>
            <form onSubmit={formSubmit}>
              <InputRange textInp={textInp} setTextInp={setTextInp} />
              <h3 className={style.age}>{textInp}</h3>
              <div className={style.forPeopleSvg}>
                <Persons ageNum={ageNum} />
              </div>

              <hr></hr>

              {/* Если пол выбран, то идет переход на другую страницу выбора подарка */}
              <Link
                style={{ textDecoration: "none" }}
                to={`/gifts/${textInp}/${textSelect}`}
                element={<GiftsPage />}
              >
                <button type="submit">Поехали</button>
              </Link>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
