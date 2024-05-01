export const useFetchCEP = async (cep, setValue) => {
  if (cep) {
    try {
      const res = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
      const dados = await res.json();
      if (!dados.erro) {
        setValue("neighborhood", dados.bairro);
        setValue("street", dados.logradouro);
        setValue("state", dados.uf);
        setValue("city", dados.localidade);
      } else {
        console.error("CEP não encontrado");
      }
    } catch (error) {
      console.error("Erro ao buscar CEP:", error);
    }
  }
};
