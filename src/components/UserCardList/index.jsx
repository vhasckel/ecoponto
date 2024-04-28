import { useContext } from "react";
import { Box, Card, CardContent, Typography } from "@mui/material";
import { UserContext } from "../../context/UserContext";
import { styled } from "@mui/system";

const StyledCard = styled(Card)`
  display: flex;
  max-height: 90px;
  width: 16em;
  margin-bottom: 10px;
`;

const StyledCardContent = styled(CardContent)`
  flex: 1 0 auto;
  display: flex;
  flex-direction: row;
`;

function UserCard({ user }) {
  const { online, username } = user;

  return (
    <StyledCard>
      <StyledCardContent>
        <Typography variant="subtitle1">
          {online ? "Online" : "Offline"}
        </Typography>
        <Typography variant="subtitle1" color="text.secondary">
          {username} {/* Corrigi o erro de digitação */}
        </Typography>
      </StyledCardContent>
    </StyledCard>
  );
}

function UserCardList() {
  const { users } = useContext(UserContext);

  if (!users || users.length === 0) {
    return (
      <Typography variant="subtitle1">Nenhum usuário encontrado</Typography>
    );
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
