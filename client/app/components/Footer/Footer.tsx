import Link from "next/link";
import Container from "../Container";
import FooterList from "./FooterList";
import { Instagram, Twitter } from "@mui/icons-material";

const Footer = () => {
  return (
    <footer className="bg-bg-sky-blue text-sm mt-16">
      <Container>
        <div className="flex flex-col md:flex-row justify-between pt-16 pb-8">
          <FooterList>
            <h3 className="text-base font-semibold mb-4">Shopping with us</h3>
            <Link href="#">Making payment</Link>
            <Link href="#">Delivery options</Link>
            <Link href="#">Buyer's protections</Link>
            <Link href="#">Corporate and bulk purchases</Link>
            <Link href="#">Refund policy</Link>
          </FooterList>
          <FooterList>
            <h3 className="text-base font-semibold mb-4">Customer Service</h3>
            <Link href="#">Help Center</Link>
            <Link href="#">Terms and Conditions</Link>
            <Link href="#">Customer(Transactions)</Link>
            <Link href="#">Take our Feedback Survey</Link>
            <Link href="#">Transaction Services Agreement</Link>
          </FooterList>
          <FooterList>
            <h3 className="text-base font-semibold mb-4">
              Collaborate with us
            </h3>
            <Link href="#">Partnership</Link>
            <Link href="#">Affiliate program</Link>
            <Link href="#">DS Centers</Link>
            <Link href="#">Refer and get discounts</Link>
            <Link href="#">Be our Ambassador</Link>
          </FooterList>
          <FooterList>
            <h3 className="text-base font-semibold mb-4">Download our App</h3>
            <img src="/img/app.png" alt="Download our App" className="w-40" />
            <div className="flex gap-2">
              <Link href="https://twitter.com/grossdots" target="_blank">
                <Twitter />
              </Link>
              <Link href="https://instagram.com/grossdots" target="_blank">
                <Instagram />
              </Link>
            </div>
          </FooterList>
        </div>
        <div className="pt-2 pb-5">
          <hr className="bg-slate-600" />
          <div className="flex justify-between mt-3">
            <span>
              Copyright &copy;2023 Grossdot E-commerce. All Rights Reserved
            </span>
            <img
              src="img/payment.png"
              alt="Payments"
              className="hidden w-96 md:block"
            />
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
