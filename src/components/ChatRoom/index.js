import { Col, Row } from "antd";
import React from "react";
import SideBar from "./SideBar/SideBar";
import ChatWindow from "./ChatWindow/ChatWindow";
function ChatRoom(props) {
  return (
    <Row>
      <Col span={6}>
        <SideBar />
      </Col>
      <Col span={18}>
        <ChatWindow />
      </Col>
    </Row>
  );
}

export default ChatRoom;
