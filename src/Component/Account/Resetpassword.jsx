import { useState } from "react";
import { auth } from "../../config/firebase";
import PropType from "prop-types";
import { Space, Button, Input } from "antd";

function Resetpassword({ user }) {
  const [currentPass, setCurrentPass] = useState("");
  const [newPass, setNewPass] = useState("");
  const [confirmNamePass, setConfirmNewPass] = useState("");
  const onSubmit = async () => {
    try {
      if (!user) {
        alert("user not found");
      }
      if (newPass !== confirmNamePass) {
        return alert("new pass and comfirm  incorect");
      }
      const signInUser = await auth.signInWithEmailAndPassword(
        user.email,
        currentPass
      );
      if (!signInUser.user.uid) return alert("current password incorrect");

      const currentUser = auth.currentUser;
      await currentUser.updatePassword(newPass);
      alert("change password success");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <Space
      direction="vertical"
      size="middle"
      style={{
        display: "flex",
        alignItems: "center",
        height: "40vh",
        marginTop: "20px",
      }}
    >
      <div className="form-group">
        <label className="form-label">Current password</label>
        <Input
          type="password"
          className="form-control"
          value={currentPass}
          onChange={(e) => setCurrentPass(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label className="form-label">New password</label>
        <Input
          type="password"
          className="form-control"
          value={newPass}
          onChange={(e) => setNewPass(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label className="form-label">Confirm new password</label>
        <Input
          type="password"
          className="form-control"
          value={confirmNamePass}
          onChange={(e) => setConfirmNewPass(e.target.value)}
        />
      </div>
      <div className="card">
        <div className="text-right mt-3">
          <Button type="button" className="btn btn-primary" onClick={onSubmit}>
            Save changes
          </Button>
          &nbsp;
          <Button type="button" className="btn btn-default">
            Cancel
          </Button>
        </div>
      </div>
    </Space>
  );
}

Resetpassword.propTypes = {
  user: PropType.object,
};

export default Resetpassword;
