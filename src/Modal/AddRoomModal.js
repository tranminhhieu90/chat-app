import React, { useContext } from "react";
import { Form, Input, Modal } from "antd";
import { AppContext } from "../components/Context/AppProvider";
import { addDocument } from "../firebase/services";
import { AuthContext } from "../components/Context/AuthProvider";
export default function AddRoomModal() {
  const { isAddRoomVisible, setIsAddRoomVisible } = useContext(AppContext);
  const { uid } = useContext(AuthContext);
  const [form] = Form.useForm();
  const handleOk = () => {
    // add new room to firebase
    addDocument("rooms", { ...form.getFieldValue(), members: [uid] });
    form.resetFields();
    setIsAddRoomVisible(false);
  };
  const handleCancel = () => {
    form.resetFields();
    setIsAddRoomVisible(false);
  };
  return (
    <div>
      <Modal
        title="Create Room"
        visible={isAddRoomVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form form={form} layout="vertical">
          <Form.Item label="Name" name="name">
            <Input placeholder="Add new room" />
          </Form.Item>
          <Form.Item label="Description" name="description">
            <Input.TextArea placeholder="Description" />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}
