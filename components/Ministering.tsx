import Image from "next/image";

function Ministering() {
  return (
    <>
      <div className="w-[1200px] mx-auto py-20 grid grid-cols-3 gap-6">
        <div className="h-[500px]">
          <Image
            src="/assets/kumuyi.webp"
            alt="pastor kumuyi"
            width={1000}
            height={1000}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="col-span-2 flex flex-col flex-start gap-4">
          <p className="bg-orange-500 text-white p-1 w-fit">Ministering</p>
          <h1 className="text-[80px] font-bold leading-none ">
            Pastor William <br />
            F. Kumuyi
          </h1>
          <p>
            William Folorunso Kumuyi listen is the convener of Global Crusade
            with Kumuyi, and the founder and General Superintendent of the
            Deeper Christian Life Ministry situated at Gbagada, Lagos, Nigeria.
            He is the author of several Christian books and devotionals.
          </p>
        </div>
      </div>
    </>
  );
}

export default Ministering;
