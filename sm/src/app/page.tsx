import AboutSetion from "@/components/home/AboutSetion";
import Contract from "@/components/home/Contract";
import Hero from "@/components/home/Hero";
import PopularProducts from "@/components/home/PopularProducts";
import Whatwedo from "@/components/home/Whatwedo";

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutSetion />
      <Whatwedo />
      <PopularProducts />
      <Contract />
    </main>
  );
}
