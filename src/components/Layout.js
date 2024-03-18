/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-html-link-for-pages */
'use client'
import Table from './Table'
import VideoPlayer from '@/components/VideoPlayer';

// import Video from '../../public/images/pnina.mp4'
export default function Main() {
  return (
    <div className="grotesk max-w-8xl mx-auto">
      <section className="w-full text-black ">
        <div className="max-w-8xl mx-auto inline-block items-center p-3 pt-0 lg:flex lg:flex-wrap lg:pt-4">
          <div className="lg:w-3/6">
            <h2 className="max-w-xl lg:text-[4.2em] text-3xl font-bold leading-none text-black inline-block">
              Donate for Pnina Basov
            </h2>

            <p className="mt-6 max-w-2xl text-xl font-semibold text-[#404040]">
              Pnina Basov, 18 years old, hockey player from Israel. Honored as MVP( most valuable player) 2022 of National Israeli Team.<br /> Studying and playing hockey in Canada for 3 years. Accepted to study and play in USA college for next 4 years but unfortunately run out of money and cannot afford it. <br />Please donate so she could not give up her dream and could make bigger contributions to the Israeli sport in future. Your donation is one more step to my big dream !            </p>
            <a
              className="bg-[#0e0e0e] rounded-md mt-6 inline-flex gap-3 items-center px-8 py-3 text-lg font-semibold tracking-tighter text-[#ffffff] mr-4 "
              href="https://donate.pnina.website/"
              target="_blank"
            >
              Donate via Card / Paypal
              <img src="https://www.edigitalagency.com.au/wp-content/uploads/PayPal-icon-white-png-vertical.png" className="h-5 w-5 border-[0px] border-[white] rounded-full" />
            </a>
            {/* <br/> */}
            <a
              className="bg-[#ffffff] rounded-md border-[1px] border-[black] mt-2 inline-flex items-center px-8 gap-3 py-3 text-lg font-semibold tracking-tighter text-black"
              href="https://pnina.mysellix.io/pay/a8fa30-e6b215d3ec-a10709"
            >
              Donate via Crypto
              <img src="https://cryptologos.cc/logos/ethereum-eth-logo.png" className="h-5 w-5  rounded-full" />


            </a>
            <a
              className="bg-[#ffffff] rounded-md border-[1px] border-[black] mt-2 inline-flex items-center px-8 gap-3 py-3 text-lg font-semibold tracking-tighter text-black"
              href="https://donatecrypto.pnina.website/"
            >
              Donate via Metamask
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/MetaMask_Fox.svg/1200px-MetaMask_Fox.svg.png" className="h-5 w-5  rounded-full" />


            </a>
          </div>
          

          <div className="mb-20 mt-44 hidden w-full flex-col lg:mt-12 lg:inline-block lg:w-3/6">
            <img src="https://files.eliteprospects.com/layout/players/pnina_basov_isr.jpg" alt="Hero" />
          </div>
          <div className="my-20 inline-block w-full flex-col lg:mt-0 lg:hidden lg:w-2/5">
            <img src="https://files.eliteprospects.com/layout/players/pnina_basov_isr.jpg" alt="image" />
          </div>
        </div>
        <div className="py-10 bg-white lg:mt-40">
          <div id="message" className="text-black">
            <div
              className="
              max-w-9xl
              mx-auto
              flex
              flex-col
              items-center
              justify-center
              px-5
            "
            >
              <div className="mr-0 mb-6 w-full py-4 text-center lg:w-2/3">
                <h2 className="mb-4 text-4xl font-bold sm:text-5xl">
                  Message
                </h2>
                {/* <p className="mb-4 text-lg leading-relaxed">
                  • National Israel Women Team
                  <br />
                  • #21 OHA Mavericks Gold U22 AA /
                </p>
                <a href="https://www.eliteprospects.com/team/38403/oha-mavericks-gold-u22-aa" className="font-semibold">
                  know more
                </a> */}
              </div>
              {/* <img
                className="lg:w-5/7 mb-40 hidden w-5/6 rounded object-cover object-center lg:inline-block  lg:w-4/6"
                src="https://womenshockeylife.com/wp-content/uploads/2022/09/Pnina-Basov-with-Abigali-Fuzaylov.jpg"
                alt="img"
              />

              <img
                className="mb-24 inline-block w-5/6 rounded object-cover object-center lg:hidden lg:w-4/6"
                src="https://womenshockeylife.com/wp-content/uploads/2022/09/Pnina-Basov-with-Abigali-Fuzaylov.jpg"
                alt="img"
              /> */}
              
              <VideoPlayer/>
            </div>
          </div>
        </div>
        <div id="profile" className="mx-auto px-5 pt-8 pb-8 lg:px-24">
          <div className="my-3 flex w-full flex-col text-left lg:text-center">
            <h2 className="bold mb-8 text-4xl font-bold leading-tight text-black lg:text-6xl">
              Profile{" "}
              <br className="hidden lg:inline-block" />
              {/* consectetur adipiscing elit. */}
            </h2>
          </div>
          <div className="flex w-full justify-center text-left lg:text-center">
            <Table />
          </div>
          <div className="flex w-full flex-row justify-center pt-4 text-center">
            <a
              href="https://www.eliteprospects.com/player/909011/pnina-basov"
              className="underline- px-8 text-xl font-semibold text-black-900"
            >
              View Full Profile
            </a>

          </div>
        </div>
        <div className=" mx-auto flex justify-center max-w-6xl p-3 pb-8 lg:visible lg:px-2">
          <img src="https://womenshockeylife.com/wp-content/uploads/2022/09/Pnina-Basov-with-Team-Israel-and-Samara-Lewis.jpg" alt="img" />
        </div>
        <div id="article" className="bg-white text-black mb-10 pb-6">
          <div className="mx-auto flex flex-col items-center px-5 pt-8 lg:flex-row">
            <div className="mb-16 flex flex-col text-left lg:mb-0 lg:w-1/2 lg:flex-grow lg:items-start lg:pr-16 lg:pr-6">
              <h2 className="mb-4 text-4xl font-bold leading-none sm:text-5xl">
                Pnina Basov a shining star for women’s ice hockey in Israel
              </h2>
              <p className="font-3xl mb-8 font-semibold leading-relaxed">
                Playing for host country Israel at the Maccabiah Games, feelings of history and achievement encompassed a thrilling experience for center Pnina Basov. Wearing the number 13, the 16 year old forward brought a youthful exuberance and tremendous enthusiasm to the team, definitely a building block for the program’s future.

                Prior to the Maccabiah Games, Basov actually possessed the experience of international hockey on her promising resume. Skating for Team Israel at the 2022 IIHF Women’s World Championships, Group III, Division B in Serbia, the event marked a significant milestone for Basov and teammates alike. In addition to Israel, the team’s  from Bosnia-Herzegovina and host Serbia enjoyed their IIHF debuts.{" "}
              </p>
              <div>
                <a
                  className="bg-black rounded-md mt-2 inline-flex items-center px-8 py-2 text-lg font-semibold tracking-tighter text-white"
                  href="https://womenshockeylife.com/pnina-basov-a-shining-star-for-womens-ice-hockey-in-israel/"
                >
                  Read more...
                </a>
              </div>
            </div>
            <div className="lg:w-full lg:max-w-2xl">
              <img src="https://womenshockeylife.com/wp-content/uploads/2022/09/Pnina-Basov-Team-Israel.jpg" alt="img" />
            </div>
          </div>
          {/* <div className="mt-32">
            <div className="mx-auto flex flex-col px-5 py-24 text-left lg:flex-row">
              <div className="hidden lg:inline-block lg:w-full lg:max-w-xl">
                <img src="/images/placeholder.png" alt="img" />
              </div>
              <div className="flex flex-col pt-0 text-left lg:w-1/2 lg:flex-grow lg:items-start lg:pl-16 lg:pl-24 lg:pt-24">
                <h2 className="mb-4 text-4xl font-bold leading-none sm:text-5xl">
                  Article 2
                </h2>
                <p className="mb-8 font-semibold leading-relaxed text-black">
                  Lorem ipsum ac neque, consectetur adipiscing elit. Nibh neque,
                  ut purus donec sed donec semper ac vestibulum. Mi urna,
                  facilisis arcu, auctor elit. Ut nunc non aenean netus ut.
                </p>
                <a
              className="bg-blue mt-2 inline-flex items-center px-8 py-3 text-lg font-semibold tracking-tighter text-white"
              href="/"
            >
              Read more
            </a>
              </div>
              <div className="inline-block lg:hidden lg:w-full lg:max-w-xl">
                <img src="/images/placeholder.png" alt="img" />
              </div>
            </div>
          </div> */}

          {/* <div className="mx-auto">
            <div className="max-w-8xl mx-auto px-5 py-24 lg:px-24">
              <div className="my-6 flex w-full flex-col text-left lg:text-center">
                <h3 className="mb-8 text-5xl font-bold text-black">
                  Profile
                </h3>
                <h3 className="mb-12 px-0 text-lg font-semibold text-gray-900 lg:px-52">
                  Lorem ipsum accumsan arcu, consectetur adipiscing elit.
                  Aliquet vestibulum molestie amet, maecenas id amet. Ipsum
                  accumsan arcu, aenean viverra penatibus quis. Laoreet.
                </h3>
              </div>
              <img src="/images/placeholder.png" alt="img" />
            </div>
          </div> */}
          {/* <div className="text-black">
            <div className="max-w-8xl mx-auto flex flex-col px-5 py-48 text-black lg:flex-row">
              <div className="lg:mb-0 lg:w-full lg:max-w-xl">
                <img
                  className="rounded object-cover object-center"
                  alt="image"
                  src="/images/placeholder1.png"
                />
              </div>
              <div className="items-left flex flex-col pt-16 text-left lg:w-1/2 lg:flex-grow lg:items-start lg:pl-32 lg:pl-48 lg:text-left">
                <h2 className="mb-2 text-lg leading-tight text-gray-700 sm:text-lg">
                  Viverra enim diam gravida risus nisl.
                </h2>
                <h2 className="mb-6 text-lg font-bold sm:text-lg">
                  Lectus eu.
                </h2>
                <h2 className="mb-4 text-3xl font-bold sm:text-3xl">
                  Lorem ipsum accumsan arcu, consectetur adipiscing elit. Sed
                  eget enim vel.
                </h2>
                <a
                  href="/"
                  className="underline-blue mt-12 text-lg font-bold leading-relaxed"
                >
                  Ut convallis massa.
                </a>
              </div>
            </div>
          </div> */}
        </div>
      </section>
    </div>
  );
}
