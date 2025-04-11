import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <>
      <div className="bg-[url('/background.svg')] bg-repeat bg-contain w-full h-90 fill-white flex justify-center items-center flex-col my-20 gap-3">
        <h1 className="m-2 text-7xl font-extrabold text-yellow-400 text-center max-[780px]:text-6xl max-[650px]:text-5xl max-[530px]:text-4xl max-[400px]:text-3xl">Build stronger digital connections</h1>
        <p className="w-[50%] m-2 text-2xl text-center max-[670px]:text-[1rem] max-[370px]:hidden">Use our URL shortener to engage your audience and connect them to the right information. Shorten every URL everything inside this Platform.</p>
        <Link href="/shorten" className="bg-yellow-400 py-3 px-8 text-black font-bold rounded-4xl hover:bg-yellow-600 ">Try Now</Link>
      </div>
    </>
  );
}
