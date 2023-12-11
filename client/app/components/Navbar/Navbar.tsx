import Link from "next/link";
import { Menu, ArrowDropDown } from "@mui/icons-material";
import Container from "../Container";

const Navbar = () => {
  return (
    <div
      className="
    w-full
    shadow-sm
    z-30
    bg-white
    "
    >
      <div>
        <Container>
          <div
            className="
          flex
          items-center
          justify-between
          gap-3
          md:gap-0
          "
          >
            <Link href="/">
              <img src="/img/logo.png" alt="" className="" />
            </Link>
            <div>Search</div>
            <div className="flex items-center gap-8 md:gap-3 p-3 text-sm">
              <div>WishList</div>
              <div>CartCount</div>
              <div>UserMenu</div>
            </div>
          </div>
        </Container>
      </div>
      <div className="bg-dark-blue p-2 text-white hidden md:block">
        <Container>
          <div className="flex items-center justify-between gap-3 text-sm font-medium">
            <div className="flex gap-4 items-center">
              <Menu />
              <Link href="#">All Category</Link>
              <Link href="#">Today's Deals</Link>
              <Link href="#">Hot Offers</Link>
              <Link href="#">Gift Cards</Link>
              <Link href="#">Menu Items</Link>
              <Link href="#">Support</Link>
            </div>
            <div className="flex items-center justify-between gap-5">
              <div>
                EN
                <ArrowDropDown />
              </div>
              <div className="flex items-center gap-1">
                Ship to
                <img
                  src="/img/nig.png"
                  alt=""
                  className="
                w-5
                "
                />
                <ArrowDropDown />
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Navbar;
