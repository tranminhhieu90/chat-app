import React, { useContext } from "react";
import { Form, Select, Modal } from "antd";
import { AppContext } from "../components/Context/AppProvider";
import { addDocument } from "../firebase/services";
import { AuthContext } from "../components/Context/AuthProvider";
export default function AddRoomModal() {
  const { isInviteMemberVisible, setIsInviteMemberVisible } =
    useContext(AppContext);
  const { uid } = useContext(AuthContext);
  const [form] = Form.useForm();
  const handleOk = () => {
    // add new room to firebase
    addDocument("rooms", { ...form.getFieldValue(), members: [uid] });
    form.resetFields();
    setIsInviteMemberVisible(false);
  };
  const handleCancel = () => {
    form.resetFields();
    setIsInviteMemberVisible(false);
  };
  return (
    <div>
      <Modal
        title="Invite Member"
        visible={isInviteMemberVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form form={form} layout="vertical"></Form>
      </Modal>
    </div>
  );
}
