import React from "react";
const Navbar = ({ FilterItems, menuList }) => {
  return (
    <>
      <nav className="navbar">
        <div className="btn-group">
          {menuList.map((curElem) => {
            return (
              <button
                className="btn-group__item"
                onClick={() => FilterItems(curElem)}
              >
                {curElem}
              </button>
            );
          })}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
