import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


import styled from "styled-components";
import HANDS from "./img/mockuuups-woman-hand-holding-iphone-12-mockup-black-skin 1.png";
import SPIRAL from "./img/Group 1.svg";
import Group2 from "./img/Group.svg";
import Group3 from "./img/Group2.svg";
import Group4 from "./img/Vector.svg";
import concher from "./img/concher.png";
function App() {
  return (
    <App.Wrapper>
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
    </App.Wrapper>
  );
}
App.Wrapper = styled.div`
  color: white;
  background: rgba(158, 67, 29, 1);
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  .Logo-area {
    display: flex;
    width: 100%;
    height: 100px;
    .concher {
      width: 80px;
      // height: 80px;
      margin: 0 auto;
      position: absolute;
      top: 40px;
      left: 20px;
      z-index: 10;
    }
    .Group2 {
      position: absolute;
      top: 40px;
      right: 200px;
      width: 80px;
    }
    .Group3 {
      position: absolute;
      top: 60px;
      right: 110px;
      width: 80px;
    }
    .Group4 {
      position: absolute;
      top: 80px;
      right: 110px;
      width: 80px;
    }
    .SPIRAL {
      position: absolute;
      left: -220px;
      width: 480px;
      // height:100px;
    }
  }
  .concher-local {
    h1 {
      font-size: 2rem;
      font-weight: bold;
      text-align: center;
      margin: 0 auto;
      width: 80%;
      // padding:100px;
      // border:1px solid white;
    }
  }
  .concher-sub {
    font-size: 1.2rem;
    // font-weight:bold;
    text-align: center;
    margin: 0 auto;
    width: 70%;
  }
  .concher-app-img {
    width: 100%;
    // height: 20%;
    // border:1px solid blue;
    display: flex;
    flex-direction: row;
    .left-10p {
      width: 10%;
    }
    .app-hands {
      // border:1px solid red;
      width: 80%;
      padding: 0;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      img {
        width: 400px;
      }
    }
  }
  @media only screen and (max-width: 768px) {
  }
  @media only screen and (max-width: 420px) {
    height: 100vh;
    display: flex;
    margin: 0;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    .Logo-area {
      width: 100%;
      height: 100px;
      // border:1px solid white;
      // padding:10px;
      .concher {
        width: 40px;
        height: 40px;
        margin: 0 auto;
        position: absolute;
        top: 40px;
        left: 50%;
      }
      .Group2 {
        width: 40px;
        height: 40px;
        position: absolute;
        top: -18px;
        right: 60px;
      }
      .Group3 {
        width: 40px;
        position: absolute;
        right: 15px;
        top: 30px;
        // height:200px;
      }
      .Group4 {
        width: 40px;
        height: 40px;
        position: absolute;
        right: 20px;
        top: 40px;
      }
      .SPIRAL {
        position: absolute;
        left: -120px;
        width: 200px;
        // height:100px;
      }
    }
    .concher-local {
      width: 100%;
      height: auto;
      padding: 0px 2px;
      // border: 1px solid white;
      h1 {
        font-size: 20px;
        font-weight: 600;
        line-height: 32px;
      }
    }
    .concher-sub {
      // border: 1px solid white;
      width: 326px;
      // padding: 0px 10px;
      margin: 20px auto;
      font-size: 12px;
      font-weight: 400;
      line-height: 16px;
      text-align: center;
    }
    .concher-form {
      width: 80%;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      .Form-row {
        display: flex;
        flex-direction: column;
        label {
          // margin: auto;
          font-size: 12px;
          // width: 100%;
          align-self: flex-start;
          background: #fff;
          padding: 5px;
          padding-bottom: 2px;
          color: #000;
          border-top-right-radius: 5px;
          border-top-left-radius: 5px;
        }
        input {
          font-size: 16px;
          width: 100%;
          margin: 0 auto;
          padding: 10px;
          height: 40px;
          border: none;
          border-bottom-right-radius: 5px;
          border-bottom-left-radius: 5px;
          border-top-right-radius: 5px;
        }
      }
      .button {
        font-size: 20px;
        width: 100%;
        display: flex;
        flex-direction: column;
        button {
          // width: 50%;
          margin: 20px auto;
          padding: 15px;
          // height: 40px;
          background: #000;
          color: #fff;
          border: none;
          border-radius: 8px;
        }
      }
    }
    .concher-app-img {
      width: 100%;
      // border:1px solid green;
      margin: 0;
      .app-hands {
        margin: 0;
        width: 80%;
        img {
          width: 300px;
        }
      }
    }
  }
`;
export default App;
