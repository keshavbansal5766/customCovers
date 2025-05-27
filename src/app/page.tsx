import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-blue-500">
      <section>
        <MaxWidthWrapper className="pb-24 text-white pt-10 lg:grid lg:grid-cols-3 sm:pb-32 lg:gap-x-0 xl:gap-x-8 lg:pt-24 xl:pt-32 lg:pb-52">
          <div className="col-span-2 bg-yellow-300 px-6 lg:pt-4">
            <div className="relative bg-sky-400 mx-auto text-center lg:text-left flex flex-col items-center lg:items-start">
              <div className="absolute bg-pink-400 w-28 left-0 -top-20 hidden lg:block">
                <img src="/snake-1.png" alt="" />
                hii
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>
    </div>
  );
}
