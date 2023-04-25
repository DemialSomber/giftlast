import style from "../components/styles/pagesSt/giftsPage.module.css";
import { Link } from "react-router-dom";
import images from "../photos/GiftPhotos";
function GiftListItems({ age, sex, filt }) {
  const arrayBox = [
    {
      name: "Планшетный компьютер",
      alt: "Планшет",
      img: images.tablet,
      price: "400р",
      dataF: "tablet",
      // classOfFilter: [
      //   "newYear",
      //   "cristmas",
      //   "birthday",
      //   "23febr",
      //   "14febr",
      //   "8marth",
      //   "anniversary",
      //   "9may",
      //   "easter",
      // ],
      classOfFilter: ["all", "9may", "easter"],
      sexOfFilter: ["man", "woman"],
    },
    {
      name: "Велосипед",
      alt: "Велосипед",
      img: images.bike,
      price: "600р",
      dataF: "bike",
      classOfFilter: [
        "all",
        "newYear",
        "cristmas",
        "birthday",
        "9may",
        "easter",
      ],
      sexOfFilter: ["man", "woman"],
    },
    {
      name: "Ёлка",
      alt: "Ёлка",
      img: images.cristmasTree,
      price: "60р",
      dataF: "cristmasTree",
      classOfFilter: ["all", "cristmas", "birthday", "23febr", "14febr"],
      sexOfFilter: ["man", "woman"],
    },
    {
      name: "Ремень",
      alt: "Ремень",
      img: images.belt,
      price: "400р",
      dataF: "belt",
      classOfFilter: ["all", "newYear", "cristmas"],
      sexOfFilter: ["man", "woman"],
    },
    {
      name: "Галстук",
      alt: "Галстук",
      img: images.tie,
      price: "400р",
      dataF: "tie",
      classOfFilter: ["all", "newYear", "cristmas"],
      sexOfFilter: ["man", "woman"],
    },
    {
      name: "Зонт",
      alt: "Зонт",
      img: images.umbrella,
      price: "400р",
      dataF: "umbrella",
      classOfFilter: ["all", "newYear", "easter"],
      sexOfFilter: ["man", "woman"],
    },
    {
      name: "Часы",
      alt: "Часы",
      img: images.watch,
      price: "400р",
      dataF: "watch",
      classOfFilter: ["all", "8marth", "anniversary", "9may", "easter"],
      sexOfFilter: ["man", "woman"],
    },
    {
      name: "Сумка из крокодила",
      alt: "Сумка из крокодила",
      img: images.bag,
      price: "400р",
      dataF: "bag",
      classOfFilter: ["all", "newYear", "cristmas", "birthday"],
      sexOfFilter: ["man", "woman"],
    },
  ];

  const filterGifts = arrayBox.filter((el) => {
    return el.classOfFilter.find((i) => filt.includes(i));
  });

  console.log(filt);

  return (
    <div className={style.giftsBox}>
      {sex === "woman" ? (
        <h2>Найдены подарки для женщины в возрасте {age} лет</h2>
      ) : (
        <h2>Найдены подарки для мужчины в возрасте {age} лет</h2>
      )}

      <ul className={style.flexGiftsBox}>
        {filterGifts.map((box) => {
          return (
            <Link className={style.oneFlexGiftsBox} key={box.dataF}>
              <li data-f={box.dataF}>
                <div className={style.boxForImage}>
                  <img
                    src={box.img}
                    alt={box.alt}
                    className={style.imageGifts}
                  />
                </div>
                <div>
                  <h3 className={style.textDescriptionH3}>{box.name}</h3>
                </div>
                <hr className={style.hrDescriptipn} />
                <div>
                  <h3 className={style.textDescriptionH3Price}>
                    Стоимость: от {box.price}
                  </h3>
                </div>
                <button>Подробнее</button>
              </li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
}

export default GiftListItems;
