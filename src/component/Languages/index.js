import "./index.css";
import React from "react";
import { Avatar, Card } from "antd";
import {
  PythonOutlined,
  JavaScriptOutlined,
  JavaOutlined,
} from "@ant-design/icons";
const { Meta } = Card;
const Languages = () => {
  return (
    <>
      <div className="lang">
        <h1>Top Languages</h1>
        <p>To Learn</p>
      </div>
      <div className="card">
        <div className="card_lan">
          <Card
            style={{
              width: 320,
              backgroundColor: "#00dbdb",
            }}
          >
            <Meta
              avatar={<PythonOutlined />}
              title="Phyton"
              description="Python is a computer programming language often used to build websites and software, automate tasks, and analyze data. Python is a general-purpose language, not specialized for any specific problems, and used to create various programmes"
            />
          </Card>
        </div>

        <div className="card_lan">
          <Card
            style={{
              width: 320,
              backgroundColor: "#00dbdb",
            }}
          >
            <Meta
              avatar={<JavaScriptOutlined />}
              title="Javascript"
              description="JavaScript is commonly used to make web pages dynamic. As a client scripting language, it provides websites with interactivity like prompts and alerts and it can add animations to images and text."
            />
          </Card>
        </div>
        <div className="card_lan">
          <Card
            style={{
              width: 320,
              backgroundColor: "#00dbdb",
            }}
          >
            <Meta
              avatar={<JavaOutlined />}
              title="Java"
              description="Java has long been the de-facto programming language for creating Web apps, Android apps, and software development tools such as Eclipse, IntelliJ IDEA, and NetBeans IDE. Development tools. The Integrated Development Environment (IDE) is one of Java's most intriguing features"
            />
          </Card>
        </div>
      </div>
    </>
  );
};
export default Languages;
