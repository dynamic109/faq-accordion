import React, { useState } from "react";
import { ReactComponent as HideIcon } from "../images/icon-minus.svg";
import { ReactComponent as RevealIcon } from "../images/icon-plus.svg";

function Faq({ faqData }) {
  const [activeId, setActiveId] = useState(null);

  function handleClick(event) {
    const clickedId = event.currentTarget.id;
    setActiveId((prevId) => (prevId === clickedId ? null : clickedId));
  }

  const FAQ = faqData.map((data, index) => {
    const isActive = activeId === `icon-${data.id}`;
    const isLastItem = index === faqData.length - 1;

    return (
      <div key={data.id}>
        <div className="flex justify-between items-center mb-5">
          <h3 className="w-4/5 font-bold">{data.question}</h3>
          {isActive ? (
            <HideIcon
              className="transition-transform delay-300 duration-300 transform rotate-180"
              onClick={handleClick}
              alt="hide answer button"
              id={`icon-${data.id}`}
            />
          ) : (
            <RevealIcon
              className="transition-transform duration-300 transform rotate-0"
              onClick={handleClick}
              alt="reveal answer button"
              id={`icon-${data.id}`}
            />
          )}
        </div>
        <div
          className={`overflow-hidden transition-all duration-500 ease-in-out ${
            isActive ? "max-h-[220px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <p className="text-gray-400 mb-10 w-4/5">{data.answer}</p>
        </div>

        {!isLastItem && <hr className="mb-5 " />}
      </div>
    );
  });

  return <div>{FAQ}</div>;
}

export default Faq;
