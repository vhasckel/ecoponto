import { Typography } from "@mui/material";
import UserAvatar from "../UserAvatar";

import styles from "./styles.module.css";

function UserCard({ user }) {
  function extractInitials(name) {
    const names = name.split(" ");
    if (names.length === 1) {
      return names[0][0].toUpperCase();
    } else {
      return `${names[0][0]}${names[names.length - 1][0].toUpperCase()}`;
    }
  }

  const { online, name } = user;
  const initials = extractInitials(name);

  return (
    <>
      {online && (
        <div className={styles.container}>
          <UserAvatar initials={initials} />
          <div className={styles.info}>
            <Typography variant="subtitle1" color="text.secondary">
              online
            </Typography>
            <Typography variant="subtitle1">{name}</Typography>
          </div>
        </div>
      )}
    </>
  );
}

export default UserCard;
