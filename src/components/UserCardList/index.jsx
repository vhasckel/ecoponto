import { useContext } from "react";
import { Box } from "@mui/material";
import { UserContext } from "../../context/UserContext";

import UserCard from "../../components/UserCard";
import NoUsersFound from "../../components/NoUserFound";

function UserCardList() {
  const { users } = useContext(UserContext);

  if (!users || users.length === 0) {
    return <NoUsersFound />;
  }

  return (
    <Box display="flex" flexDirection="column">
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </Box>
  );
}

export default UserCardList;
