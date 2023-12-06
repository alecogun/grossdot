import { Link } from "react-router-dom";
import {
  WorkOutlineOutlined,
  WatchOutlined,
  PrintOutlined,
  ChildCareOutlined,
  TvOutlined,
  BlenderOutlined,
  HandymanOutlined,
  WeekendOutlined,
  SportsSoccerOutlined,
  ArrowRightAltOutlined,
  CallMadeOutlined,
} from "@mui/icons-material";
import "./banner.scss";

function Banner() {
  const data = [
    "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/51/6168002/1.jpg?1433",
  ];
  return (
    <div className="banner">
      <div className="banner-wrapper">
        {/* Home Banner Side Navigation Link Starts here */}
        <div className="banner-side-nav">
          <div>
            <Link to="#" className="banner-side-item">
              <img src="/img/men.svg" alt="Men Fashion" className="icon" />
              <span className="banner-side-label">Men's Fashion</span>
            </Link>
          </div>
          <div>
            <Link to="#" className="banner-side-item">
              <img src="/img/girl.svg" alt="Women Fashion" className="icon" />
              <span className="banner-side-label">Women's Fashion</span>
            </Link>
          </div>
          <div>
            <Link to="#" className="banner-side-item">
              <WorkOutlineOutlined className="icon" />
              <span className="banner-side-label">Bags & Shoes</span>
            </Link>
          </div>
          <div>
            <Link to="#" className="banner-side-item">
              <ChildCareOutlined className="icon" />
              <span className="banner-side-label">Babies</span>
            </Link>
          </div>
          <div>
            <Link to="#" className="banner-side-item">
              <WatchOutlined className="icon" />
              <span className="banner-side-label">Watches</span>
            </Link>
          </div>
          <div>
            <Link to="#" className="banner-side-item">
              <PrintOutlined className="icon" />
              <span className="banner-side-label">Consumer Electronics</span>
            </Link>
          </div>
          <div>
            <Link to="#" className="banner-side-item">
              <TvOutlined className="icon" />
              <span className="banner-side-label">
                Computer, Office & Security
              </span>
            </Link>
          </div>
          <div>
            <Link to="#" className="banner-side-item">
              <HandymanOutlined className="icon" />
              <span className="banner-side-label">
                Tools & Home Improvement
              </span>
            </Link>
          </div>
          <div>
            <Link to="#" className="banner-side-item">
              <WeekendOutlined className="icon" />
              <span className="banner-side-label">Home, Pet & Appliances</span>
            </Link>
          </div>
          <div>
            <Link to="#" className="banner-side-item">
              <SportsSoccerOutlined className="icon" />
              <span className="banner-side-label">Outdoor, Fun & Sports</span>
            </Link>
          </div>
          <div>
            <Link to="#" className="banner-side-item">
              <BlenderOutlined className="icon" />
              <span className="banner-side-label">Kitchen & Stores</span>
            </Link>
          </div>
        </div>
        {/* Home Banner Side Navigation Link ends here */}

        <div className="banner-section">
          <div className="banner-section-item">
            <div className="banner-section-trending">
              <Link to="/products/1">
                <img
                  src="/img/cooler.png"
                  alt="Product"
                  className="banner-section-img"
                />
                <span className="banner-section-item-label">Trending</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="banner-section">
          <div className="banner-section-item">
            <div className="banner-section-btn">
              <button className="banner-btn">
                <Link to="/product/1" className="banner-btn-link">
                  Shop Now <ArrowRightAltOutlined />
                </Link>
              </button>
              <button className="banner-btn2">
                <Link className="banner-btn-link2">Explore More Products</Link>
              </button>
            </div>
            <div className="banner-item-img">
              <Link to="/products/2" className="banner-item-img-link">
                <img
                  src="/img/watch.png"
                  alt="Watch"
                  className="banner-section-img"
                />
                <span className="banner-view-all">
                  View All
                  <CallMadeOutlined className="banner-viewo-all-icon" />
                </span>
              </Link>
            </div>
          </div>
        </div>

        <div className="banner-section">
          <div className="banner-section-item">
            <img src={data[0]} alt="Products" className="banner-section-img" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
