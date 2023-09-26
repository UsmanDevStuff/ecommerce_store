import { Map } from "lucide-react";
import { Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white border-t">
      <div className="container mx-auto px-4 mt-4">
        <div className="flex flex-wrap text-left lg:text-left">
          <div className="w-full lg:w-6/12 px-4 mt-7">
            <h4 className="text-2xl fonat-bold text-blueGray-700">
              Lets keep in touch!
            </h4>
            <h5 className="text-md mt-0 mb-2 text-blueGray-600">
              If you have any questions or inquiries, feel free to contact us,
              <br />
              we will respond in 1-2 business days.
            </h5>
          </div>
          <div className="w-full lg:w-6/12 px-4 mt-4">
            <div className="flex flex-wrap items-top mb-2">
              <div className="w-full lg:w-4/12 px-4 ml-auto mt-3">
                <span className="block uppercase text-blueGray-500 text-sm font-bold mb-2">
                  Useful Links
                </span>
                <ul className="list-unstyled">
                  <li>
                    <a
                      className="text-blueGray-600 hover:text-blueGray-800 block pb-2 text-sm"
                      href="/about"
                    >
                      About
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-blueGray-600 hover:text-blueGray-800 block pb-2 text-sm"
                      href="/contact"
                    >
                      Contact
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-blueGray-600 hover:text-blueGray-800 block pb-2 text-sm"
                      href="/track-order"
                    >
                      Track Your Order
                    </a>
                  </li>
                </ul>
              </div>
              <div className="w-full lg:w-4/12 px-4 mt-3">
                <span className="block uppercase text-blueGray-500 text-sm font-bold mb-2">
                  Other Resources
                </span>
                <ul className="list-unstyled">
                  <li>
                    <a
                      className="text-blueGray-600 hover:text-blueGray-800  block pb-2 text-sm"
                      href="/terms-and-conditions"
                    >
                      Terms &amp; Conditions
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-blueGray-600 hover:text-blueGray-800  block pb-2 text-sm"
                      href="/privacy-policy"
                    >
                      Privacy Policy
                    </a>
                  </li>
                </ul>
              </div>
              <div className="w-full lg:w-4/12 px-4 mt-3">
                <span className="block uppercase text-blueGray-500 text-sm font-bold mb-2">
                  Contact Info
                </span>
                <ul className="list-unstyled">
                  <li>
                    <p className="text-blueGray-600 hover:text-blueGray-800 flex flex-row items-center pb-2 text-sm">
                      <Mail className="mr-1" size={15} />
                      contact@ellismart.com
                    </p>
                  </li>
                  <li>
                    <p className="text-blueGray-600 hover:text-blueGray-800  flex flex-row items-center pb-2 text-sm">
                      <Phone className="mr-1" size={15} />
                      +13473336370
                    </p>
                  </li>
                  <li>
                    <p className="text-blueGray-600 hover:text-blueGray-800  flex flex-row pb-2 text-sm">
                      <MapPin className="mr-1 mt-1" size={15} />
                      5900 BALCONES DR STE 100
                      <br /> AUSTIN TX 78731-4298
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto py-10">
        <p className="text-center text-xs text-black">
          &copy; 2023 EllisMart, Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
