import Image from "next/image";
import Button from "./Button";

function Herosection() {
  return (
    <>
      <div className="w-full h-[100vh]">
        <div className=" bg-gradient-to-b from-black/0 to-black absolute top-0 left-0 z-10 right-0 bottom-0"></div>
        <Image
          src="/assets/hero.png"
          alt="Hero Section"
          width={1000}
          height={1000}
          className="w-full h-full object-cover"
        />
        <div className="w-full absolute top-0 left-0 z-10 right-0 bottom-0">
          <div className="w-full h-full flex flex-col items-center justify-center gap-2">
            <div className="bg-white/10 px-3 py-2 rounded-full flex gap-2 items-center">
              <div className="bg-white/10 px-3 py-2 rounded-full flex gap-2 items-center">
                <p className="text-white text-sm "> Don't miss it 🎉</p>
              </div>
              <p className="text-white text-sm">
                {" "}
                a christian conference set apart for warriors
              </p>
            </div>
            <div className="flex items-center flex-col ">
              <h1 className="text-4xl font-bold text-white text-[200px] leading-none tracking-tighter">
                Winning In
              </h1>
              <h1 className="text-4xl font-bold  text-orange-600 font-extrabold uppercase text-[200px] leading-none tracking-tighter">
                Warfares
              </h1>
            </div>
            <p className="text-lg text-white w-1/2 text-center">
              A prophetic and deliverance conference for the nation of Nigeria.
              Come and discover the weapons God has given believers to overcome
              every battle and walk in victory!
            </p>

            <div className="flex items-center gap-4">
              <Button href="/register" text="Register Now" type="outline" />
              <Button
                href="/order-of-service"
                text="Order Of Service"
                type="fill"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Herosection;
