import { useState } from "react"; 
import { brainwaveSymbol, check } from "../assets";
import { collabApps, collabContent } from "../constants";
import Button from "./Button";
import Section from "./Section";
import { LeftCurve, RightCurve } from "./design/Collaboration";

const Collaboration = () => {
  // State to track which items are expanded
  const [expandedItems, setExpandedItems] = useState({});

  // Toggle function for expanding/collapsing an item
  const toggleExpand = (id) => {
    setExpandedItems((prev) => ({
      ...prev,
      [id]: !prev[id], // Toggle the expanded state for the clicked item
    }));
  };

  return (
    <Section crosses>
      <div className="container lg:flex">
        <div className="max-w-[25rem]">
          <h2 className="h2 mb-4 md:mb-8 text-yellow-300">Smart Solar Grid Management</h2>

          <ul className="max-w-[22rem] mb-10 md:mb-14">
            {collabContent.map((item) => (
              <li 
                className="mb-3 py-3 cursor-pointer transform transition-transform duration-200 hover:scale-105 hover:shadow-[0px_0px_20px_5px_rgba(255,165,0,0.25),_0px_0px_10px_2px_rgba(255,140,0,0.25)] rounded-md"
                key={item.id}
                onClick={() => toggleExpand(item.id)}
              >
                <div className="flex items-center">
                  <img
                    src={check}
                    width={24}
                    height={24}
                    alt="check"
                    className="ml-2 transition-transform duration-200"
                  />
                  <h6 className="body-2 ml-5 px-5 transition-transform duration-200">
                    {item.title}
                  </h6>
                </div>
                {expandedItems[item.id] && item.text && (
                  <p className="p-2 body-2 mt-3 text-n-4">{item.text}</p>
                )}
              </li>
            ))}
          </ul>

          <Button href="/loginpage">Try it now</Button>
        </div>

        <div className="lg:ml-auto xl:w-[38rem] mt-20">
          <div className="relative left-1/2 flex w-[22rem] aspect-square border border-n-6 rounded-full -translate-x-1/2 scale:75 md:scale-100">
            <div className="flex w-60 aspect-square m-auto border border-n-6 rounded-full">
              <div className="w-[6rem] aspect-square m-auto p-[0.2rem] bg-conic-gradient rounded-full">
                <div className="flex items-center justify-center w-full h-full bg-n-8 rounded-full">
                  <img
                    src={brainwaveSymbol}
                    width={48}
                    height={48}
                    alt="brainwave"
                  />
                </div>
              </div>
            </div>

            <ul>
              {collabApps.map((app, index) => (
                <li
                  key={app.id}
                  className={`absolute top-0 left-1/2 h-1/2 -ml-[1.6rem] origin-bottom rotate-${
                    index * 45
                  }`}
                >
                  <div
                    className={`relative -top-[1.6rem] flex w-[3.2rem] h-[3.2rem] bg-n-7 border border-n-1/15 rounded-xl -rotate-${
                      index * 45
                    }`}
                  >
                    <img
                      className="m-auto"
                      width={app.width}
                      height={app.height}
                      alt={app.title}
                      src={app.icon}
                    />
                  </div>
                </li>
              ))}
            </ul>

            <LeftCurve />
            <RightCurve />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Collaboration; 
