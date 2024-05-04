import { Avatar } from "@mui/material";
import { useContext, useState } from "react";
import { UserContext } from "../../context/UserContext";

import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

import styles from "./styles.module.css";
import { Link } from "react-router-dom";

function ProfileMenu() {
  const { logOut, deleteAccount } = useContext(UserContext);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Avatar
        className={styles.avatar}
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        VH
      </Avatar>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={logOut}>Logout</MenuItem>
        <MenuItem onClick={handleClose}>
          <Link to="/lista-de-localizacoes">Pontos de coleta</Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link to="/cadastrar-localizacao">Cadastrar ponto de coleta</Link>
        </MenuItem>
        <MenuItem onClick={deleteAccount}>
          <Link to="/login">Deletar minha conta</Link>
        </MenuItem>
      </Menu>
    </div>
  );
}

export default ProfileMenu;
