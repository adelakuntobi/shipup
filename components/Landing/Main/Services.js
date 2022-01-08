import { Btn, DefaultHeader, ServicesDiv } from "../../styledComponents";
import { FaTruckMoving } from "react-icons/fa"
import { GiAirplaneArrival } from "react-icons/gi"
import { BsFillBagFill } from "react-icons/bs"

export default function Services() {
  return (
    <section style={{ background: "#F4F6F9" }}
      className="py-24">
      <div className="container">
        <div className="flex items-center justify-between">
          <DefaultHeader>
            <h2><b>Services</b> we Offer</h2>
          </DefaultHeader>

          <img src="/images/carwithcircle.svg" />
        </div>


        <div className="flex items-center gap-16 py-24 ">
          <ServicesDiv>
            <div className="icon">
              <FaTruckMoving />
            </div>
            <h5>warehousing services</h5>
            <p>A pay as-you-go solution for: pallet
              storage, inventory management,
              fulfillment(e.g. pick and pack),
              in/out-bound solutions, and more.</p>
          </ServicesDiv>
          <ServicesDiv>
            <div className="icon">
              <GiAirplaneArrival />
            </div>
            <h5>Global Freight</h5>
            <p>Search and compare the best shipping rates among dozens of trusted logistic partners for the last mile delivery and freight.</p>
          </ServicesDiv>
          <ServicesDiv>
            <div className="icon">
              <BsFillBagFill />
            </div>
            <h5>Packaging Solutions</h5>
            <p>Our packaging solutions are optimized for each individual customer and are selected based on on the customer’s specific needs and requirements.</p>
          </ServicesDiv>

        </div>

        <div className="flex items-center justify-center mt-6 gap-6">
          <Btn>Request Quote</Btn>
          <Btn primary>Join Now</Btn>
        </div>
      </div>
    </section>
  )
}
