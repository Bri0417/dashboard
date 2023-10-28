import React from "react";
import medicine from "./assets/medicine.svg";
import app from "./assets/app.svg";
import lab from "./assets/lab.svg";
import dashbord from "./assets/dashbord.svg";
import paymeny from "./assets/paymeny.svg";
import message from "./assets/message.svg";
import setting from "./assets/setting.svg";
import help from "./assets/help.svg";
import ListGroup from "react-bootstrap/ListGroup";
function Sidebar() {
  return (
    <div className="sidebar">
      <h2 className="siderbartitle">Medico Sales</h2>

      <ListGroup className="mt-5 menu-item">
        <ListGroup.Item>
          <span>
            {" "}
            <img src={medicine} alt="pic" />
          </span>
          Dashboard
        </ListGroup.Item>
        <ListGroup.Item>
          <span>
            {" "}
            <img src={app} alt="app" />
          </span>
          Lab Test
        </ListGroup.Item>
        <ListGroup.Item>
          <span>
            {" "}
            <img src={lab} alt="lab" />
          </span>
          Apponintment
        </ListGroup.Item>
        <ListGroup.Item>
          <span>
            {" "}
            <img src={dashbord} alt="dashbord" />
          </span>
          Medicine Order
        </ListGroup.Item>
        <ListGroup.Item>
          <span>
            {" "}
            <img src={paymeny} alt="paymeny" />
          </span>
          Message
        </ListGroup.Item>
        <ListGroup.Item>
          <span>
            {" "}
            <img src={message} alt="message" />
          </span>
          Payment
        </ListGroup.Item>
        <ListGroup.Item>
          <span>
            {" "}
            <img src={setting} alt="setting" />
          </span>
          Setting
        </ListGroup.Item>
      </ListGroup>
      <span className="help">
        <span>
          {" "}
          <img src={help} alt="help" />
        </span>
        Help
      </span>
    </div>
  );
}

export default Sidebar;
