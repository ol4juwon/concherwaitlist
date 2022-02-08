import styled from "styled-components";
import HANDS from "./img/mockuuups-woman-hand-holding-iphone-12-mockup-black-skin 1.png";
import SPIRAL from "./img/Group 1.svg";
import Group2 from "./img/Group.svg";
import Group3 from "./img/Group2.svg";
import Group4 from "./img/Vector.svg";
function App() {
  return (
    <App.Wrapper>
      <div className="waitlist">
       <h1>Concher helps you find local businesses you can trust through community insights.</h1>
        <h2>“What you ordered vs What you got?” “Great customer service!” Concher lets you air your opinions and discover new businesses</h2>
      </div>
      <div className="form">
      <form>
        <div className="email">
        <label>Email address</label>
        <input type="text" placeholder="Enter your email address" />
        </div>
        <div className="btn">
        <button>Request Early Access</button>
        </div>
      </form>
      </div>
      <div className="hands">
        <img src={HANDS} alt="hands" />
      </div>
      <div className="spiral">
        <img src={SPIRAL} alt="hands" />
         </div>
         <div className="class2">
           <img src={Group2} alt="hands" />
           </div>
            <div className="class3">
            <img src={Group3} alt="hands" />
            </div>
            <div className="class4">
            <img src={Group4} alt="hands" />
            </div>

    </App.Wrapper>
  );
}
App.Wrapper = styled.div`
width: 100%;
height: 100vh;
background:  rgba(158, 67, 29, 1);
margin: 0;
padding: 0;
display: flex;
flex-direction: column;
justify-content: start;
// justify-content: center;
align-items: center;
.class2{
  position: absolute;
  top: 50px;
  right: 170px;
  img{
    width: 80px;
    height: 80px;
  }
  // width: 100%;
}
.class3{
  position: absolute;
  top: 60px;
  right: 70px;
  img{
    width: 80px;
    height: 80px;
  }
}
.class4{
  position: absolute;
  top: 100px;
  right: 80px;
  img{
    width: 80px;
    height: 80px;
  }
}
.spiral {
  position: absolute;
  // border: 1px solid black;
  top: -39px;
  left: -220px;
  width: 400px;
  height: 400px;
  img {
    width: 100%;
    height: 100%;
  }
}
.waitlist {
  margin-top: 5%;
  position: relative;
  width: 80%;
  text-align: center;
  height: 25%;
  display: flex;
  margin-bottom: 1rem;
  flex-direction: column;
  // justify-content: start;
  h1 {
    font-size: 48px;
    color: white;
    font-weight: 600;
    line-height: 1.2;
    margin-bottom: 1rem;
  }
  h2 {
    font-size: 24px;
    color: white;
    line-height: 32px;
    font-weight: 400;
    padding: 0 170px;
    margin-bottom: 1rem;
  }
}
.form {
  position: relative;
  height: 25%;
  width: 80%;
  text-align: center;
  // height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  form {
    
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    .email {
      display: flex;
      flex-direction: column;
      label {
        width: 100px;
        text-align: center;
        font-size: 12px;
        color: black;
        line-height: 32px;
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
        background: rgba(255, 255, 255, 1);
    }
    input {
      width: 560px;
      height: 40px;
      border: none;
      border-bottom-left-radius: 5px;
      border-bottom-right-radius: 5px;
      border-top-right-radius: 5px;
      background: rgba(255, 255, 255, 1);
      padding: 0 1rem;
      font-size: 18px;
      color: black;
      font-weight: 400;
      margin-right: 1rem;
    }
  }
    .btn{
      padding: 2rem 0 0 0 ;
      height: 40px;
      display: flex;
      flex-direction: column;
      vertical-align: middle;
      justify-content: center;
      align-items: end;
    button {
      // width: 250px;
      height: 50px;
      border: none;
      border-radius: 5px;
      background: rgba(0, 0, 0, 1);
      margin-left: 1rem;
      // margin-bottom: 1rem;
      padding: 0 1rem;
      font-size: 16px;
      color: white;
      // font-weight: 400;
      justify-content: baseline;
    }
  }
  }
}
.hands {
  width: 80%;
  position: relative;
  height: 40%;
  text-align: center;
  // height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  img {
    position: absolute;
    bottom:-15px;
    left: 35%;

    // width: px;
    // height: 100px;
  }
}


`
export default App;
