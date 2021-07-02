import { Avatar, Button, Typography } from "antd";
import React from "react";
import styled from "styled-components";
import { auth } from "../../../firebase/config";
const UserInfo = () => {
  return (
    <WrapperStyled>
      <div>
        <Avatar src={"a"} />
        <Typography.Text className="username">ABC</Typography.Text>
      </div>
      <Button
        ghost
        onClick={() => {
          auth.signOut();
        }}
      >
        Log Out
      </Button>
    </WrapperStyled>
  );
};

const WrapperStyled = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 12px 16px;
  border-bottom: 1px solid rgba(82, 38, 83);
  .username {
    color: white;
    margin-left: 5px;
  }
`;
export default UserInfo;
