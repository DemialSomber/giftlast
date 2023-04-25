import baby from "./baby.svg";
import child from "./child.svg";
import teen from "./teen.svg";
import youngMan from "./youngMan.svg";
import man from "./man.svg";
import oldMan from "./oldMan.svg";
import veryOldMan from "./veryOldMan.svg";

function Persons({ ageNum }) {
  let n = 0;
  if (ageNum <= 3) {
    n = 3;
  } else if (ageNum > 3 && ageNum <= 13) {
    n = 13;
  } else if (ageNum > 13 && ageNum <= 18) {
    n = 18;
  } else if (ageNum > 18 && ageNum <= 30) {
    n = 30;
  } else if (ageNum > 30 && ageNum <= 50) {
    n = 50;
  } else if (ageNum > 50 && ageNum <= 75) {
    n = 75;
  } else if (ageNum > 75 && ageNum <= 100) {
    n = 100;
  }

  return (
    <>
      {n === 3 && <img src={baby} alt="baby" width={"50"} />}
      {n === 13 && <img src={child} alt="child" width={"50"} />}
      {n === 18 && <img src={teen} alt="teen" width={"55"} />}
      {n === 30 && <img src={youngMan} alt="youngMan" width={"80"} />}
      {n === 50 && <img src={man} alt="man" width={"75"} />}
      {n === 75 && <img src={oldMan} alt="oldMan" width={"100"} />}
      {n === 100 && <img src={veryOldMan} alt="veryOldMan" width={"100"} />}
    </>
  );
}

export default Persons;
