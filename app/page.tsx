import Herosection from "@/components/Herosection";
import Ministering from "@/components/Ministering";
import ProgramDetails from "@/components/ProgramDetails";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Herosection />
      <Ministering />
      <ProgramDetails />
    </div>
  );
}
