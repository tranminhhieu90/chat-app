import { UserAddOutlined } from "@ant-design/icons";
import { Button, Tooltip, Avatar, Input, Form } from "antd";
import React, { useContext, useMemo } from "react";
import styled from "styled-components";
import { AppContext } from "../../Context/AppProvider";
import Message from "../Message";
const ChatWindow = () => {
  const { selectedRoom, members } = useContext(AppContext);
  return (
    <WrappedStyled>
      <HeaderStyled>
        <div className="header__info">
          <p className="header_title">{selectedRoom?.name}</p>
          <span className="description"> {selectedRoom?.description}</span>
        </div>
        <ButtonGroupStyled>
          <Button icon={<UserAddOutlined />} type="text">
            Invite
          </Button>
          <Avatar.Group size="small" maxCount={2}>
            {members.map((member) => (
              <Tooltip title={member.displayName} key={member.id}>
                <Avatar src={member.photoURL}>
                  {member.photoURL
                    ? ""
                    : member.displayName?.charAt(0)?.toUpperCase()}
                </Avatar>
              </Tooltip>
            ))}
          </Avatar.Group>
        </ButtonGroupStyled>
      </HeaderStyled>
      <ContentStyled>
        <MessageListStyled>
          <Message
            text="Test 111"
            photoURL={null}
            displayName="Hieu"
            createdAt={123223232233}
          />
          <Message
            text="Test 2222"
            photoURL={null}
            displayName="Dao"
            createdAt={123223232233}
          />
          <Message
            text="Test 333"
            photoURL={null}
            displayName="Hieu TRan"
            createdAt={123223232233}
          />
          <Message
            text="Test 444"
            photoURL={null}
            displayName="Hieu TRan"
            createdAt={123223232233}
          />
        </MessageListStyled>
        <FormStyled>
          <Form.Item>
            <Input
              placeholder="Enter messenger"
              bordered={false}
              autoComplete="off"
            />
          </Form.Item>
          <Button type="primary">Send</Button>
        </FormStyled>
      </ContentStyled>
    </WrappedStyled>
  );
};

const HeaderStyled = styled.div`
  display: flex;
  justify-content: space-between;
  height: 56px;
  padding: 0 16px;
  align-items: center;
  border-bottom: 1px solid #bfbfbf38;

  .header {
    &__info {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
    &__title {
      margin: 0
      font-weight: bold;
    }
    &__description{
      font-size: 12px;
    }
  }
`;

const ButtonGroupStyled = styled.div`
  display: flex;
  align-items: center;
`;
const ContentStyled = styled.div`
  height: calc(100% - 56px);
  display: flex;
  flex-direction: column;
  padding: 11px;
  justify-content: flex-end;
`;

const FormStyled = styled(Form)`
  display: flex;
  justify-content: space-between;
  align-item: center;
  padding: 2px 2px 2px 0;
  border: 1px solid rgb(230, 230, 230);
  border-radius: 2px;

  .ant-form-item {
    flex: 1;
    margin-bottom: 0;
  }
`;
const WrappedStyled = styled.div`
  height: 100vh;
`;
const MessageListStyled = styled.div`
  max-height: 100%;
  overflow-y: auto;
`;
export default ChatWindow;
