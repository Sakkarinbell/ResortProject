import Navbar from "../Navbar";
import { useEffect, useMemo, useState } from "react";
import { Card } from "antd";
import { UUID } from "../../utils/constants/storage";
import { getData } from "../../utils/localStorageService";
import { fetchUser } from "../../utils/firestores/userCollection";
import { Tabs } from "antd";
import Personal from "./Personal";
import Resetpassword from "./Resetpassword";
function Account() {
  const userId = useMemo(() => {
    return getData(UUID);
  }, []);

  const [user, setUser] = useState(null);
  useEffect(() => {
    onFetchBookings();
  }, []);

  const onFetchBookings = async () => {
    try {
      if (!userId) return;
      const { user } = await fetchUser(userId);
      if (user) {
        const userData = user.data();
        setUser(userData);
      }
    } catch (error) {
      alert(error.message);
    }
  };

  if (!userId) {
    return <p>Page not found</p>;
  }
  if (!user) {
    return <p>loading ...</p>;
  }

  return (
    <>
      <Navbar />
      <Card>
        <Tabs
          tabPosition="left"
          items={["Personal", "Change Password"].map((label) => {
            return {
              label,
              key: label,
              children:
                label === "Personal" ? (
                  <Personal id={userId} user={user} />
                ) : (
                  <Resetpassword user={user} />
                ),
            };
          })}
        />
      </Card>
    </>
  );
}

export default Account;
