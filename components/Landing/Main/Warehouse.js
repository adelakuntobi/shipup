import { Btn, DefaultHeader } from "../../styledComponents";

export default function Warehouse() {
  return (
    <section style={{ background: "#F4F6F9" }}
      className="py-24">

        <DefaultHeader className="text-center mx-auto mb-5">
          <h2><b>Warehouse</b> Onsite</h2>
        </DefaultHeader>

        <img className="w-full" src="/images/warehouse.svg" />

        <div className="flex items-center justify-center mt-6 gap-6">
          <Btn>Request Quote</Btn>
          <Btn primary>Join Now</Btn>
        </div>

    </section>
  )
}
