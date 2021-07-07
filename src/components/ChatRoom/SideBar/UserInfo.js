import { Avatar, Button, Typography } from "antd";
import React, { useEffect } from "react";
import styled from "styled-components";
import { auth, db } from "../../../firebase/config";
import { AuthContext } from "../../Context/AuthProvider";
const UserInfo = () => {
  const { displayName, photoURL } = React.useContext(AuthContext);
  return (
    <WrapperStyled>
      <div>
        <Avatar src={photoURL}>
          {photoURL ? "" : displayName?.charAt(0).toUpperCase()}
        </Avatar>
        <Typography.Text className="username">{displayName}</Typography.Text>
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
