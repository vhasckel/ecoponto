import React, { useEffect, useState, createContext } from "react";

export const UserContext = createContext();

const fetchUsers = async (setUsers) => {
  try {
    const response = await fetch("http://localhost:3000/users");
    const data = await response.json();
    setUsers(data);
    console.log("componente userContext", data);
  } catch (error) {
    console.error("Error fetching users:", error);
  }
};

export const UserContextProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const storedCPF = localStorage.getItem("userCPF");
    if (storedCPF) {
      const foundUser = users.find((user) => user.cpf === storedCPF);
      if (foundUser) {
        setCurrentUser(foundUser);
      }
    }
  }, [users]);

  useEffect(() => {
    fetchUsers(setUsers);
  }, []);

  const login = async (email, password) => {
    try {
      const response = await fetch("http://localhost:3000/users");
      const users = await response.json();
      const user = users.find((u) => u.email === email);

      if (user) {
        if (user.password === password) {
          localStorage.setItem("userCPF", user.cpf);
          setCurrentUser(user);
          localStorage.setItem("isAuthenticated", "true");
          window.location.href = "/";
        } else {
          alert("Senha incorreta");
        }
      } else {
        alert("Usuário não encontrado");
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  const logOut = () => {
    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem("userCPF");
    setCurrentUser(null);
    window.location.href = "/login";
  };

  const registerUser = async (newUser) => {
    const existingCPF = users.find((user) => user.cpf === newUser.cpf);
    const existingEmail = users.find((user) => user.email === newUser.email);

    if (existingCPF) {
      alert("CPF já cadastrado");
      return;
    }

    if (existingEmail) {
      alert("Email já cadastrado");
      return;
    }
    try {
      await fetch("http://localhost:3000/users", {
        method: "POST",
        body: JSON.stringify(newUser),
        headers: { "Content-Type": "application/json" },
      });

      localStorage.setItem("isAuthenticated", "true");

      window.location.href = "/";
      fetchUsers(setUsers);
    } catch (error) {
      console.error("Erro ao cadastrar usuário:", error);
      alert("Erro ao cadastrar usuário");
    }
  };
  return (
    <UserContext.Provider
      value={{ users, login, registerUser, logOut, currentUser }}
    >
      {children}
    </UserContext.Provider>
  );
};
