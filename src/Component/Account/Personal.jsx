import { useState } from "react";
import { saveUser } from "../../utils/firestores/userCollection";
import PropType from "prop-types";
import { Space, Button, Input } from "antd";

function Personal({ id, user }) {
  const [firstName, setFirstName] = useState(user.firstName || "");
  const [lastName, setLastName] = useState(user.lastName || "");
  const [email, setEmail] = useState(user.email || "");
  const [phone, setPhone] = useState(user.phone || "");
  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      if (id) {
        await saveUser(id, firstName, lastName, user.email,phone);
        alert("Account update succesfully");
      }
    } catch (error) {
      alert(error);
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
        <label className="form-label">Email</label>
        <Input
          type="text"
          disabled
          className="form-control"
          value={email}
        />
      </div>
      <div className="form-group">
        <label className="form-label">Phone Number</label>
        <Input
          type="tel"
          disabled
          className="form-control"
          value={phone}
        />
      </div>
      <div className="form-group">
        <label className="form-label">First Name</label>
        <Input
          type="text"
          className="form-control"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label className="form-label">Last Name</label>
        <Input
          type="text"
          className="form-control mb-1"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>

      <div className="text-right mt-3">
        <Button type="button" className="btn btn-primary" onClick={onSubmit}>
          Save changes
        </Button>
        &nbsp;
        <Button type="button" className="btn btn-default">
          Cancel
        </Button>
      </div>
    </Space>
  );
}
Personal.propTypes = {
  id: PropType.string,
  user: PropType.object,
};
export default Personal;
