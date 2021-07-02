import React from "react";
import { Row, Col, Typography, Button } from "antd";
import firebase, { auth } from "../../firebase/config";
const { Title } = Typography;
const fbProvider = new firebase.auth.FacebookAuthProvider();

function Login(props) {
  const handleFbLogin = async () => {
    const data = await auth.signInWithPopup(fbProvider);
    console.log("data", { data });
  };

  return (
    <div>
      <Row justify="center" style={{ height: 800 }}>
        <Col span={8}>
          <Title style={{ textAlign: "center" }} level={3}>
            Fun chat
          </Title>
          <Button style={{ width: "100%", marginBottom: 5 }}>
            Đăng nhập bằng Google
          </Button>
          <Button style={{ width: "100%" }} onClick={handleFbLogin}>
            Đăng nhập bằng Facebook
          </Button>
        </Col>
      </Row>
    </div>
  );
}

export default Login;
