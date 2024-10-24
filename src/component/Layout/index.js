import React, { useState } from "react";
import "./index.css";
import { Button, Drawer, Layout, Menu } from "antd";
import { BarsOutlined, TeamOutlined } from "@ant-design/icons";
const { Header } = Layout;
const arr = ["Courses", "Techdegree", "Teams", "Community"];
const items = arr.map((item, index) => ({
  key: index + 1,
  label: item,
}));

function LayoutHead() {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div className="main_header">
        <Layout>
          <Header
            style={{
              display: "flex",
              alignItems: "center",
              height: "80",
            }}
          >
            <div
              className="head_logo"
              style={{
                display: "flex",
                gap: "5",
                flexWrap: "nowrap",
              }}
            >
              <TeamOutlined />
              <p>Ngoding</p>
            </div>
            <div className="demo-logo" />
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={["2"]}
              items={items}
              style={{
                flex: 1,
                minWidth: 0,
              }}
            />
            <div className="layout_but">
              <Button className="signup">Sign up</Button>
              <Button className="register">Register Now</Button>
            </div>
          </Header>
        </Layout>
      </div>
      <div className="hide_control">
        <div className="head_logo">
          <TeamOutlined />
          <p>Ngoding</p>
        </div>
        <div>
          <BarsOutlined className="more_logo" onClick={showDrawer} />
          <Drawer title="Menu" placement="top" onClose={onClose} open={open}>
            <div className="navlink_hide">
              <div className="nav_hide">
                <span className="span">Cources</span>
              </div>
              <div className="nav_hide">
                <span className="span">Techdegree</span>
              </div>
              <div className="nav_hide">
                <span className="span">Teams</span>
              </div>
              <div className="nav_hide">
                <span className="span">Community</span>
              </div>
              <div className="layout_but but_hide">
                <Button className="signup sign">Sign up</Button>
                <Button className="register regi">Register Now</Button>
              </div>
            </div>
          </Drawer>
        </div>
      </div>
    </>
  );
}

export default LayoutHead;
