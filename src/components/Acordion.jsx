import { createContext, useContext, useRef, useEffect, useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import data from "../data.json";
import { getImageUrl } from "../utils/image-ult";
import { Link } from "react-router-dom";

const AccordianContext = createContext();

export default function Accordian({ children, value, onChange, ...props }) {
  const [selected, setSelected] = useState(value);

  useEffect(() => {
    onChange?.(selected);
  }, [selected]);

  return (
    <ul {...props}>
      <AccordianContext.Provider value={{ selected, setSelected }}>
        {children}
      </AccordianContext.Provider>
    </ul>
  );
}

export function AccordianItem({ value, category, ...props }) {
  const { selected, setSelected } = useContext(AccordianContext);
  const open = selected === value;

  const ref = useRef(null);

  return (
    <li className="my-4 font-inter  " {...props}>
      <header
        role="button"
        onClick={() => setSelected(open ? null : value)}
        className="flex justify-between text-primary-color bg-secondary-color items-center p-4 "
      >
        {category}
        <FaChevronDown
          size={16}
          className={`transition-transform ${open ? "rotate-180" : ""}`}
        />
      </header>
      <div
        className="overflow-y-hidden transition-all"
        style={{ height: open ? ref.current?.offsetHeight || 0 : 0 }}
      >
        <div
          className="flex flex-wrap justify-between gap-4 px-4 pt-4 bg-primary-color"
          ref={ref}
        >
          {data.map(
            (wine, index) =>
              wine.category === category && (
                <div key={index}>
                  <Link to={`wine/${wine.id}`}>
                    <img
                      className="w-32  h-64 object-contain"
                      src={getImageUrl(wine.image)}
                      alt={wine.name}
                    />
                  </Link>
                </div>
              )
          )}
        </div>
      </div>
    </li>
  );
}
