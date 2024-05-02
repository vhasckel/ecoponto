import { useContext } from "react";
import { Box } from "@mui/material";
import { UserContext } from "../../context/UserContext";

import UserCard from "../../components/UserCard";
import NoUsersFound from "../../components/NoUserFound";

import styles from "./styles.module.css";

function UserCardList() {
  const { users } = useContext(UserContext);

  if (!users || users.length === 0) {
    return <NoUsersFound />;
  }

  return (
    <div className={styles.container}>
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
}

export default UserCardList;
