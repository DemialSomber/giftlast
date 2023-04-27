import style from "../styles/pagesSt/contact.module.css";
function Contacts() {
  return (
    <>
      <h2 className={style.h2Con}>Наши контакты</h2>
      <div className={style.boxText}>
        <p className={style.text}>
          <p style={{ color: "red", display: "inline" }}>Email</p>:
          dark.arrow2016@yandex.ru
        </p>
      </div>
      <div className={style.boxText}>
        <p className={style.text}>
          <p style={{ color: "red", display: "inline" }}>Телефон</p>:
          +375(29)ххх-хх-хх
        </p>
      </div>
      <div className={style.boxText}>
        <p className={style.text}>
          <p style={{ color: "red", display: "inline" }}>Адрес</p>: г.Могилев,
          ул.Пионерская 666
        </p>
      </div>
    </>
  );
}

export default Contacts;
