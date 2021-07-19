import React, { Component, ReactDOM } from "react";

import colorLogo from "../images/color_snack.png";
import SnackTag from "./SnackTag";
import SnackIntro from "./SnackIntro";
import "antd/dist/antd.css";
import Register_Image from "../images/Register_Image.png";
import "../css/SnackRegister.scss";
import { Select } from "antd";

const { Option } = Select;

function handleChange(value) {
  console.log(`selected ${value}`);
}

const SnackRegister = () => {
  // componentDidMount() {
  //   const { location, history } = this.props;

  //   if (location.state === undefined) {
  //     history.push("/");
  //   }
  // }
  //const { state } = this.props.location;

  return (
    <div className="RegisterMain">
      <div className="RegisterTitle">
        <img src={colorLogo} alt="nav-logo" className="color-logo" />
        New Snack
      </div>
      <div className="RegisterImage">
        <img src={Register_Image} alt="nav-logo" className="Register_Image" />
        <p className="RegisterImgae_Text">IMG</p>
      </div>
      <div className="Register_data">
        <div className="Register_Name">
          NAME
          <input type="text" className="Register_Name_text"></input>
        </div>
        <div className="Register_Category">
          {/* <select
              class="form-select form-select-lg mb-3"
              aria-label=".form-select-lg example"
            >
              <option selected>Open this select menu</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>

            <select
              class="form-select form-select-sm"
              aria-label=".form-select-sm example"
            >
              <option selected>Open this select menu</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select> */}
          {/* <Select
            defaultValue={provinceData[0]}
            style={{ width: 120 }}
            onChange={handleProvinceChange}
          >
            {provinceData.map((province) => (
              <Option key={province}>{province}</Option>
            ))}
          </Select> */}
          CATEGORY
          <Select
            defaultValue="DefaultSnack"
            style={{ width: 200, background: "yellow" }}
            onChange={handleChange}
            className="SelectBox1"
          >
            <Option value="DefaultSnack">수입제과</Option>
            <Option value="Icecream">아이스크림</Option>
            <Option value="Cookie">과자 / 쿠키</Option>
            <Option value="Candy">초콜릿 / 캔디</Option>
          </Select>
        </div>
        <div className="Register_Tag">
          <SnackTag />
        </div> 
        {/* SelectData 끝 */}
       
      </div>
      <div className="Register_Intro">
          <SnackIntro/>
        </div>
    </div>
  );
};
//ReactDOM.render(<App />, document.getElementById('container'));

export default SnackRegister;
