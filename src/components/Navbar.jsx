import { Button, Menu, Typography, Avatar } from "antd";
import { Link } from "react-router-dom";
import {
  BulbOutlined,
  FundOutlined,
  HomeOutlined,
  MoneyCollectOutlined,
} from "@ant-design/icons";

const Navbar = () => {
  const menuItems = [
    {
      key: "home",
      icon: <HomeOutlined />,
      label: <Link to="/">Home</Link>,
    },
    {
      key: "cryptocurrencies",
      icon: <FundOutlined />,
      label: <Link to="/cryptocurrencies">Cryptocurrencies</Link>,
    },
    {
      key: "exchanges",
      icon: <MoneyCollectOutlined />,
      label: <Link to="/exchanges">Exchanges</Link>,
    },
    {
      key: "news",
      icon: <BulbOutlined />,
      label: <Link to="/news">News</Link>,
    },
  ];

  return (
    <div className="nav-container">
      <div className="logo-container">
        <Avatar
          src="https://www.iconpacks.net/icons/2/free-blockchain-icon-2180-thumb.png"
          size="large"
        />
        <Typography.Title level={2} className="logo">
          <Link to="/">CryptoApp</Link>
        </Typography.Title>
      </div>
      <Menu theme="dark" items={menuItems}></Menu>
    </div>
  );
};
export default Navbar;
