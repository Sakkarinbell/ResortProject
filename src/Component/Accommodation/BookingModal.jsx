import { Modal, Button, Input, Flex } from "antd";
import PropTypes from "prop-types";
import { useMemo, useState } from "react";
import { getData } from "../../utils/localStorageService";
import { useNavigate } from "react-router-dom";
import {
  CHECK_IN,
  CHECK_OUT,
  GUEST,
  UUID,
} from "../../utils/constants/storage";
import { PATH_LOGIN } from "../../utils/constants/path";
import { saveBookings } from "../../utils/firestores/bookingCollection";
function BookingModal({ isOpen, onCancel, price, roomId }) {
  console.log(price);
  const navigate = useNavigate();
  const [amountRoom, setAmountRoom] = useState(0);
  const [phone, setPhone] = useState("");
  const userId = useMemo(() => {
    return getData(UUID);
  }, []);

  const onIncrease = () => setAmountRoom((pre) => pre + 1);
  const onDecrease = () => setAmountRoom((pre) => pre - 1);
  const onClickOk = async (totalPrice, totalRoom, phoneNumber) => {
    try {
      const userId = getData(UUID);
      const checkIn = getData(CHECK_IN);
      const checkOut = getData(CHECK_OUT);
      const guest = getData(GUEST);
      await saveBookings(
        userId,
        roomId,
        checkIn,
        checkOut,
        guest,
        totalPrice,
        totalRoom,
        phoneNumber
      );
      onCancel();
    } catch (error) {
      alert(error);
    }
  };
  if (!userId) {
    return navigate(PATH_LOGIN);
  }
  return (
    <Modal
      open={isOpen}
      onOk={() => onClickOk(price * amountRoom, amountRoom, phone)}
      onCancel={onCancel}
    >
      <h4>{price * amountRoom}</h4>
      <Flex gap="middle">
        <Button onClick={onDecrease}>-</Button>
        <p>{amountRoom}</p>
        <Button onClick={onIncrease}>+</Button>
      </Flex>
      <Input
        placeholder="เบอร์ติดต่อ"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
    </Modal>
  );
}

BookingModal.propTypes = {
  isOpen: PropTypes.bool,
  onCancel: PropTypes.func,
  price: PropTypes.number,
  roomId: PropTypes.string,
};

export default BookingModal;
