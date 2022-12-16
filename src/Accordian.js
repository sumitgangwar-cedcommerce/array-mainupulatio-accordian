import React, { useState } from "react";

const Accordian = ({ data}) => {
  const [cardVisible, setCardVisible] = useState(data.isVisible);
  return (
    <div className="accordian">
      <div className="accordian--title" onClick={() => {
            setCardVisible((prev) => !prev);
            data.isVisible = !data.isVisible;
          }}>
        <h2 className={cardVisible ? "accordian--active" : null}>
          {data.name}
        </h2>
        <button
          
        >
          {cardVisible ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#2c127a"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <polyline points="18 15 12 9 6 15"></polyline>
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#3b424f"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          )}
        </button>
      </div>
      {cardVisible && (
        <div className="accordian--card">
          <ul>
            <li> <b> Name :</b> {data.name}</li>
            <li> <b> Age :</b> {data.age}</li>
            <li> <b> Address :</b> {data.address}</li>
            <li> <b> Children Count :</b> {data.children ? data.children.length : 0}</li>
          </ul>
          {data.children &&
            data.children.map((item) => (
              <Accordian data={item} />
            ))}
        </div>
      )}
    </div>
  );
};

export default Accordian;
