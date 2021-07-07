import { Collapse, Typography, Button } from "antd";
import React, { useContext } from "react";
import styled from "styled-components";
import { PlusSquareOutlined } from "@ant-design/icons";
import useFirestore from "../../../hooks/useFirestore";
import { AuthContext } from "../../Context/AuthProvider";
const { Panel } = Collapse;

const RoomList = () => {
  const { uid } = useContext(AuthContext);
  const roomsCondition = React.useMemo(() => {
    return {
      fieldName: "members",
      operator: "array-contains",
      compareValue: uid,
    };
  }, [uid]);
  const rooms = useFirestore("rooms", roomsCondition);
  console.log("rooms", rooms);
  return (
    <Collapse ghost defaultActiveKey={[1]}>
      <PanelStyled header={"Room list"} key={1}>
        {rooms.map((room) => (
          <LinkStyled key={room.id}>{room.name}</LinkStyled>
        ))}
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
