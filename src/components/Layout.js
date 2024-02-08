/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-html-link-for-pages */

export default function Main() {
  return (
    <div className="grotesk max-w-8xl mx-auto">
      <section className="w-full text-black">
        <div className="max-w-8xl mx-auto inline-block items-center p-3 pt-0 lg:flex lg:flex-wrap lg:pt-4">
          <div className="lg:w-3/6">
            <h2 className="max-w-xl lg:text-[4.2em] text-3xl font-bold leading-none text-black inline-block">
              Donate for Pnina Basov
            </h2>

            <p className="mt-6 max-w-2xl text-xl font-semibold text-[#404040]">
               Pnina Basov, 18 year old girl in Canada -from Haifa Israel, <br/>
               Playing professional hockey in Canada and wants continue education in USA but the thing is that she is running our of money and in the spring if she will not find it she will go to army in Israel.
               <br/>
              leading to  of sport career 
            </p>
            <a
              className="bg-[#6761F9] mt-6 inline-flex items-center px-8 py-3 text-lg font-semibold tracking-tighter text-white mr-4 "
              href="https://buy.stripe.com/test_fZe8ywcsFbyj8gw000"
              target="_blank"
            >
              Donate via Card
            </a>
            {/* <br/> */}
            <a
              className="bg-[#003B8E] mt-2 inline-flex items-center px-8 py-3 text-lg font-semibold tracking-tighter text-white"
              href="/"
            >
              Donate via Crypto
            </a>
          </div>
          <div className="mb-20 mt-44 hidden w-full flex-col lg:mt-12 lg:inline-block lg:w-3/6">
            <img src="https://files.eliteprospects.com/layout/players/pnina_basov_isr.jpg" alt="Hero" />
          </div>
          <div className="my-20 inline-block w-full flex-col lg:mt-0 lg:hidden lg:w-2/5">
            <img src="https://files.eliteprospects.com/layout/players/pnina_basov_isr.jpg" alt="image" />
          </div>
        </div>
        <div className="mt-0 bg-white lg:mt-40">
          {/* <div className="mx-auto">
            <div className="mx-auto px-5 py-24 lg:px-24">
              <div className="my-10 flex w-full flex-col text-center">
                <h2 className="mb-5 text-2xl font-bold text-black lg:text-3xl">
                  Details of the matches played and teams associated with
                </h2>
              </div>
              <div
                className="
                grid grid-cols-2
                gap-16
                text-center
                lg:grid-cols-6"
              >
                <div className="hidden items-center justify-center lg:inline-block">
                  <img
                    src="/images/segment.png"
                    alt="Segment"
                    className="block h-24 object-contain"
                  />
                </div>
                <div className="hidden items-center justify-center lg:inline-block">
                  <img
                    src="/images/segment.png"
                    alt="Segment"
                    className="block h-24 object-contain"
                  />
                </div>
                <div className="flex items-center justify-center">
                  <img
                    src="/images/segment.png"
                    alt="Segment"
                    className="block h-24 object-contain"
                  />
                </div>
                <div className="flex items-center justify-center">
                  <img
                    src="/images/segment.png"
                    alt="Segment"
                    className="block h-24 object-contain"
                  />
                </div>
                <div className="hidden items-center justify-center lg:inline-block">
                  <img
                    src="/images/segment.png"
                    alt="Segment"
                    className="block h-24 object-contain"
                  />
                </div>
                <div className="hidden items-center justify-center lg:inline-block">
                  <img
                    src="/images/segment.png"
                    alt="Segment"
                    className="block h-24 object-contain"
                  />
                </div>
              </div>
              <div className="my-12 flex w-full flex-col pl-8 text-center">
                <a
                  href="/"
                  className="
                  underline-blue
                  mb-8
                  mt-6
                  text-xl
                  font-bold
                  text-black
                "
                >
                  Ut eleifend.
                </a>
              </div>
            </div>
          </div> */}
          <div className="text-black">
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
                  Story
                </h2>
                <p className="mb-4 text-lg leading-relaxed">
                  Hello this is story line which can be added later on and the details will be given and then will be wroitten over here
                  Hello this is story line which can be added later on and the details will be given and then will be wroitten over here
                </p>
                <a href="/" className="font-semibold">
                  know more
                </a>
              </div>
              <img
                className="
                lg:w-5/7
                mb-40
                hidden
                w-5/6
                rounded object-cover
                object-center
                lg:inline-block 
                lg:w-4/6
              "
                src="https://womenshockeylife.com/wp-content/uploads/2022/09/Pnina-Basov-with-Abigali-Fuzaylov.jpg"
                alt="img"
              />

              <img
                className="
              mb-24
              inline-block
              w-5/6
              rounded
              object-cover object-center
              lg:hidden
              lg:w-4/6 
            "
                src="https://womenshockeylife.com/wp-content/uploads/2022/09/Pnina-Basov-with-Abigali-Fuzaylov.jpg"
                alt="img"
              />
            </div>
          </div>
        </div>
        <div className="mx-auto px-5 pt-8 pb-8 lg:px-24">
          <div className="my-3 flex w-full flex-col text-left lg:text-center">
            <h2 className="bold mb-8 text-4xl font-bold leading-tight text-black lg:text-6xl">
              Profile{" "}
              <br className="hidden lg:inline-block" />
              {/* consectetur adipiscing elit. */}
            </h2>
          </div>
          <div className="flex w-full flex-col text-left lg:text-center">
            <h3 className="text-2xl text-black">
              Lorem ipsum arcu, consectetur adipiscing elit. Viverra elementum
              pellentesque <br className="hidden lg:inline-block" />
              tortor, luctus blandit sed dolor et, semper. Posuere vitae vitae,
              ac mus. Arcu quis feugiat.
            </h3>
          </div>
          <div className="flex w-full flex-row justify-center pt-4 text-center">
            <a
              href="https://www.eliteprospects.com/player/909011/pnina-basov"
              className="underline- px-8 text-xl font-semibold text-blue-500"
            >
              Check Profile
            </a>
            
          </div>
        </div>
        <div className=" mx-auto flex justify-center max-w-6xl p-3 pb-8 lg:visible lg:px-2">
          <img src="https://womenshockeylife.com/wp-content/uploads/2022/09/Pnina-Basov-with-Team-Israel-and-Samara-Lewis.jpg" alt="img" />
        </div>
        <div className="bg-white text-black">
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
              className="bg-blue mt-2 inline-flex items-center px-8 py-3 text-lg font-semibold tracking-tighter text-white"
              href="https://womenshockeylife.com/pnina-basov-a-shining-star-for-womens-ice-hockey-in-israel/"
            >
              Read more
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
      
          <div className="mx-auto">
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
          </div>
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
