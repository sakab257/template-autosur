import ServicesScroller from "@/components/home/services/ServicesScroller";
import AllServices from "./services/AllServices";


export default function ServicesSection() {
  

  return (
    <section id="services" className="relative bg-white pt-24 lg:pt-32">
      <ServicesScroller />
      <AllServices />
    </section>
  );
}