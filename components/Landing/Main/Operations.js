import { DefaultHeader, OperationsDiv } from "../../styledComponents";


export default function Operations() {
  return (
    <section className="container py-24">
      <div className="relative">

        <img className=" w-24 lg:w-40 lg:absolute" src="/images/carwithcircle.svg" />
        <DefaultHeader className="py-16 text-center m-auto ">
          <h2><b>Operation</b> mode</h2>
        </DefaultHeader>
      </div>



      <div>

        <OperationsDiv className="grid-cols-2">
          <div className="w-full md:w-4/12">
            <div className="withNo">
              <span>1</span>
              <h6>Connect</h6>
            </div>
            <p>You’re currently running your store on Shopify, WooCommerce, or any other platform. As a first step, you’ll connect your store with our platform.</p>
          </div>
          <img className="w-full md:w-4/12" src="/images/operations1.svg" />
        </OperationsDiv>


        <div className="hidden lg:block relative">
          <img src="/images/line.svg" className="absolute mx-auto left-0 right-0 text-center -top-20" />
        </div>

        <OperationsDiv className=" !flex-col-reverse md:!flex-row">
          <img className="w-full md:w-4/12" src="/images/operations2.svg" />
          <div className="w-full md:w-4/12">
            <div className="withNo">
              <span>2</span>
              <h6>Store</h6>
            </div>
            <p>You’re currently running your store on Shopify, WooCommerce, or any other platform. As a first step, you’ll connect your store with our platform.</p>
          </div>
        </OperationsDiv>


        <div className="hidden lg:block relative">
          <img style={{ transform: "rotateX(180deg)" }} src="/images/line.svg" className="absolute mx-auto left-0 right-0 text-center -top-36" />
        </div>


        <OperationsDiv className="grid-cols-2">
          <div className="w-full md:w-4/12">
            <div className="withNo">
              <span>3</span>
              <h6>Ship</h6>
            </div>
            <p>You’re currently running your store on Shopify, WooCommerce, or any other platform. As a first step, you’ll connect your store with our platform.</p>
          </div>
          <img className="w-full md:w-4/12" src="/images/operations3.svg" />
        </OperationsDiv>




      </div>
    </section>
  )
}
