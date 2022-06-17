import React from "react";
import "./style.css";
const MenuCard = ({ menuData }) => {
  return (
    <>
      <section className="main-card--cointainer">
        {menuData.map((curElem) => {
          const { id, name, description, category, image } = curElem;
          return (
            <>
              {" "}
              <div className="card-container" key={id}>
                <div className="card">
                  <div className="card-body">
                    <span className="card-number card-circle subtle">{id}</span>
                    <span className="card-author subtle">{category}</span>
                    <h2 className="card-title">{name}</h2>
                    <span className="card-description subtle">
                      {description}
                    </span>
                    <span className="card-read">Read</span>
                  </div>
                  <img src={image} alt="images" className="card-media" />
                  <span className="card-tag subtle">order now</span>
                </div>
              </div>
            </>
          );
        })}
      </section>
    </>
  );
};

export default MenuCard;
