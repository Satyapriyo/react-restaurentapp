import React, { useState } from "react";
import "./style.css";
import Menu from "./MenuApi.js";
import MenuCard from "./MenuCard";
import Navbar from "./Navbar";

const uniqueList = [
  ...new Set(
    Menu.map((curElem) => {
      return curElem.category;
    })
  ),
  "All",
];
const Restaurent = () => {
  // useStateHooks 😋😋😋😋
  const [menuList, setMenuList] = useState(uniqueList);
  const [menuData, setMenuData] = useState(Menu);
  const FilterItems = (category) => {
    if (category === "All") {
      setMenuData(Menu);
      return;
    }

    const updatedList = Menu.filter((curElem) => {
      return curElem.category === category;
    });
    setMenuData(updatedList);
  };
  return (
    <>
      <Navbar FilterItems={FilterItems} menuList={menuList} />
      <MenuCard menuData={menuData} />
    </>
  );
};
export default Restaurent;
