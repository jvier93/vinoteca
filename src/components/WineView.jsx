import { useParams } from "react-router-dom";
import data from "../data";
import { getImageUrl } from "../utils/image-ult";

const WineView = () => {
  const { wineId } = useParams();

  //wine id from react router is a string, so we need to convert it to a number
  const getWineById = (id) => data.find((wine) => wine.id == Number(id));

  const wine = getWineById(wineId);
  return (
    <div className="w-full font-inter py-6  p-4  bg-primary-color min-h-screen">
      <div className="flex items-center  justify-around  ">
        <div className="h-56  text-sm font-semibold text-primary-color flex flex-col items-center justify-center gap-4 rounded-tl-full rounded-b-full w-24  bg-secondary-color">
          <div className="flex flex-col items-center">
            <p>Volumen</p>
            <p>{`${wine.volume} L`}</p>
          </div>
          <div className="flex flex-col items-center">
            <p>Alchool</p>
            <p>{`${wine.alchool} %`}</p>
          </div>
        </div>

        <img
          className="w-32  h-64 object-contain"
          src={getImageUrl(wine.image)}
          alt={wine.nombre}
        />
      </div>
      <div className="py-6">
        <h2 className="text-2xl text-secondary-color ">{wine.nombre}</h2>
        <p className="text-white font-inter font-thin text-sm mt-2 mb-6">
          {wine.description || "No hay descripción."}
        </p>
        <span className="text-2xl  text-secondary-color">{`$ ${wine.price}`}</span>
      </div>
    </div>
  );
};

export default WineView;
