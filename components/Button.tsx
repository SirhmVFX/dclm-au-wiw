import Link from "next/link";

function Button({
  href,
  text,
  type,
}: {
  href: string;
  text: string;
  type: string;
}) {
  return (
    <>
      <Link href={href}>
        <button
          className={`${type === "fill" ? "bg-orange-500 text-white" : "border-orange-500 border text-orange-500"}  px-6 font-bold py-3 rounded-full hover:bg-orange-600 transition-all duration-300 cursor-pointer`}
        >
          {text}
        </button>
      </Link>
    </>
  );
}

export default Button;
