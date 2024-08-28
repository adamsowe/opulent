import Image from "next/image";
import HeroHeader from "./components/heroHeader";

export default function Home() {
  return (
    <div>
      <HeroHeader />
      <h1>Opulent</h1>
      <div className="h-screen"></div>
    </div>
  );
}
