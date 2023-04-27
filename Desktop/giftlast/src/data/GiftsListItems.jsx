import { Link } from "react-router-dom";
import style from "../components/styles/pagesSt/giftsPage.module.css";
import images from "../photos/GiftPhotos";

function GiftListItems({ age, sex, filt, filtSex, filtAge }) {
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
      sexOfFilter: ["man"],
      ageOfFilter: [28, 73],
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
      sexOfFilter: ["woman"],
      ageOfFilter: [29, 98],
    },
    {
      name: "Ёлка",
      alt: "Ёлка",
      img: images.cristmasTree,
      price: randPrice(),
      dataF: "cristmasTree",
      classOfFilter: ["all", "cristmas", "birthday", "23febr", "14febr"],
      sexOfFilter: ["man"],
      ageOfFilter: [32, 80],
    },
    {
      name: "Ремень",
      alt: "Ремень",
      img: images.belt,
      price: randPrice(),
      dataF: "belt",
      classOfFilter: ["all", "newYear"],
      sexOfFilter: ["man"],
      ageOfFilter: [17, 54],
    },
    {
      name: "Галстук",
      alt: "Галстук",
      img: images.tie,
      price: randPrice(),
      dataF: "tie",
      classOfFilter: ["all", "newYear", "cristmas"],
      sexOfFilter: ["woman"],
      ageOfFilter: [28, 93],
    },
    {
      name: "Зонт",
      alt: "Зонт",
      img: images.umbrella,
      price: randPrice(),
      dataF: "umbrella",
      classOfFilter: ["all", "newYear", "easter"],
      sexOfFilter: ["woman"],
      ageOfFilter: [14, 76],
    },
    {
      name: "Часы",
      alt: "Часы",
      img: images.watch,
      price: randPrice(),
      dataF: "watch",
      classOfFilter: ["all", "8marth", "anniversary", "9may", "easter"],
      sexOfFilter: ["man"],
      ageOfFilter: [36, 68],
    },
    {
      name: "Сумка из крокодила",
      alt: "Сумка из крокодила",
      img: images.bag,
      price: randPrice(),
      dataF: "bag",
      classOfFilter: ["all", "newYear", "cristmas", "birthday"],
      sexOfFilter: ["man"],
      ageOfFilter: [35, 94],
    },
    {
      name: "Камера",
      alt: "Камера",
      img: images.camera,
      price: randPrice(),
      dataF: "camera",
      classOfFilter: ["all", "newYear", "cristmas", "birthday"],
      sexOfFilter: ["man"],
      ageOfFilter: [25, 95],
    },
    {
      name: "Игра для консоли",
      alt: "Игра для консоли",
      img: images.gameOfConsole,
      price: randPrice(),
      dataF: "gameOfConsole",
      classOfFilter: ["all", "newYear", "cristmas", "birthday"],
      sexOfFilter: ["woman"],
      ageOfFilter: [49, 56],
    },
    {
      name: "VR очки",
      alt: "VR очки",
      img: images.vrGlasses,
      price: randPrice(),
      dataF: "vrGlasses",
      classOfFilter: ["all", "newYear", "cristmas"],
      sexOfFilter: ["man"],
      ageOfFilter: [40, 96],
    },
    {
      name: "Картина по номерам",
      alt: "Картина по номерам",
      img: images.paintingByNumber,
      price: randPrice(),
      dataF: "paintingByNumber",
      classOfFilter: ["all", "cristmas", "birthday"],
      sexOfFilter: ["man"],
      ageOfFilter: [7, 73],
    },
    {
      name: "Умная колонка",
      alt: "Умная колонка",
      img: images.smartSpeaker,
      price: randPrice(),
      dataF: "smartSpeaker",
      classOfFilter: ["all", "newYear", "birthday"],
      sexOfFilter: ["woman"],
      ageOfFilter: [21, 58],
    },
    {
      name: "Power Bank",
      alt: "Power Bank",
      img: images.powerBank,
      price: randPrice(),
      dataF: "powerBank",
      classOfFilter: ["all", "newYear", "cristmas"],
      sexOfFilter: ["man"],
      ageOfFilter: [3, 56],
    },
    {
      name: "Биокамин",
      alt: "Биокамин",
      img: images.biofireplace,
      price: randPrice(),
      dataF: "biofireplace",
      classOfFilter: ["all", "newYear", "cristmas", "birthday"],
      sexOfFilter: ["woman"],
      ageOfFilter: [2, 100],
    },
    {
      name: "Генетический тест",
      alt: "Генетический тест",
      img: images.geneticTest,
      price: randPrice(),
      dataF: "geneticTest",
      classOfFilter: ["all", "newYear", "cristmas", "birthday"],
      sexOfFilter: ["man"],
      ageOfFilter: [39, 58],
    },
    {
      name: "Холодильник для вина",
      alt: "Холодильник для вина",
      img: images.refrigeratorForVine,
      price: randPrice(),
      dataF: "refrigeratorForVine",
      classOfFilter: ["all", "newYear", "cristmas", "birthday"],
      sexOfFilter: ["woman"],
      ageOfFilter: [5, 67],
    },

    {
      name: "Пылесос для мытья окон",
      alt: "Пылесос для мытья окон",
      img: images.vacuumCleanerForWindow,
      price: randPrice(),
      dataF: "vacuumCleanerForWindow",
      classOfFilter: ["all", "newYear", "cristmas", "birthday"],
      sexOfFilter: ["woman"],
      ageOfFilter: [31, 87],
    },
    {
      name: "Акваферма",
      alt: "Акваферма",
      img: images.aquaFarm,
      price: randPrice(),
      dataF: "aquaFarm",
      classOfFilter: ["all", "newYear", "cristmas", "birthday"],
      sexOfFilter: ["man"],
      ageOfFilter: [43, 88],
    },
    {
      name: "Квадракоптер",
      alt: "Квадракоптер",
      img: images.quadcoper,
      price: randPrice(),
      dataF: "quadcoper",
      classOfFilter: ["all", "newYear", "birthday"],
      sexOfFilter: ["woman"],
      ageOfFilter: [37, 83],
    },
    {
      name: "Домашняя пивоварня",
      alt: "Домашняя пивоварня",
      img: images.homeBrewery,
      price: randPrice(),
      dataF: "homeBrewery",
      classOfFilter: ["all", "newYear", "birthday"],
      sexOfFilter: ["man"],
      ageOfFilter: [33, 96],
    },
  ];

  const filterGifts = arrayBox.filter((el) => {
    return el.classOfFilter.find((i) => {
      return filt.includes(i);
    });
  });
  const filterGiftsSex = arrayBox.filter((el) => {
    return el.sexOfFilter.find((i) => {
      return filtSex.includes(i);
    });
  });

  const filterSex = filterGifts.filter((i) => {
    return filterGiftsSex.includes(i);
  });

  let ageArr = [];
  function filterGiftsAge() {
    arrayBox.filter((el) => {
      if (
        filtAge <= el.ageOfFilter[1] && filtAge >= el.ageOfFilter[0]
          ? true
          : false
      ) {
        ageArr.push(el);
      }
      return ageArr;
    });
  }
  filterGiftsAge();

  const filtNew2 = filterSex.filter((i) => {
    return ageArr.includes(i);
  });
  console.log(filterSex);
  console.log(ageArr);
  console.log(filtNew2);
  return (
    <div className={style.giftsBox}>
      {sex === "woman" ? (
        <h2>Найдены подарки для женщины в возрасте {age} лет</h2>
      ) : (
        <h2>Найдены подарки для мужчины в возрасте {age} лет</h2>
      )}

      <ul className={style.flexGiftsBox}>
        {filtNew2.map((box) => {
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
                    Стоимость: от {box.price} б.р.
                  </h3>
                </div>
                {/* <button>Подробнее</button> */}
              </li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
}

export default GiftListItems;
