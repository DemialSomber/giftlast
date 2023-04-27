import style from "../styles/pagesSt/special.module.css";
import { Link } from "react-router-dom";
import images from "../../photos/GiftPhotos";
function Special() {
  function randPrice() {
    return Math.floor(Math.random() * (1000 - 0) + 0);
  }
  const arrayBox = [
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
    {
      name: "Планшетный компьютер",
      alt: "Планшет",
      img: images.tablet,
      price: randPrice(),
      dataF: "tablet",
      classOfFilter: ["all", "9may", "easter"],
      sexOfFilter: ["man", "woman"],
    },
    {
      name: "Велосипед",
      alt: "Велосипед",
      img: images.bike,
      price: randPrice(),
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
      price: randPrice(),
      dataF: "cristmasTree",
      classOfFilter: ["all", "cristmas", "birthday", "23febr", "14febr"],
      sexOfFilter: ["man", "woman"],
    },
    {
      name: "Ремень",
      alt: "Ремень",
      img: images.belt,
      price: randPrice(),
      dataF: "belt",
      classOfFilter: ["all", "newYear", "cristmas"],
      sexOfFilter: ["man", "woman"],
    },
    {
      name: "Галстук",
      alt: "Галстук",
      img: images.tie,
      price: randPrice(),
      dataF: "tie",
      classOfFilter: ["all", "newYear", "cristmas"],
      sexOfFilter: ["man", "woman"],
    },
    {
      name: "Зонт",
      alt: "Зонт",
      img: images.umbrella,
      price: randPrice(),
      dataF: "umbrella",
      classOfFilter: ["all", "newYear", "easter"],
      sexOfFilter: ["man", "woman"],
    },
    {
      name: "Часы",
      alt: "Часы",
      img: images.watch,
      price: randPrice(),
      dataF: "watch",
      classOfFilter: ["all", "8marth", "anniversary", "9may", "easter"],
      sexOfFilter: ["man", "woman"],
    },
    {
      name: "Сумка из крокодила",
      alt: "Сумка из крокодила",
      img: images.bag,
      price: randPrice(),
      dataF: "bag",
      classOfFilter: ["all", "newYear", "cristmas", "birthday"],
      sexOfFilter: ["man", "woman"],
    },
    {
      name: "Камера",
      alt: "Камера",
      img: images.camera,
      price: randPrice(),
      dataF: "camera",
      classOfFilter: ["all", "newYear", "cristmas", "birthday"],
      sexOfFilter: ["man", "woman"],
    },
    {
      name: "Игра для консоли",
      alt: "Игра для консоли",
      img: images.gameOfConsole,
      price: randPrice(),
      dataF: "gameOfConsole",
      classOfFilter: ["all", "newYear", "cristmas", "birthday"],
      sexOfFilter: ["man", "woman"],
    },
    {
      name: "VR очки",
      alt: "VR очки",
      img: images.vrGlasses,
      price: randPrice(),
      dataF: "vrGlasses",
      classOfFilter: ["all", "newYear", "cristmas", "birthday"],
      sexOfFilter: ["man", "woman"],
    },
    {
      name: "Картина по номерам",
      alt: "Картина по номерам",
      img: images.paintingByNumber,
      price: randPrice(),
      dataF: "paintingByNumber",
      classOfFilter: ["all", "newYear", "cristmas", "birthday"],
      sexOfFilter: ["man", "woman"],
    },
    {
      name: "Умная колонка",
      alt: "Умная колонка",
      img: images.smartSpeaker,
      price: randPrice(),
      dataF: "smartSpeaker",
      classOfFilter: ["all", "newYear", "cristmas", "birthday"],
      sexOfFilter: ["man", "woman"],
    },
    {
      name: "Power Bank",
      alt: "Power Bank",
      img: images.powerBank,
      price: randPrice(),
      dataF: "powerBank",
      classOfFilter: ["all", "newYear", "cristmas", "birthday"],
      sexOfFilter: ["man", "woman"],
    },
    {
      name: "Биокамин",
      alt: "Биокамин",
      img: images.biofireplace,
      price: randPrice(),
      dataF: "biofireplace",
      classOfFilter: ["all", "newYear", "cristmas", "birthday"],
      sexOfFilter: ["man", "woman"],
    },
    {
      name: "Генетический тест",
      alt: "Генетический тест",
      img: images.geneticTest,
      price: randPrice(),
      dataF: "geneticTest",
      classOfFilter: ["all", "newYear", "cristmas", "birthday"],
      sexOfFilter: ["man", "woman"],
    },
    {
      name: "Холодильник для вина",
      alt: "Холодильник для вина",
      img: images.refrigeratorForVine,
      price: randPrice(),
      dataF: "refrigeratorForVine",
      classOfFilter: ["all", "newYear", "cristmas", "birthday"],
      sexOfFilter: ["man", "woman"],
    },

    {
      name: "Пылесос для мытья окон",
      alt: "Пылесос для мытья окон",
      img: images.vacuumCleanerForWindow,
      price: randPrice(),
      dataF: "vacuumCleanerForWindow",
      classOfFilter: ["all", "newYear", "cristmas", "birthday"],
      sexOfFilter: ["man", "woman"],
    },
    {
      name: "Акваферма",
      alt: "Акваферма",
      img: images.aquaFarm,
      price: randPrice(),
      dataF: "aquaFarm",
      classOfFilter: ["all", "newYear", "cristmas", "birthday"],
      sexOfFilter: ["man", "woman"],
    },
    {
      name: "Квадракоптер",
      alt: "Квадракоптер",
      img: images.quadcoper,
      price: randPrice(),
      dataF: "quadcoper",
      classOfFilter: ["all", "newYear", "cristmas", "birthday"],
      sexOfFilter: ["man", "woman"],
    },
    {
      name: "Домашняя пивоварня",
      alt: "Домашняя пивоварня",
      img: images.homeBrewery,
      price: randPrice(),
      dataF: "homeBrewery",
      classOfFilter: ["all", "newYear", "cristmas", "birthday"],
      sexOfFilter: ["man", "woman"],
    },
  ];
  function randIndex() {
    return Math.floor(Math.random() * (13 - 0) + 0);
  }
  let arr2 = [];
  for (let i = 0; i < 8; i++) {
    let r = randIndex();
    if (arr2.includes(arrayBox[r]) === false) {
      arr2[i] = arrayBox[r];
    } else i--;
  }

  console.log(arr2);
  return (
    <>
      <h2 className={style.h2Title}>
        Тут вы найдете подборку специальных предложений
      </h2>
      <div className={style.giftsBox}>
        {arr2.map((box) => {
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
      </div>
    </>
  );
}

export default Special;
