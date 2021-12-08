// import Particles from "react-particles-js";
import { Component } from "react";
import { BiChevronDown } from "react-icons/bi";
import { MdEmail } from "react-icons/md";
import { RiWhatsappFill, RiTwitterFill, RiMessage3Fill } from "react-icons/ri";
import { GrLinkedinOption } from "react-icons/gr";
import "./info.css";
import Navbar from "../Navbar";
// import Navbar from "../Navbar";

class Info extends Component {
  state = { contact: false };

  onClickContact = () => {
    this.setState((prevState) => ({
      contact: !prevState.contact,
    }));
  };

  render() {
    const { contact } = this.state;
    return (
      <>
        <Navbar />
        <div>
          <div className="info-bg-container">
            <div className="info1">
              <div className="info1-data">
                <h1>Contact Here!</h1>
                <p>
                  Please, Contact me if you really want my presence at your
                  side, Buddy.
                </p>
                <button
                  type="button"
                  className="contact-btn"
                  onClick={this.onClickContact}
                >
                  Contact{contact && <BiChevronDown />}
                </button>
              </div>
            </div>
            <div className="info2">
              <div className="icons-container">
                <a href="mailto:arunreddyb15@gmail.com?subject=From ab.&body=Hi, You can reach me on +91 9110713426/8185968230 (Please remove this while messaging me!)">
                  <MdEmail className="icons" />
                </a>
                <a href="https://api.whatsapp.com/send?phone=8185968230">
                  <RiWhatsappFill className="icons" />
                </a>
                <a href="https://twitter.com/39832b40a3ee431">
                  <RiTwitterFill className="icons" />
                </a>
                <RiMessage3Fill className="icons" />
                <a href="www.linkedin.com/in/baddam-arun-kumar-a56367177">
                  <GrLinkedinOption className="icons" />
                </a>
              </div>
            </div>
          </div>
          {contact ? <div>Down</div> : ""}
        </div>
      </>
    );
  }
}

export default Info;
