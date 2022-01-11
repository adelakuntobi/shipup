export default function Footer() {
  return (
    <footer className="bg-myblue text-white py-6">
      <div className="container">
        <div className="grid grid-cols-6 gap-6">
          <div className=" col-span-2">
            {/* logo */}
            <p>ShipUp delivers an unparalleled customer service through dedicated customer teams, engaged people working in an agile culture, and a global footprint</p>
          </div>
          <ul>
            <li>About Us</li>
            <li>About Us</li>
            <li>About Us</li>
            <li>About Us</li>
          </ul>
          <ul>
            <li>About Us</li>
            <li>About Us</li>
            <li>About Us</li>
            <li>About Us</li>
          </ul>
          <div className=" col-span-2">
            <h6>Social Media</h6>
          </div>
        </div>
        <hr />
        <div>
          <small className="text-center block pt-6">ShipUp.ng</small>
        </div>
      </div>
    </footer>
  )
}
