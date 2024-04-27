// validationRules.js
export const validationRules = {
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
};
