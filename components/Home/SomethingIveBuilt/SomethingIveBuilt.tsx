import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import ArrowIcon from "../../Icons/ArrowIcon";
import Img from "../../smallComp/image/Img";

export default function SomethingIveBuilt() {
  const router = useRouter();
  return (
    <div
      id="SomethingIveBuiltSection"
      className=" flex flex-col space-y-12 bg-AAprimary w-full  2xl:px-72 lg:px-24 md:px-16 sm:px-16 py-32 px-4"
    >
      {/* // ? Title  */}
      <div data-aos="fade-up" className=" flex flex-row  items-center md:px-0">
        <ArrowIcon
          className={
            "flex-none h-5 md:h-6 w-5 md:w-5 translate-y-[2px] text-AAsecondary"
          }
        />
        <div className="flex-none flex-row space-x-2 items-center pr-2">
          <span className="text-AAsecondary font-sans text-sm  sm:text-xl">
            {" "}
            03.
          </span>
          <span className=" font-bold tracking-wider text-gray-200 text-lg md:text-2xl w-44 md:w-56 opacity-85">
            {" "}
            Some Things I&apos;ve Built
          </span>
        </div>
        <div className="bg-gray-400 h-[0.2px] w-full xl:w-1/3 md:w-1/2"></div>
      </div>

      <div className="flex flex-col space-y-8 md:space-y-28">
        {/* // ?  Project 1 */}
        <div
          data-aos="fade-up"
          className="relative md:grid md:grid-cols-12 w-full md:h-96  "
        >
          {/* Left image */}
          <div
            className="hidden bg-AAprimary z-10  py-4 
          absolute md:grid grid-cols-12 w-full h-full  content-center "
          >
            <div className="relative rounded w-full h-full col-start-6 col-span-7 ">
              <a href={"https://keyplayers.jp/keyjobs/"} target="_blank" rel="noreferrer">
                <div
                  className="absolute w-full h-full rounded bg-AAprimary 
           transition-opacity opacity-50 hover:opacity-0 hover:cursor-pointer duration-300"
                ></div>
              </a>
              <Img
                src={"/img/new/keyplayer.png"}
                alt={"Project Screen shot"}
                className={`w-full rounded h-full `}
              />
            </div>
          </div>

          {/* right Content */}
          <div className=" md:absolute py-4  md:grid md:grid-cols-12 w-full h-full  content-center ">
            {/* background for text in mobile responsive */}
            <div className="absolute w-full h-full bg-opacity-70 z-0 md:order-2">
              <div className="relative w-full h-full">
                <div className="absolute w-full h-full bg-AAsecondary opacity-10 z-10"></div>
                <div className="absolute w-full h-full bg-AAprimary opacity-80 z-10"></div>
                <Img
                  src={"/img/new/keyplayer.png"}
                  alt={"Project Screen shot"}
                  className={`w-full h-full`}
                />
              </div>
            </div>

            <div
              className="px-8 pt-8 sm:pt-12 md:py-0 xl:col-span-6   
            col-span-8 flex flex-col items-start  space-y-3 md:order-1"
            >
              <div className="flex flex-col space-y-1  z-10">
                <span className="text-AAsecondary text-base">
                  Recent Project
                </span>
                <Link href={"https://keyplayers.jp/keyjobs/"}>
                  <span className=" md:text-gray-200 text-AAsecondary font-bold text-xl hover:cursor-pointer">
                    KeyPlayer
                  </span>
                </Link>
              </div>
              <div className="w-full md:bg-AAtertiary rounded-md py-6 md:p-6  z-10">
                <p className="text-gray-300 md:text-gray-400 text-left ">
                  <p>I was responsible for all phases of system development, from design to front-end and back-end implementation, database construction, SEO measures, and final release.</p>
                  <p>Even for pages containing rich dynamic content, we applied advanced SSR (Server-Side Rendering) technology to ensure appropriate indexing by Google search engines. The latest framework "Nuxt3" is adopted as the core of the technology.</p>
                  <p>This approach allows for faster page loads and better SEO at the same time.</p>
                </p>
              </div>
              <ul
                className="flex flex-wrap w-full text-gray-300 md:text-gray-400
               text-sm font-Text2 md:justify-start"
              >
                <span className="pr-4 z-10">✔Vue.js</span>
                <span className="pr-4 z-10">✔Nuxt.js</span>
              </ul>
              <div className="z-10 flex fle-row space-x-5 ">
              </div>
            </div>
          </div>
        </div>
        {/* // ?  Project  2*/}
        <div
          data-aos="fade-up"
          className="relative md:grid md:grid-cols-12 w-full md:h-96 "
        >
          {/* Left image */}
          <div
            className="hidden bg-AAprimary z-10  py-4 
          absolute md:grid grid-cols-12 w-full h-full  content-center"
          >
            <div className="relative rounded w-full h-full col-span-7 ">
              <a
                href={"https://tokyo-daiko.com/"}
                target="_blank"
                rel="noreferrer"
              >
                <div
                  className="absolute w-full h-full rounded bg-AAprimary 
           transition-opacity opacity-50 hover:opacity-0 hover:cursor-pointer duration-300"
                ></div>
              </a>

              <Img
                src={"/img/new/tokyo.png"}
                alt={"Project Screen shot"}
                className={`w-full rounded h-full `}
              />
            </div>
          </div>

          {/* right Content */}
          <div className=" md:absolute py-4  md:grid md:grid-cols-12 w-full h-full  content-center ">
            {/* background for text in mobile responsive */}
            <div className="absolute w-full h-full bg-opacity-70 z-0">
              <div className="relative w-full h-full">
                <div className="absolute w-full h-full bg-AAsecondary opacity-10 z-10"></div>
                <div className="absolute w-full h-full bg-AAprimary opacity-80 z-10"></div>
                <Img
                  src={"/img/new/tokyo.png"}
                  alt={"Project Screen shot"}
                  className={`w-full h-full `}
                />
              </div>
            </div>

            <div
              className="px-8 pt-8 sm:pt-12 md:py-0 xl:col-span-6 xl:col-start-7 col-start-5 
            col-span-8 flex flex-col items-start md:items-end space-y-3"
            >
              <div className="flex flex-col space-y-1 md:items-end z-10">
                <span className="text-AAsecondary text-base">
                  Recent Project
                </span>
                <Link href={"https://tokyo-daiko.com/"}>
                  <span className=" md:text-gray-200 text-AAsecondary font-bold text-xl hover:cursor-pointer">
                    Tokyo Daiko
                  </span>
                </Link>
              </div>
              <div className="w-full md:bg-AAtertiary rounded-md py-6 md:p-6  z-10">
                <p className="text-gray-300 md:text-gray-400 text-left md:text-left">
                  <p>The website is based on WordPress and designed using a custom theme.</p>
                  <p>We have also implemented SSL certificates as a security measure and use security plugins to protect user data.</p>
                  <p>It is also compatible with mobile devices, providing a better user experience.</p>
                  <p>Through this project, we strengthened the online presence of companies providing driving services in the Tokyo area and provided customers with an easy-to-use and convenient reservation platform.</p>
                </p>
              </div>
              <ul
                className="flex flex-wrap w-full text-gray-300 md:text-gray-400
               text-sm font-Text2 md:justify-end"
              >
                <span className="pr-4 z-10">✔PHP</span>
                <span className="pr-4 z-10">✔WordPress</span>
              </ul>
              <div className="z-10 flex fle-row space-x-5 ">
              </div>
            </div>
          </div>
        </div>

        {/* // ?  Project 1 */}
        <div
          data-aos="fade-up"
          className="relative md:grid md:grid-cols-12 w-full md:h-96  "
        >
          {/* Left image */}
          <div
            className="hidden bg-AAprimary z-10  py-4 
          absolute md:grid grid-cols-12 w-full h-full  content-center "
          >
            <div className="relative rounded w-full h-full col-start-6 col-span-7 ">
              <a
                href={"https://fundmedemo-b024a20e46e5.herokuapp.com/"}
                target="_blank"
                rel="noreferrer"
              >
                <div
                  className="absolute w-full h-full rounded bg-AAprimary 
           transition-opacity opacity-50 hover:opacity-0 hover:cursor-pointer duration-300"
                ></div>
              </a>
              <Img
                src={"/img/new/fundme.png"}
                alt={"Project Screen shot"}
                className={`w-full rounded h-full `}
              />
            </div>
          </div>

          {/* right Content */}
          <div className=" md:absolute py-4  md:grid md:grid-cols-12 w-full h-full  content-center ">
            {/* background for text in mobile responsive */}
            <div className="absolute w-full h-full bg-opacity-70 z-0 md:order-2">
              <div className="relative w-full h-full">
                <div className="absolute w-full h-full bg-AAsecondary opacity-10 z-10"></div>
                <div className="absolute w-full h-full bg-AAprimary opacity-80 z-10"></div>
                <Img
                  src={"/img/new/fundme.png"}
                  alt={"Project Screen shot"}
                  className={`w-full h-full`}
                />
              </div>
            </div>

            <div
              className="px-8 pt-8 sm:pt-12 md:py-0 xl:col-span-6   
            col-span-8 flex flex-col items-start  space-y-3 md:order-1"
            >
              <div className="flex flex-col space-y-1  z-10">
                <span className="text-AAsecondary text-base">
                  Recent Project
                </span>
                <Link href={"https://logarithm-games.vercel.app/"}>
                  <span className=" md:text-gray-200 text-AAsecondary font-bold text-xl hover:cursor-pointer">
                    FundMe
                  </span>
                </Link>
              </div>
              <div className="w-full md:bg-AAtertiary rounded-md py-6 md:p-6  z-10">
                <p className="text-gray-300 md:text-gray-400 text-left ">
                  <p>FundMe is coded in Ruby on Rails with a Bootstrap template used on the front end. Originally the project was intended as a tipping funding app simliar to Patreon or BuyMeACoffee that had a focus on supporting musicians get tips for their performances. </p>
                  <p>Feature List:</p><p>- user authentication</p><p>- one-off and subscription payments processed with Stripe</p><p>- multilingual i18n integration</p><p>- automated payment received mail despatch after successful payments</p><p>- admin side CMS</p><p>- admin side user payment monitoring</p>

                </p>
              </div>
              <ul
                className="flex flex-wrap w-full text-gray-300 md:text-gray-400
               text-sm font-Text2 md:justify-start"
              >
                <span className="pr-4 z-10">✔Git</span>
                <span className="pr-4 z-10">✔Ruby</span>
                <span className="pr-4 z-10">✔PostgreSQL</span>
                <span className="pr-4 z-10">✔JavaScript</span>
                <span className="pr-4 z-10">✔Ruby on Rails</span>
              </ul>
              <div className="z-10 flex fle-row space-x-5 ">
              </div>
            </div>
          </div>
        </div>
        {/* // ?  Project  2*/}
        <div
          data-aos="fade-up"
          className="relative md:grid md:grid-cols-12 w-full md:h-96 "
        >
          {/* Left image */}
          <div
            className="hidden bg-AAprimary z-10  py-4 
          absolute md:grid grid-cols-12 w-full h-full  content-center"
          >
            <div className="relative rounded w-full h-full col-span-7 ">
              <a
                href={"https://allgoredemo-8aa98824cbee.herokuapp.com/"}
                target="_blank"
                rel="noreferrer"
              >
                <div
                  className="absolute w-full h-full rounded bg-AAprimary 
           transition-opacity opacity-50 hover:opacity-0 hover:cursor-pointer duration-300"
                ></div>
              </a>

              <Img
                src={"/img/new/allgore.png"}
                alt={"Project Screen shot"}
                className={`w-full rounded h-full `}
              />
            </div>
          </div>

          {/* right Content */}
          <div className=" md:absolute py-4  md:grid md:grid-cols-12 w-full h-full  content-center ">
            {/* background for text in mobile responsive */}
            <div className="absolute w-full h-full bg-opacity-70 z-0">
              <div className="relative w-full h-full">
                <div className="absolute w-full h-full bg-AAsecondary opacity-10 z-10"></div>
                <div className="absolute w-full h-full bg-AAprimary opacity-80 z-10"></div>
                <Img
                  src={"/img/new/allgore.png"}
                  alt={"Project Screen shot"}
                  className={`w-full h-full `}
                />
              </div>
            </div>

            <div
              className="px-8 pt-8 sm:pt-12 md:py-0 xl:col-span-6 xl:col-start-7 col-start-5 
            col-span-8 flex flex-col items-start md:items-end space-y-3"
            >
              <div className="flex flex-col space-y-1 md:items-end z-10">
                <span className="text-AAsecondary text-base">
                  Recent Project
                </span>
                <Link href={"https://allgoredemo-8aa98824cbee.herokuapp.com/"}>
                  <span className=" md:text-gray-200 text-AAsecondary font-bold text-xl hover:cursor-pointer">
                    Horror Movie
                  </span>
                </Link>
              </div>
              <div className="w-full md:bg-AAtertiary rounded-md py-6 md:p-6  z-10">
                <p className="text-gray-300 md:text-gray-400 text-left md:text-left">
                  <p>Allgore is a demo web app that takes horror movie data from the TMDb API, seeds this into the PostgreSQL database and then displays this in a simple web app for browsing horror movies.<p></p>Further Details<p></p>Currently the app has a many-to-many database relationship between horro movies and horror sub-genres. <p></p>Originally the idea of the exercise was to feature user CRUD actions to allow users to create their own movie lists, but I have removed this for now. <p></p>I might reinstate this using HTML local storage.<p></p>Feature List:<p></p>- postgreSQL many-to-many database relationship<p></p>- javascript carousel implementation<p></p>- pagination implemented with kaminari</p>
                </p>
              </div>
              <ul
                className="flex flex-wrap w-full text-gray-300 md:text-gray-400
               text-sm font-Text2 md:justify-end"
              >
                <span className="pr-4 z-10">✔SCSS</span>
                <span className="pr-4 z-10">✔PostgreSQL</span>
                <span className="pr-4 z-10">✔Ruby on Rails</span>
                <span className="pr-4 z-10">✔Ruby</span>
              </ul>
              <div className="z-10 flex fle-row space-x-5 ">
              </div>
            </div>
          </div>
        </div>

        {/* // ?  Project 1 */}
        <div
          data-aos="fade-up"
          className="relative md:grid md:grid-cols-12 w-full md:h-96  "
        >
          {/* Left image */}
          <div
            className="hidden bg-AAprimary z-10  py-4 
          absolute md:grid grid-cols-12 w-full h-full  content-center "
          >
            <div className="relative rounded w-full h-full col-start-6 col-span-7 ">
              <a
                href={"https://summersession.ucmerced.edu/"}
                target="_blank"
                rel="noreferrer"
              >
                <div
                  className="absolute w-full h-full rounded bg-AAprimary 
           transition-opacity opacity-50 hover:opacity-0 hover:cursor-pointer duration-300"
                ></div>
              </a>
              <Img
                src={"/img/new/summer.png"}
                alt={"Project Screen shot"}
                className={`w-full rounded h-full `}
              />
            </div>
          </div>

          {/* right Content */}
          <div className=" md:absolute py-4  md:grid md:grid-cols-12 w-full h-full  content-center ">
            {/* background for text in mobile responsive */}
            <div className="absolute w-full h-full bg-opacity-70 z-0 md:order-2">
              <div className="relative w-full h-full">
                <div className="absolute w-full h-full bg-AAsecondary opacity-10 z-10"></div>
                <div className="absolute w-full h-full bg-AAprimary opacity-80 z-10"></div>
                <Img
                  src={"/img/new/summer.png"}
                  alt={"Project Screen shot"}
                  className={`w-full h-full`}
                />
              </div>
            </div>

            <div
              className="px-8 pt-8 sm:pt-12 md:py-0 xl:col-span-6   
            col-span-8 flex flex-col items-start  space-y-3 md:order-1"
            >
              <div className="flex flex-col space-y-1  z-10">
                <span className="text-AAsecondary text-base">
                </span>
                <Link href={"https://summersession.ucmerced.edu/"}>
                  <span className=" md:text-gray-200 text-AAsecondary font-bold text-xl hover:cursor-pointer">
                    Summer Engagement Map
                  </span>
                </Link>
              </div>
              <div className="w-full md:bg-AAtertiary rounded-md py-6 md:p-6  z-10">
                <p className="text-gray-300 md:text-gray-400 text-left ">
                  <p>I worked with the PM of Summer Session and the Academic Enrichment and Outreach Center to design and build 2 pages for the respective departments.</p><p>The pages were developed on existing Drupal 7 departmental sites and consisted of 6 and 4 sections or pages respectively.</p><p>The sections needed items that could be easily updated and added.</p><p>The project consisted of a full design to development timeline as shown below.</p><p>1 - Design discovery.</p><p>2 - Architect backend to facilitate easy adding and updating of items: activities and programs.</p><p>3 - Build the backend using the available Drupal modules.</p><p>4 - Design the aesthetic solution based on the design discovery and the known architecture.</p><p>5 - Implement the design using CSS and HTML for mobile to HD screen.</p>
                </p>
              </div>
              <ul
                className="flex flex-wrap w-full text-gray-300 md:text-gray-400
               text-sm font-Text2 md:justify-start"
              >
                <span className="pr-4 z-10">✔React.js</span>
                <span className="pr-4 z-10">✔Node.js</span>
                <span className="pr-4 z-10">✔Tailwind CSS</span>
                <span className="pr-4 z-10">✔Next.js</span>
              </ul>
              <div className="z-10 flex fle-row space-x-5 ">

              </div>
            </div>
          </div>
        </div>
        {/* // ?  Project  2*/}
        <div
          data-aos="fade-up"
          className="relative md:grid md:grid-cols-12 w-full md:h-96 "
        >
          {/* Left image */}
          <div
            className="hidden bg-AAprimary z-10  py-4 
          absolute md:grid grid-cols-12 w-full h-full  content-center"
          >
            <div className="relative rounded w-full h-full col-span-7 ">
              <a
                href={"https://palancare.com/properties"}
                target="_blank"
                rel="noreferrer"
              >
                <div
                  className="absolute w-full h-full rounded bg-AAprimary 
           transition-opacity opacity-50 hover:opacity-0 hover:cursor-pointer duration-300"
                ></div>
              </a>

              <Img
                src={"/img/new/palancarealty.png"}
                alt={"Project Screen shot"}
                className={`w-full rounded h-full `}
              />
            </div>
          </div>

          {/* right Content */}
          <div className=" md:absolute py-4  md:grid md:grid-cols-12 w-full h-full  content-center ">
            {/* background for text in mobile responsive */}
            <div className="absolute w-full h-full bg-opacity-70 z-0">
              <div className="relative w-full h-full">
                <div className="absolute w-full h-full bg-AAsecondary opacity-10 z-10"></div>
                <div className="absolute w-full h-full bg-AAprimary opacity-80 z-10"></div>
                <Img
                  src={"/img/new/palancarealty.png"}
                  alt={"Project Screen shot"}
                  className={`w-full h-full `}
                />
              </div>
            </div>

            <div
              className="px-8 pt-8 sm:pt-12 md:py-0 xl:col-span-6 xl:col-start-7 col-start-5 
            col-span-8 flex flex-col items-start md:items-end space-y-3"
            >
              <div className="flex flex-col space-y-1 md:items-end z-10">
                <span className="text-AAsecondary text-base">
                </span>
                <Link href={"https://palancare.com/properties"}>
                  <span className=" md:text-gray-200 text-AAsecondary font-bold text-xl hover:cursor-pointer">
                    Real Estate Portal
                  </span>
                </Link>
              </div>
              <div className="w-full md:bg-AAtertiary rounded-md py-6 md:p-6  z-10">
                <p className="text-gray-300 md:text-gray-400 text-left md:text-left">
                  <p>This project had consisted of 4 separate milestones.</p><p>1. Set up of basic 5-page brochure site with a provided theme.</p><p>2. Replace the Properties page with a dynamically created properties page using Drupal Views and customizing a Drupal content type to display more information on each property.</p><p>3. Set up and integrate a 3rd party API so properties are automatically added to the site on a weekly timeframe.</p><p>4. Create a new properties page to highlight the countries. Implement a better search and filter on a new properties search page.</p><p>**Create a better search and filter for the properties search page.**</p><p>Search API and Facets modules were used to implement this.</p>
                </p>
              </div>
              <ul
                className="flex flex-wrap w-full text-gray-300 md:text-gray-400
               text-sm font-Text2 md:justify-end"
              >
                <span className="pr-4 z-10">✔Drupal</span>
                <span className="pr-4 z-10">✔Next.js</span>
                <span className="pr-4 z-10">✔Tailwind CSS</span>
                <span className="pr-4 z-10">✔AWS</span>
              </ul>
              <div className="z-10 flex fle-row space-x-5 ">
              </div>
            </div>
          </div>
        </div>
        {/* // ?  Project 11 */}
        <div
          data-aos="fade-up"
          className="relative md:grid md:grid-cols-12 w-full md:h-96  "
        >
          {/* Left image */}
          <div
            className="hidden bg-AAprimary z-10  py-4 
          absolute md:grid grid-cols-12 w-full h-full  content-center "
          >
            <div className="relative rounded w-full h-full col-start-6 col-span-7 ">
              <Link
                href={
                  "https://www.helpfortrauma.app/"
                }
              >
                <div
                  className="absolute w-full h-full rounded bg-AAsecondary 
           transition-opacity opacity-20 hover:opacity-0 hover:cursor-pointer duration-300"
                ></div>
              </Link>
              <Img
                src={"/img/new/trauma.png"}
                alt={"Project Screen shot"}
                className={`w-full rounded h-full `}
              />
            </div>
          </div>

          {/* right Content */}
          <div className=" md:absolute py-4  md:grid md:grid-cols-12 w-full h-full  content-center ">
            <div className="absolute w-full h-full bg-opacity-70 z-0 md:order-2">
              <div className="relative w-full h-full">
                <div className="absolute w-full h-full bg-AAsecondary opacity-10 z-10"></div>
                <div className="absolute w-full h-full bg-AAprimary opacity-80 z-10"></div>
                <Img
                  src={"/img/trauma.png"}
                  alt={"Project Screen shot"}
                  className={`w-full h-full`}
                />
              </div>
            </div>

            <div
              className="px-8 pt-8 sm:pt-12 md:py-0 xl:col-span-6   
            col-span-8 flex flex-col items-start  space-y-3 md:order-1"
            >
              <div className="flex flex-col space-y-1  z-10">
                <span className="text-AAsecondary text-base">
                </span>
                <Link
                  href={
                    "https://www.helpfortrauma.app/"
                  }
                >
                  <span className=" md:text-gray-200 text-AAsecondary font-bold text-xl hover:cursor-pointer">
                    Trauma
                  </span>
                </Link>
              </div>
              <div className="w-full md:bg-AAtertiary rounded-md py-6 md:p-6  z-10">
                <p className="text-gray-300 md:text-gray-400 text-left ">
                  <p>The project focused on building a highly secure HIPAA-compliant healthcare platform. It helps facilitate trauma recovery between professionals and patients.</p><p>- Worked as a full-stack web developer.</p><p>- Back-end was developed with Django and React.js was for used front-end.</p><p>- Integrated Stripe to facilitate payments for the recurring subscriptions.</p><p>- Added charts and graphs in React.js.</p><p>- Django REST Framework was used for developing the RESTful APIs, and React.js for front-end.</p><p>- The project required a drawing tool, with customized tools and voice over features. It needed to be responsive for all devices and compatible with touch input based devices. </p><p>To fulfill all these requirements, I built the tool from the ground up.</p>
                </p>
              </div>
              <ul
                className="flex flex-wrap w-full text-gray-300 md:text-gray-400
               text-sm font-Text2 md:justify-start"
              >
                <span className="pr-4 z-10">✔React</span>
                <span className="pr-4 z-10">✔Django</span>
                <span className="pr-4 z-10">✔Rest framework</span>
                <span className="pr-4 z-10">✔Restful API</span>
              </ul>
              <div className="z-10 flex fle-row space-x-5 ">
              </div>
            </div>
          </div>
        </div>
        {/* // ? Project 4 */}
        <div
          data-aos="fade-up"
          className="relative md:grid md:grid-cols-12 w-full md:h-96"
        >
          {/* Left image */}
          <div
            className="hidden bg-AAprimary z-10  py-4 
          absolute md:grid grid-cols-12 w-full h-full  content-center"
          >
            <div className="relative rounded w-full h-full col-span-7 ">
              <a href="https://www.honegolf.com/" target={"_blank"} rel="noreferrer">
                <div
                  className="absolute w-full h-full rounded bg-AAprimary 
           transition-opacity opacity-50 hover:opacity-0 hover:cursor-pointer duration-300"
                ></div>
              </a>
              <Img
                src={"/img/new/honegolf.png"}
                alt={"Project Screen shot"}
                className={`w-full rounded h-full `}
              />
            </div>
          </div>

          {/* right Content */}
          <div className=" md:absolute py-4  md:grid md:grid-cols-12 w-full h-full  content-center ">
            {/* background for text in mobile responsive */}
            <div className="absolute w-full h-full bg-opacity-70 z-0">
              <div className="relative w-full h-full">
                <div className="absolute w-full h-full bg-AAsecondary opacity-10 z-10"></div>
                <div className="absolute w-full h-full bg-AAprimary opacity-80 z-10"></div>
                <Img
                  src={"/img/new/honegolf.png"}
                  alt={"Project Screen shot"}
                  className={`w-full h-full `}
                />
              </div>
            </div>

            <div
              className="px-8 pt-8 sm:pt-12 md:py-0 xl:col-span-6 xl:col-start-7 col-start-5 
            col-span-8 flex flex-col items-start md:items-end sm:space-y-3 space-y-1"
            >
              <div className="flex flex-col space-y-1 md:items-end z-10">
                <span className="text-AAsecondary text-base">
                </span>
                <a href="https://www.honegolf.com/" target={"_blank"} rel="noreferrer">
                  <span className=" md:text-gray-200 text-AAsecondary font-bold text-xl hover:cursor-pointer">
                    Hone Golf
                  </span>
                </a>
              </div>
              <div className="w-full md:bg-AAtertiary rounded-md py-6 md:p-6  z-10">
                <p className="text-gray-300 md:text-gray-400 text-left md:text-left">
                  <p>The project focused on building a platform that helps golfers coordinate with each other. Users can connect their Google Calendar and Outlook calendar to share their availability, and fellow golfers can schedule events based on their available time slots.</p><p>- Worked as a back-end developer.</p><p>- Built with Django along with Django REST Framework for RESTful APIs.</p><p>- Integration with Firebase Cloud messaging for push notifications.</p><p>- Integration with external calendar services like Google calendar and Outlook calendar for scheduling and availability checks.</p><p>- Added chat messaging features.</p>
                </p>
              </div>
              <ul
                className="flex flex-wrap w-full text-gray-300 md:text-gray-400
               text-sm font-Text2 md:justify-end"
              >
                <span className="pr-4 z-10">✔React</span>
                <span className="pr-4 z-10">✔Django Rest</span>
                <span className="pr-4 z-10">✔Firebase Cloud</span>
                <span className="pr-4 z-10">✔Restful API</span>
                <span className="pr-4 z-10">✔jQuery</span>
              </ul>
              <div className="z-10 flex fle-row space-x-5 sm:pt-0 pt-2">
              </div>
            </div>
          </div>
        </div>
        {/* // ?  Project 3 */}
        <div
          data-aos="fade-up"
          className="relative md:grid md:grid-cols-12 w-full md:h-96  "
        >
          {/* Left image */}
          <div
            className="hidden bg-AAprimary z-10  py-4 
          absolute md:grid grid-cols-12 w-full h-full  content-center "
          >
            <div className="relative rounded w-full h-full col-start-6 col-span-7 ">
              <Link href={"https://www.etestseries.in/"}>
                <div
                  className="absolute w-full h-full rounded bg-AAsecondary 
           transition-opacity opacity-20 hover:opacity-0 hover:cursor-pointer duration-300"
                ></div>
              </Link>
              <Img
                src={"/img/new/series.png"}
                alt={"Project Screen shot"}
                className={`w-full rounded h-full `}
              />
            </div>
          </div>

          {/* right Content */}
          <div className=" md:absolute py-4  md:grid md:grid-cols-12 w-full h-full  content-center ">
            <div className="absolute w-full h-full bg-opacity-70 z-0 md:order-2">
              <div className="relative w-full h-full">
                <div className="absolute w-full h-full bg-AAsecondary opacity-10 z-10"></div>
                <div className="absolute w-full h-full bg-AAprimary opacity-80 z-10"></div>
                <Img
                  src={"/img/new/series.png"}
                  alt={"Project Screen shot"}
                  className={`w-full h-full`}
                />
              </div>
            </div>

            <div
              className="px-8 pt-8 sm:pt-12 md:py-0 xl:col-span-6   
            col-span-8 flex flex-col items-start  space-y-3 md:order-1"
            >
              <div className="flex flex-col space-y-1  z-10">
                <span className="text-AAsecondary text-base">
                </span>
                <Link href={"https://www.etestseries.in/"}>
                  <span className=" md:text-gray-200 text-AAsecondary font-bold text-xl hover:cursor-pointer">
                    Online Test with Video Lectures
                  </span>
                </Link>
              </div>
              <div className="w-full md:bg-AAtertiary rounded-md py-6 md:p-6  z-10">
                <p className="text-gray-300 md:text-gray-400 text-left ">
                  <p>eTestSeries in a platform for students to take mock and practice tests to prepare for competitive examinations.</p><p>- Worked as the core Full Stack Developer</p><p>- Closely worked with the client and designers to decide software design and structure.</p><p>- Developed the application from scratch </p><p>- The back-end is developed with Django, and the front-end part is in React.js.</p><p>- In addition, I developed a feature to import hundreds of question papers from unstructured word documents with different formatting into the system in a structured manner.</p><p>- The platform also supports time bound, multi-lingual, and equation based questions, along with all features available in real-world online examinations.</p>
                </p>
              </div>
              <ul
                className="flex flex-wrap w-full text-gray-300 md:text-gray-400
               text-sm font-Text2 md:justify-start"
              >
                <span className="pr-4 z-10">✔React</span>
                <span className="pr-4 z-10">✔Node.js</span>
                <span className="pr-4 z-10">✔Flask</span>
                <span className="pr-4 z-10">✔JavaScript</span>
                <span className="pr-4 z-10">✔Firebase</span>
              </ul>
              <div className="z-10 flex fle-row space-x-5 ">
              </div>
            </div>
          </div>
        </div>
        {/* // ? Project 12 */}
        <div
          data-aos="fade-up"
          className="relative md:grid md:grid-cols-12 w-full md:h-96"
        >
          {/* Left image */}
          <div
            className="hidden bg-AAprimary z-10  py-4 
          absolute md:grid grid-cols-12 w-full h-full  content-center"
          >
            <div className="relative rounded w-full h-full col-span-7 ">
              <a
                href="https://www.littlebaby.com.sg/"
                target={"_blank"}
                rel="noreferrer"
              >
                <div
                  // onClick={}
                  className="absolute w-full h-full rounded bg-AAprimary 
           transition-opacity opacity-50 hover:opacity-0 hover:cursor-pointer duration-300"
                ></div>
              </a>
              <Img
                src={"/img/new/littlebaby.png"}
                alt={"Project Screen shot"}
                className={`w-full rounded h-full `}
              />
            </div>
          </div>

          {/* right Content */}
          <div className=" md:absolute py-4  md:grid md:grid-cols-12 w-full h-full  content-center ">
            {/* background for text in mobile responsive */}
            <div className="absolute w-full h-full bg-opacity-70 z-0">
              <div className="relative w-full h-full">
                <div className="absolute w-full h-full bg-AAsecondary opacity-10 z-10"></div>
                <div className="absolute w-full h-full bg-AAprimary opacity-80 z-10"></div>
                <Img
                  src={"/img/new/littlebaby.png"}
                  alt={"Project Screen shot"}
                  className={`w-full h-full `}
                />
              </div>
            </div>

            <div
              className="px-8 pt-8 sm:pt-12 md:py-0 xl:col-span-6 xl:col-start-7 col-start-5 
            col-span-8 flex flex-col items-start md:items-end sm:space-y-3 space-y-1"
            >
              <div className="flex flex-col space-y-1 md:items-end z-10">
                <span className="text-AAsecondary text-base">
                </span>
                <a
                  href="https://www.littlebaby.com.sg/"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <span className=" md:text-gray-200 text-AAsecondary font-bold text-xl hover:cursor-pointer">
                    Little baby Ecommerce
                  </span>
                </a>
              </div>
              <div className="w-full md:bg-AAtertiary rounded-md py-6 md:p-6  z-10">
                <p className="text-gray-300 md:text-gray-400 text-left md:text-left">
                  <p>Website Development & Design: Collaborating with our team to enhance our online stores functionality and aesthetics, creating a seamless shopping experience for our valued customers.</p><p>E-commerce Integration: Implementing secure payment gateways and optimizing the checkout process, assuring a hassle-free purchasing journey.</p><p>Product Listing & Management: Assisting in the careful listing and management of products, ensuring accurate descriptions and information for each item.</p><p>Customer Support & Communication: Engaging with customers to address inquiries and provide assistance, establishing strong relationships built on trust and reliability.</p><p>Content Creation: Crafting persuasive and informative product descriptions that highlight the authenticity, safety, and benefits of our offerings.</p>
                </p>
              </div>
              <ul
                className="flex flex-wrap w-full text-gray-300 md:text-gray-400
               text-sm font-Text2 md:justify-end"
              >
                <span className="pr-4 z-10">✔React</span>
                <span className="pr-4 z-10">✔Laravel</span>
                <span className="pr-4 z-10">✔MongoDB</span>
                <span className="pr-4 z-10">✔Material UI</span>
              </ul>
              <div className="z-10 flex fle-row space-x-5 sm:pt-0 pt-2">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
