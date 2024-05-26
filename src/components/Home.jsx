import Accordian, { AccordianItem } from "../components/Acordion";

function Home() {
  return (
    <div className="w-full h-screen  bg-primary-color">
      <div className="py-8  px-2 mx-auto max-w-[800px]">
        <h1 className="mb-8  text-white font-inter pl-4 text-2xl">Catálogo</h1>
        <Accordian>
          <AccordianItem value="1" category="Vinos"></AccordianItem>
          <AccordianItem value="2" category="Casco Viejo"></AccordianItem>
        </Accordian>
      </div>
    </div>
  );
}

export default Home;
