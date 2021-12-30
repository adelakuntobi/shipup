import { Btn } from "../../styledComponents";

export default function Header() {
  return (
    <section className="flex flex-col lg:flex-row items-center container gap-8 mx-auto">
      <div className="flex flex-col gap-8 ">
        <h1 className="capitalize font-medium text-5xl leading-normal">quick &#38; reliable <b className="text-mypeach">warehousing and logistics</b> solution.</h1>
        <p>ShipUp delivers an unparalleled customer service through dedicated customer teams, engaged people working in an agile culture, and a global footprint</p>
        <div className="flex gap-6">
          <Btn primary>Join Now</Btn>
          <Btn>Play Demo</Btn>
        </div>
      </div>

      <img className="w-full lg:w-8/12" src="/images/header-img.svg" alt="Header" />
    </section>
  )
}
