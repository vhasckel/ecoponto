const validationRules = {
  name: {
    required: "Este campo é obrigatório",
    minLength: {
      value: 3,
      message: "O nome deve ter pelo menos 3 caracteres",
    },
    maxLength: {
      value: 20,
      message: "O nome não pode ter mais de 20 caracteres",
    },
  },
  cpf: {
    required: "CPF é obrigatório",
    minLength: {
      value: 11,
      message: "O CPF deve ter 11 caracteres",
    },
    maxLength: {
      value: 11,
      message: "O CPF deve ter 11 caracteres",
    },
  },
  email: {
    required: "E-mail é obrigatório",
    pattern: {
      value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      message: "Formato de e-mail inválido",
    },
  },
  cep: {
    required: "CEP é obrigatório",
    minLength: {
      value: 8,
      message: "O CEP deve ter 8 caracteres",
    },
    maxLength: {
      value: 8,
      message: "O CEP deve ter 8 caracteres",
    },
  },
  password: {
    required: "Senha é obrigatória",
    minLength: {
      value: 8,
      message: "A senha deve ter pelo menos 8 caracteres",
    },
    pattern: {
      value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/,
      message:
        "A senha deve conter pelo menos uma letra maiúscula, uma minúscula e um número",
    },
  },
  userIdentification: {
    required: "É necessário usermane como identificador",
    minLength: {
      value: 3,
      message: "O username deve ter pelo menos 3 caracteres",
    },
    maxLength: {
      value: 20,
      message: "O username não pode ter mais de 20 caracteres",
    },
  },
  latitude: {
    required: "Este campo nao pode ficar vazio",
    pattern: {
      value: /^-?(?:[1-8]?\d|90)\.\d+$/,
      message: "Escreva um valor válido",
    },
  },
  longitude: {
    required: "Este campo nao pode ficar vazio",
    pattern: {
      value: /^-?(?:1[0-7]\d|0?\d{1,2}|180)\.\d+$/,
      message: "Escreva um valor válido",
    },
  },
};

export default validationRules;
