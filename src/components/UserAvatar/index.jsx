import { styled } from "@mui/system";
import { Avatar } from "@mui/material";

function UserAvatar({ initials }) {
  const StyledAvatar = styled(Avatar)`
    margin-right: 16px;
  `;

  return <StyledAvatar>{initials}</StyledAvatar>;
}

export default UserAvatar;
