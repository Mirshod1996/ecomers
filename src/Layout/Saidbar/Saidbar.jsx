import { useState } from "react";
import "./Saidbar.scss";
import { NavLink } from "react-router-dom";
import {
  HeartOutlined,
  ShoppingCartOutlined,
  CloseOutlined,
  UnorderedListOutlined,
  PhoneOutlined,
} from "@ant-design/icons";

const Saidbar = () => {
  const [swichToggled, setSwichToggled] = useState(false);
  const showLibrory = () => {
    swichToggled ? setSwichToggled(false) : setSwichToggled(true);
  };
  return (
    <div className="saidbar">
      <div className="item">
        <h2 className="open" onClick={showLibrory}>
          {" "}
          {swichToggled ? <CloseOutlined /> : <UnorderedListOutlined />}
        </h2>
        <div className="icons">
          <HeartOutlined
            style={{ fontSize: 28, marginLeft: 10, cursor: "pointer" }}
          />
          <ShoppingCartOutlined
            style={{ fontSize: 28, marginLeft: 10, cursor: "pointer" }}
          />
        </div>
      </div>

      <div className={swichToggled ? "hideLibrary" : "showLibrary"}>
        <h3>
          <NavLink to="/">Home</NavLink>
        </h3>

        <h3>
          <NavLink to="/categories"> Categories</NavLink>
        </h3>
        <h3>
          <NavLink to="/catalog"> Catalog</NavLink>
        </h3>
        <h3>О нас</h3>

        <div className="contact">
          <h3>
            <PhoneOutlined /> +7 (966) 55 88 499
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Saidbar;
