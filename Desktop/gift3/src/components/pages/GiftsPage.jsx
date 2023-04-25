import { useParams } from "react-router-dom";
import style from "../styles/pagesSt/giftsPage.module.css";

import GiftListItems from "../../data/GiftsListItems";
import { useState } from "react";

function GiftsPage() {
  const { age, sex } = useParams();
  const [sexChenge, setSexChenge] = useState(sex);
  const [ageChenge, setAgeChenge] = useState(age);
  const [filt, setFilt] = useState([]);
  if (filt.length === 0) setFilt(["all"]);

  console.log(sex);
  const arrayInput = [
    { id: "newYear", forTo: "newYear", name: "Новый год", check: false },
    { id: "cristmas", forTo: "cristmas", name: "Рождество", check: false },
    { id: "birthday", forTo: "birthday", name: "День рождения", check: false },
    { id: "23febr", forTo: "23febr", name: "23 февраля", check: false },
    { id: "14febr", forTo: "14febr", name: "14 февраля", check: false },
    { id: "8marth", forTo: "8marth", name: "8 марта", check: false },
    { id: "anniversary", forTo: "anniversary", name: "Юбилей", check: false },
    { id: "9may", forTo: "9may", name: "9 мая", check: false },
    { id: "easter", forTo: "easter", name: "Пасха", check: false },
  ];

  return (
    <>
      <div className={style.flex}>
        <div className={style.filterBox}>
          {/* Выбор праздника */}
          {arrayInput.map((inputAlone) => {
            return (
              <div key={inputAlone.id}>
                <input
                  id={inputAlone.id}
                  type="checkbox"
                  className={style.checkBox}
                  value={inputAlone.id}
                  onChange={() => {
                    //Проверка есть ли в списке фильтров нужная галочка
                    if (
                      document.getElementById(inputAlone.id).checked === true
                    ) {
                      if ([...filt].includes("all")) {
                        setFilt([...filt.splice(filt.indexOf("all"), 1)]);
                      }

                      setFilt([...filt, inputAlone.id]);
                    } else if (
                      document.getElementById(inputAlone.id).checked === false
                    ) {
                      setFilt((newFilt) =>
                        newFilt.filter((elOne) => {
                          // remove object that has id equal to 2
                          return elOne !== inputAlone.id;
                        })
                      );
                    }
                  }}
                />

                <label htmlFor={inputAlone.forTo}>{inputAlone.name}</label>
              </div>
            );
          })}

          {/* Выбор пола */}
          <hr className={style.hrBox}></hr>
          <h2 className={style.h2Box}>Пол</h2>
          <div className={style.radio}>
            <input
              className={style.customRadio}
              type="radio"
              id="man"
              name="sex"
              value="man"
              checked={sexChenge === "man"}
              onChange={() => {
                if (document.getElementById("man").checked === true) {
                  setSexChenge("man");
                }
              }}
            />

            <label htmlFor="man">Мужчина</label>
          </div>

          <div className={style.radio}>
            <input
              className={style.customRadio}
              type="radio"
              id="woman"
              name="sex"
              value="woman"
              checked={sexChenge === "woman"}
              onChange={() => {
                if (document.getElementById("woman").checked === true) {
                  setSexChenge("woman");
                }
              }}
            />
            <label htmlFor="woman">Женщина</label>
          </div>

          {/* Выбор возраста */}
          <hr className={style.hrBox}></hr>
          <h2 className={style.h2Box}>Возраст</h2>
          <div
            style={{
              display: "flex",
              width: "auto",
            }}
          >
            <input
              maxLength="3"
              pattern="[0-9]{,3}"
              type="text"
              className={style.ageInput}
              value={ageChenge}
              onChange={(e) => {
                setAgeChenge(e.target.value);
              }}
            />
          </div>
        </div>

        {/* Блок выбора подарка */}
        <GiftListItems age={ageChenge} sex={sexChenge} filt={filt} />
      </div>
    </>
  );
}

export default GiftsPage;
