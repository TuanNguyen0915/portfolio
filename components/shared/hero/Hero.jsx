import { RiArrowDownSLine } from "react-icons/ri"
import Social from "../Social"
import Description from "./Description"
import HeroImg from "./HeroImg"

const Hero = () => {
  return (
    <section className="mt-12 flex min-h-[90vh] flex-col items-center justify-between bg-hero bg-cover bg-bottom bg-no-repeat py-10 dark:bg-none lg:mt-32 xl:py-24 xl:pt-16">
      <div className="container mx-auto mt-5 xl:mt-16">
        <div className="flex justify-between gap-8">
          <div className="mx-auto flex flex-col justify-center text-center lg:mx-0 lg:text-left">
            {/* DESC */}
            <Description />
            {/* SOCIAL ICONS */}
            <div className="mx-auto lg:mx-0">
              <Social />
            </div>
          </div>
          <div className="hidden md:flex">
            <HeroImg />
          </div>
        </div>
      </div>
      <div className="hidden animate-bounce lg:flex md:pb-44">
        <RiArrowDownSLine className="text-3xl text-primary" size={40} />
      </div>
    </section>
  )
}

export default Hero
