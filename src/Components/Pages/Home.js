import react from "react";
import styled from "styled-components";
import HANDS from "./img/mockuuups-woman-hand-holding-iphone-12-mockup-black-skin 1.png";
import SPIRAL from "./img/Group 1.svg";
import Group2 from "./img/Group.svg";
import Group3 from "./img/Group2.svg";
import Group4 from "./img/Vector.svg";
import concher from "./img/concher.png";
const Home = () => {



	return (
        <Home.Wrapper>
             <div className="Logo-area">
        <img src={concher} alt="concher" className="concher" />
        <img src={Group2} alt="Group2" className="Group2" />
        <img src={Group3} alt="Group3" className="Group3" />
        <img src={Group4} alt="Group4" className="Group4" />
        <img src={SPIRAL} alt="SPIRAL" className="SPIRAL" />
      </div>
      <div className="concher-local">
        <h1>
          Concher helps you find local businesses you can trust through
          community insights.
        </h1>
      </div>
      <div className="concher-sub">
        “What you ordered vs What you got?” “Great customer service!” Concher
        lets you air your opinions and discover new businesses
      </div>
      <div className="concher-form">
        <form>
          <div className="Form-row">
            <label>Enter Email</label>
            <input type="text" placeholder="Email@concher.app" />
          </div>
          <div className="button">
            {" "}
            <button>Request Early Access</button>
          </div>
        </form>
      </div>
      <div className="concher-app-img">
        <div className="left-10p"></div>
        <div className="app-hands">
          <img src={HANDS} alt="hands" className="hands" />
        </div>
        <div className="socials"></div>
      </div>
        </Home.Wrapper>
    )
}

export default Home;
