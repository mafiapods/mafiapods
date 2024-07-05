function buscarEndereco() {
    const cep = document.querySelector("#cep").value;
  
    if (cep.length !== 8) {
      alert("CEP inválido");
      return;
    }
  
    const url = `https://viacep.com.br/ws/${cep}/json/`;
  
    fetch(url)
      .then(response => response.json())
      .then(data => {
        if (!data.erro) {
          document.querySelector("#rua").value = data.logradouro;
          document.querySelector("#bairro").value = data.bairro;
          document.querySelector("#cidade").value = data.localidade;
          document.querySelector("#estado").value = data.uf;
        } else {
          alert("CEP não encontrado");
        }
      })
      .catch(error => {
        console.error(error);
        alert("Erro ao buscar endereço");
      });
  }