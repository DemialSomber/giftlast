import { Link, Outlet } from "react-router-dom";
import Navigation from "../components/Navigation";
import Main from "../components/pages/Main";
import yourGift from "./YourGiftText.svg";
import { AiOutlineUnorderedList } from "react-icons/ai";
function MainLayout() {
  return (
    <>
      <AiOutlineUnorderedList className="icon" size="30px" />

      <div className="imageLogo">
        <Link to="." element={<Main />}>
          <img src={yourGift} alt="LOGO" width={"150"} />
        </Link>
      </div>
      <Navigation />

      <input className="search" onBlur={(e) => (e.target.value = "")}></input>
      <Outlet />
    </>
  );
}

export default MainLayout;
