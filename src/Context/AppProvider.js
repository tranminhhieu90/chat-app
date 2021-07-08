import React, { useContext, useMemo, useState } from "react";
import useFirestore from "../hooks/useFirestore";
import { AuthContext } from "./AuthProvider";

export const AppContext = React.createContext();

export default function AppProvider({ children }) {
  const [isAddRoomVisible, setIsAddRoomVisible] = useState(false);
  const [isInviteMemberVisible, setIsInviteMemberVisible] = useState(false);
  const [selectedRoomId, setSelectedRoomId] = useState("");
  const {
    user: { uid },
  } = useContext(AuthContext);
  const roomsCondition = React.useMemo(() => {
    return {
      fieldName: "members",
      operator: "array-contains",
      compareValue: uid,
    };
  }, [uid]);

  const rooms = useFirestore("rooms", roomsCondition);

  const selectedRoom = useMemo(() => {
    return rooms.find((room) => room.id === selectedRoomId) || {};
  }, [rooms, selectedRoomId]);

  const userCondition = React.useMemo(() => {
    return {
      fieldName: "uid",
      operator: "in",
      compareValue: selectedRoom?.members,
    };
  }, [selectedRoom?.members]);

  const members = useFirestore("users", userCondition);

  const clearState = () => {
    setSelectedRoomId("");
    setIsAddRoomVisible(false);
    setIsInviteMemberVisible(false);
  };

  return (
    <AppContext.Provider
      value={{
        rooms,
        members,
        isAddRoomVisible,
        selectedRoom,
        setIsAddRoomVisible,
        selectedRoomId,
        setSelectedRoomId,
        isInviteMemberVisible,
        setIsInviteMemberVisible,
        clearState,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
