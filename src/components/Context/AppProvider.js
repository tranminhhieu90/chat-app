import React, { useContext, useMemo, useState } from "react";
import { AuthContext } from "./AuthProvider";
import useFirestore from "../../hooks/useFirestore";

export const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [isAddRoomVisible, setIsAddRoomVisible] = useState(false);
  const [isInviteMemberVisible, setIsInviteMemberVisible] = useState(false);
  const [selectedRoomId, setSelectedRoomId] = useState("");
  const { uid } = useContext(AuthContext);
  const roomsCondition = React.useMemo(() => {
    return {
      fieldName: "members",
      operator: "array-contains",
      compareValue: uid,
    };
  }, [uid]);

  const rooms = useFirestore("rooms", roomsCondition);
  const selectedRoom = useMemo(
    () => rooms.find((room) => room.id === selectedRoomId || {}),
    [rooms, selectedRoomId]
  );
  const userCondition = React.useMemo(() => {
    return {
      fieldName: "uid",
      operator: "in",
      compareValue: selectedRoom?.members,
    };
  }, [selectedRoom?.members]);
  const members = useFirestore("users", userCondition);
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
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
