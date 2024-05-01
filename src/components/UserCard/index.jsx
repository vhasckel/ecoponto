import { Card, CardContent, Typography } from "@mui/material";
import { styled } from "@mui/system";
import UserAvatar from "../UserAvatar";

const StyledCard = styled(Card)`
  display: flex;
  max-height: 90px;
  width: 16em;
  margin-bottom: 10px;
  align-items: center;
`;

const StyledCardContent = styled(CardContent)`
  flex: 1 0 auto;
  display: flex;
  flex-direction: column;
`;

function UserCardStructure({ avatar, children }) {
  return (
    <StyledCard>
      <StyledCardContent>{children}</StyledCardContent>
      {avatar}
    </StyledCard>
  );
}

function extractInitials(name) {
  const names = name.split(" ");
  if (names.length === 1) {
    return names[0][0].toUpperCase();
  } else {
    return `${names[0][0]}${names[names.length - 1][0].toUpperCase()}`;
  }
}

function UserCard({ user }) {
  const { online, name } = user;
  const initials = extractInitials(name);

  return (
    <UserCardStructure avatar={<UserAvatar initials={initials} />}>
      <Typography variant="subtitle1" color="text.secondary">
        {online ? "Online" : "Offline"}
      </Typography>
      <Typography variant="subtitle1">{name}</Typography>
    </UserCardStructure>
  );
}

export default UserCard;
