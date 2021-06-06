import React from "react";
import AppModal from "./appModal";
import UserLoginItemComponent from "./userLoginItemComponent";

function UserModal({ modalShow, setModalShow, isLogin }) {
  return (
    <div>
      <AppModal
        modalShow={modalShow}
        setModalShow={setModalShow}
        ModalItemComponent={<UserLoginItemComponent isLogin={isLogin} />}
      />
    </div>
  );
}

export default UserModal;
