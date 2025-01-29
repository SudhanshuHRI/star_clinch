import Image from "next/image";

import { FaArrowRightLong } from "react-icons/fa6";
import { FaArrowCircleRight } from "react-icons/fa";
import { FaArrowCircleLeft } from "react-icons/fa";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { FaAngleDoubleRight } from "react-icons/fa";
import { BiSolidLeftArrow, BiSolidRightArrow } from "react-icons/bi";
import { FaCalendarAlt } from "react-icons/fa";
import { FaStar } from "react-icons/fa";

export default function Home() {
  return (
    <>
      <section className="Section1Container ">
        <div className="Sec1H11">
          <h1>Singers</h1>
        </div>
        <div>
          <img
            src="/assets/Frame1.png"
            width={100}
            height={100}
            alt="img"
            className="Section1Img1"
          />
          {/* <Image src="/assets/Vector1.png" width={100} height={100} alt="img" className="Section1Img2"/> */}
          <p className="sec1Para3">Click here to view more</p>
        </div>
        <div className="sec1-3">
          <p className="sec1Para">
            Choose from <span className="sec1Span">100+ Categories</span>
          </p>
          <p className="sec1Para2 mt-2">
            Explore all categories
            <FaArrowRightLong />
          </p>
        </div>
      </section>

      <section className="Sec2Container">
        <div className="sec2SubCont1">
          <div>
            <p className="sec2SubCont1p1">Photos</p>
            <p className="sec2SubCont1p2">Videos</p>
          </div>
        </div>
        <div className="sec2SubCont2">
          <div>
            <div>
              <span>
                <img src="/assets/Frame3.png" width={200} />
              </span>
              <span>
                {" "}
                <img src="/assets/Frame2.png" width={200} />
              </span>
              <span>
                <img src="/assets/Frame3.png" width={200} />
              </span>
              <span>
                {" "}
                <img src="/assets/Frame2.png" width={200} />
              </span>
            </div>
            <div>
              <span>
                <img src="/assets/image1.png" width={200} />
              </span>
              <span>
                {" "}
                <img src="/assets/Frame4.png" width={200} />
              </span>
              <span>
                <img src="/assets/image1.png" width={200} />
              </span>
              <span>
                {" "}
                <img src="/assets/Frame4.png" width={200} />
              </span>
            </div>
          </div>
        </div>
        <div className="sec2SubCont3">
          <div className="sec2SubCont3Slider1dot"></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </section>

      <section className="Sec3Container">
        <div style={{ paddingLeft: "100px" }}>
          <p>Late Night Maggie Party for the boost</p>
          <img src="/assets/image2.png" width={300} />
        </div>
        <div style={{ paddingLeft: "800px" }}>
          <p>Late Night Maggie Party for the boost</p>
          <img src="/assets/image2.png" width={300} />
        </div>
        <div style={{ paddingLeft: "100px" }}>
          <p>Late Night Maggie Party for the boost</p>
          <img src="/assets/image2.png" width={300} />
        </div>
        <div style={{ paddingLeft: "800px" }}>
          <p>Late Night Maggie Party for the boost</p>
          <img src="/assets/image2.png" width={300} />
        </div>
      </section>

      <section className="Sec4Container">
        <div className="sec4SubCont1">
          <h1>Meet Our Starclinch Squads</h1>
        </div>
        <div className="sec4SubCont2">
          <div>
            <img src="/assets/image4.png" className="sec4Img1" />
          </div>

          <FaArrowLeft />
          <img src="/assets/image4.png" />
          <FaArrowRight />
          <div>
            <img src="/assets/image4.png" className="sec4Img2" />
          </div>
        </div>
        <div className="sec4SubCont3">
          <button>5 Members</button>
          <h1>Design Dynamos</h1>
          <div className="sec4SubCont3P1">
            <div>
              The artists behind the visuals. These design superheoes bring
              idead to life, painting our projects with creativity and
              imagination
            </div>
          </div>

          <p>
            Our design team is growing. Apply Now <FaAngleDoubleRight />
          </p>
        </div>
        <div className="sec4SubCont4"></div>
      </section>

      <section className="sec5Container">
        <div className="margueeContainer1">
          <marquee
            behavior="scroll"
            direction="left"
            className="marquee1"
            scrollamount="5"
          >
            <FaStar /> HIGHLIGHTS OF TODAY <FaStar /> HIGHLIGHTS OF TODAY
            <FaStar /> HIGHLIGHTS OF TODAY
            <FaStar /> HIGHLIGHTS OF TODAY
            <FaStar /> HIGHLIGHTS OF TODAY
          </marquee>
        </div>
        <div className="sec5Subcont1">
          <h1>Recent shows made star-studded via StarClinch</h1>
        </div>
        <div className="sec4Subcont2">
          <span>
            <BiSolidLeftArrow />
          </span>
          <span>
            <img src="/assets/image5.png" width={400} />
          </span>
          <div>
            <p>
              <span>Nora Fatehi</span> for an event hosted by XYZ performed{" "}
              <span>at Pune.</span>
            </p>
            <p className="EvntDate">
              <FaCalendarAlt />
              14 March 2023
            </p>
          </div>
          <span>
            <BiSolidRightArrow />
          </span>
        </div>
        <div className="margueeContainer2">
          <marquee
            behavior="scroll"
            direction="left"
            className="marquee2"
            scrollamount="5"
          >
            <FaStar /> HIGHLIGHTS OF TODAY <FaStar /> HIGHLIGHTS OF TODAY
            <FaStar /> HIGHLIGHTS OF TODAY
            <FaStar /> HIGHLIGHTS OF TODAY
            <FaStar /> HIGHLIGHTS OF TODAY
          </marquee>
        </div>
      </section>

      <section className="sec6Container">
        <div>
          <div className="sec6SubCont1">
            <p className="sec6SubPara1">We are the team of</p>
            <p className="sec6Subbtn1">Fun</p>
            <p className="sec6SubPara2">20+ Talented Folks</p>
            <p className="sec6Subbtn2">Inclusive</p>
          </div>
          <div className="sec6Para">
            <p>
              From passion-driven dedication to impactful contribution, we do it
              all here, We are growing and will be excited to hear from you!
            </p>
          </div>
          <div className="sec6Btn">
            <button>Join our team  <FaArrowRight /></button>
          </div>

          <div className="sec6SubCont2">
            <span className="sec6SubCont2Span1">Focused</span>
            <span className="sec6SubCont2Span2">Collaborative</span>
            <span className="sec6SubCont2Span3">United</span>
            <span className="sec6SubCont2Span4">Vibrant</span>
            <span className="sec6SubCont2Span5">dynamic</span>
            <span className="sec6SubCont2Span6">Motivated</span>
          </div>
        </div>
      </section>
    </>
  );
}
