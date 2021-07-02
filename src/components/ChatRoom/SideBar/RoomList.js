import { Collapse, Typography, Button } from "antd";
import React from "react";
import styled from "styled-components";
import { PlusSquareOutlined } from "@ant-design/icons";
const { Panel } = Collapse;

const RoomList = () => {
  return (
    <Collapse ghost defaultActiveKey={[1]}>
      <PanelStyled header={"Room list"} key={1}>
        <LinkStyled>Room1</LinkStyled>
        <LinkStyled>Room2</LinkStyled>
        <LinkStyled>Room3</LinkStyled>
        <LinkStyled>Room4</LinkStyled>
        <Button type="text" icon={<PlusSquareOutlined />} className="add-room">
          {" "}
          Add new room
        </Button>
      </PanelStyled>
    </Collapse>
  );
};

const PanelStyled = styled(Panel)`
  &&& {
    .ant-collapse-header,
    p {
      color: white;
    }
  }
  .ant-collapse-content-box {
    padding: 0 40px;
  }
  .add-room {
    color: white;
    padding: 0;
  }
`;

const LinkStyled = styled(Typography.Link)`
  display: block;
  margin-bottom: 5px;
  color: white;
`;
export default RoomList;
