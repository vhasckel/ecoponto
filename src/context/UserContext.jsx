import React, { useEffect, useState, createContext, useContext } from "react";
import { LocationContext } from "./LocationContext";

export const UserContext = createContext();

const fetchUsers = async () => {
  const response = await fetch("http://localhost:3000/users");
  if (!response.ok) {
    throw new Error("Erro ao buscar usuários");
  }
  return response.json();
};

export const UserContextProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const { locations } = useContext(LocationContext);

  //quando o componente é carregado pela primeira vez, buscaamos a lista de usuários, esse useEffect é executado apenas uma vez
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchUsers();
        setUsers(data);
      } catch (error) {
        console.error("Erro ao buscar usuários:", error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const storedCPF = localStorage.getItem("userCPF");
    if (storedCPF && users.length > 0) {
      const foundUser = users.find((user) => user.cpf === storedCPF);
      if (foundUser) {
        setCurrentUser(foundUser);
      }
    }
  }, [users]);

  //para poder deletar a conta preciso remover os dados do localStorage e do arquivo JSON
  const deleteAccount = async () => {
    if (!currentUser) {
      return;
    }

    //regra para não deixar que a conta seja deletada se houver localizações vinculadas a ela. usei o cpf para poder associar a conta do usuário com o cadastro que ele fez
    const userHasLocations = locations.some(
      (location) => location.userId === currentUser.cpf
    );

    if (userHasLocations) {
      alert(
        "Você não pode deletar sua conta porque há localizações associadas a você."
      );
      return;
    }

    try {
      //mandamos uma requisição do tipo DELETE pelo fetch para poder remover os dados
      const response = await fetch(
        `http://localhost:3000/users/${currentUser.id}`,
        {
          method: "DELETE",
        }
      );

      if (!response.ok) {
        throw new Error("Falha ao deletar conta");
      }

      // removemos os dados do localStorage que usamos para fazer a autenticação
      localStorage.removeItem("isAuthenticated");
      localStorage.removeItem("userCPF");
      setCurrentUser(null);

      alert("Sua conta foi deletada com sucesso.");
      window.location.href = "/login";
    } catch (error) {
      console.error("Erro ao deletar conta:", error);
      alert("Erro ao deletar conta.");
    }
  };

  const login = async (email, password) => {
    try {
      const response = await fetch("http://localhost:3000/users");
      if (!response.ok) {
        throw new Error("Erro ao buscar usuários");
      }
      const usersData = await response.json();

      //depois que enviamos a requisição para o servidor, fazemos uma busca usando find para encontrar o email recebido pela função
      const user = usersData.find((u) => u.email === email);

      //se o email for encontrado mas a senha não bater ou o email nao for encontrado, alertamos o usuário. se estiver correta, guardamos o cpf e definimos isAuthenticated como true no localStorage para fazer a autenticação
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
      console.error("Erro durante login:", error);
      alert("Erro ao fazer login. Tente novamente mais tarde.");
    }
  };

  const logOut = () => {
    //para podermos fazer o logout da aplicação precisamos apenas remover a autenticação do localStorage
    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem("userCPF");
    setCurrentUser(null);
    window.location.href = "/login";
  };

  const registerUser = async (newUser) => {
    //para que um usuário possa criar um cadastro, seu cpf e email nao podem existir no servidor
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
      //POST é para podermos guardar algum dado, aqui guardamos os dados de um novo usuário
      const response = await fetch("http://localhost:3000/users", {
        method: "POST",
        body: JSON.stringify(newUser),
        headers: { "Content-Type": "application/json" },
      });

      if (!response.ok) {
        throw new Error("Erro ao cadastrar usuário");
      }

      localStorage.setItem("isAuthenticated", "true");
      window.location.href = "/";
      //atualiza a lista de  usuários mantendo o que já tinha, mais o novo usuário
      setUsers((prev) => [...prev, newUser]);
    } catch (error) {
      console.error("Erro ao cadastrar usuário:", error);
      alert("Erro ao cadastrar usuário. Tente novamente mais tarde.");
    }
  };

  return (
    <UserContext.Provider
      value={{
        users,
        login,
        registerUser,
        logOut,
        currentUser,
        deleteAccount,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
