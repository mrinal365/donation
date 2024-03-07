'use client'
export default function Header() {
  return (
    <>
      <div className="grotesk mt-0 mb-16 flex items-center justify-between py-4 px-4 sm:mx-0 sm:mb-20 sm:px-0 md:px-6 backdrop-blur-sm	 bg-black">
        <div className="mt-4 inline-block pb-4 pl-2 sm:pl-8">
          <a href="/" className="align-middle text-xl sm:text-3xl font-bold text-[#6C96C6]">
          Pnina Basov
          </a>
          <div className="hidden pl-14 align-middle xl:inline-block">
            <a href="/" className="pr-12 text-xl text-white">
              Home
            </a>
            <a href="#message" className="pr-12 text-xl text-white">
              Message
            </a>
            <a href="#profile" className="pr-12 text-xl text-white">
              Profile
            </a>
            <a href="#article" className="text-xl text-white">
              Articles
            </a>
          </div>
        </div>
        <div className="flex items-center">
          <div className=" py-1 text-right xl:inline-block">
            <a
              className="cursor-pointer bg-white mt-2 gap-3 inline-flex items-center px-4 py-2 sm:px-8 sm:py-3  text-md sm:text-lg font-semibold tracking-tighter text-black rounded-md"
              href="https://donate.pnina.website"
            >
              Donate
              <img src="https://files.eliteprospects.com/layout/flagsmedium/45.png" className="h-6 w-6"/>
            </a>
          </div>
        
        </div>
      </div>
    </>
  );
}
