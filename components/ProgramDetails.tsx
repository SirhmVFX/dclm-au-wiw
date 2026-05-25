import Image from "next/image";

function ProgramDetails() {
  return (
    <>
      <div className="">
        <div className="w-full h-[600px]">
          <Image
            src="/assets/worship.jpg"
            alt="worship"
            width={1000}
            height={1000}
            className="w-full h-full object-cover "
          />
        </div>
        <div className="w-[1200px] mx-auto py-20 ">
          <h1 className="text-[100px] leading-none font-bold">
            Program <br /> Details
          </h1>

          <div className="grid grid-cols-4 py-10 gap-10">
            <div className="flex flex-col gap-4">
              <p className="bg-orange-500 text-white p-1 w-fit">Date</p>
              <h1 className="text-[40px] font-bold leading-none">
                July 2-5, 2026
              </h1>
              <p>Thursday n Sunday</p>
            </div>

            <div className="flex flex-col gap-4">
              <p className="bg-orange-500 text-white p-1 w-fit">Time</p>
              <h1 className="text-[20px] font-bold ">
                Thu: 5PM <br />
                Fri & Sat: 8AM-8PM <br />
                Sun: 8AM-1PM
              </h1>
            </div>

            <div className="flex flex-col gap-4">
              <p className="bg-orange-500 text-white p-1 w-fit">Venue</p>
              <h1 className="text-[30px] font-bold leading-none">
                Deeper Life Bible Church Auditorium
              </h1>
              <p>49-51 Cameron Street, Cranbourne</p>
            </div>

            <div className="flex flex-col gap-4">
              <p className="bg-orange-500 text-white p-1 w-fit">Featuring</p>
              <h1 className="text-[30px] font-bold leading-none">
                Deeper Life Choir & Vibrant Worship
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProgramDetails;
