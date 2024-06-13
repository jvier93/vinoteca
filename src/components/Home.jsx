import Accordian, { AccordianItem } from "../components/Acordion";

function Home() {
  return (
    <div className="w-full min-h-screen  bg-primary-color">
      <div className="py-8  px-2 mx-auto max-w-[800px]">
        <h1 className="mb-8  text-white font-inter pl-4 text-2xl">Catálogo</h1>
        <Accordian>
          <AccordianItem value="1" category="CASCO VIEJO"></AccordianItem>

          <AccordianItem value="2" category="VIÑA LAS BRUJAS"></AccordianItem>
          <AccordianItem
            value="3"
            category="100 AÑOS RESERVA FAMILIAR"
          ></AccordianItem>
          <AccordianItem
            value="4"
            category="GIMENEZ MENDEZ ALTA RESERVA"
          ></AccordianItem>

          <AccordianItem
            value="5"
            category="GIMENEZ MENDEZ RESERVAS ESPECIALES"
          ></AccordianItem>
        </Accordian>
      </div>
    </div>
  );
}

export default Home;
