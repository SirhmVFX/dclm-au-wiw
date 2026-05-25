import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

function Header() {
  return (
    <>
      <div className="w-full h-20 bg-black/10 flex items-center justify-between px-10 fixed top-0 left-0 z-50 backdrop-blur-sm">
        <div className="flex items-center justify-between gap-4 w-[1200px] mx-auto">
          <Image
            src="/assets/dlclogo.png"
            alt="Logo"
            width={100}
            height={100}
            className="w-20"
          />

          <div className="flex gap-4 items-center text-white">
            <Link href="/about">About</Link>
            <Link href="/order-of-service">Order of program</Link>
          </div>
          <div className="flex items-center gap-4">
            <Button href="/register" text="Register Now" type="fill" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
