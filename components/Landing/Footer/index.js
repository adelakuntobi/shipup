import styled from "styled-components";
import { ImFacebook } from "react-icons/im"

export default function Footer() {
  return (
    <footer className="bg-myblue text-white pt-16">
      <div className="container">
        <div className="grid lg:grid-cols-6 gap-32 pb-16">
          <div className=" col-span-2">
            <h6 className="text-mypeach text-2xl mb-4">Ship<b className=" font-black text-white">Up</b></h6>
            <p className=" leading-6">ShipUp delivers an unparalleled customer service through dedicated customer teams, engaged people working in an agile culture, and a global footprint</p>
          </div>
          <DivWithHeader>
            <h5>Explore</h5>
            <ul>
              <li>About Us</li>
              <li>Our Warehouses</li>
              <li>Blog</li>
              <li>News and Media</li>
            </ul>
          </DivWithHeader>
          <DivWithHeader>
            <h5>Legal</h5>
            <ul>
              <li>Terms</li>
              <li>Privacy</li>
            </ul>
          </DivWithHeader>

          <DivWithHeader className=" col-span-2" >
            <h5>Social Media</h5>
            <div className="grid grid-cols-4">
              <div style={{background: "linear-gradient(90deg, #2C2D5B 0%, #9FA1FF 100%)"}} className=" rounded-full h-12 w-12 grid place-items-center">
                <ImFacebook  />
              </div>
              <div className="bg-white rounded-full h-12 w-12 grid place-items-center">
                <ImFacebook style={{background: "linear-gradient(90deg, #2C2D5B 0%, #9FA1FF 100%)"}} />
              </div>
              <div className="bg-white rounded-full h-12 w-12 grid place-items-center">
                <ImFacebook style={{background: "linear-gradient(90deg, #2C2D5B 0%, #9FA1FF 100%)"}} />
              </div>
              <div className="bg-white rounded-full h-12 w-12 grid place-items-center">
                <ImFacebook style={{background: "linear-gradient(90deg, #2C2D5B 0%, #9FA1FF 100%)"}} />
              </div>
            </div>
          </DivWithHeader>
        </div>
        <hr />
        <div className="text-center block py-6">
          <h6 className="text-white opacity-75 text-lg">Ship<b className=" font-black text-mypeach">Up</b>.ng</h6>
        </div>
      </div>
    </footer>
  )
}


const DivWithHeader = styled.div`
  h5{
    font-weight: bold;
    font-size: 18px;
    text-transform: capitalize;
    margin-bottom: 1.25rem;
  }

  ul {
    li{
      line-height: 1.75rem;
      cursor: pointer;
    }
  }
`;