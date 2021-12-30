import { Btn } from "../../styledComponents";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center container mx-auto">
      <p className="text-2xl">Ship<b className=" font-extrabold text-mypeach">Up</b></p>
      <ul className="hidden lg:flex justify-between items-center gap-8">
         <li>Company</li>
         <li>Services</li>
         <li>Solutions</li>
         <li>Industries</li>
         <li>Insights</li>
         <li>News And Media</li>
      </ul>

      <div className="flex gap-6">
        <Btn>Request Quote</Btn>
        <Btn primary>Join Now</Btn>
      </div>
    </nav>
  )
}
