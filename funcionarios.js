document.addEventListener("DOMContentLoaded", function() {

    const funcionarios = [
      { nome: "Ana Souza", cargo: "Desenvolvedora Front-end", salario: 5000 },
      { nome: "Carlos Lima", cargo: "Analista de Sistemas", salario: 6200 },
      { nome: "Mariana Oliveira", cargo: "UX Designer", salario: 4800 },
      { nome: "João Pereira", cargo: "Gerente de Projetos", salario: 8500 },
      { nome: "Fernanda Costa", cargo: "Desenvolvedora Back-end", salario: 7000 }
    ];
  
    const lista = document.getElementById("lista-funcionarios");
  
    funcionarios.forEach(funcionario => {
      const item = document.createElement("li");
      item.textContent = `${funcionario.nome} trabalha como ${funcionario.cargo} e ganha R$${funcionario.salario}`;
      lista.appendChild(item);
    });
  
  });
