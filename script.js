const devs = {
    renan: {
      nome: "Renan",
      linguagemPreferida: "JavaScript",
      experiencia: "2 anos"
    },
    ana: {
      nome: "Ana",
      linguagemPreferida: "Python",
      experiencia: "3 anos"
    },
    emerson: {
      nome: "Emerson",
      linguagemPreferida: "JavaScript",
      experiencia: "5 anos"
    }
  };
  
  const selectDev = document.getElementById("selectDev");
  const devCard = document.getElementById("devCard");
  const devNome = document.getElementById("devNome");
  const devLinguagem = document.getElementById("devLinguagem");
  const devExp = document.getElementById("devExp");
  
  selectDev.addEventListener("change", () => {
    const selected = selectDev.value;
  
    if (selected && devs[selected]) {
      const dev = devs[selected];
      devNome.textContent = dev.nome;
      devLinguagem.textContent = dev.linguagemPreferida;
      devExp.textContent = dev.experiencia;
      devCard.classList.remove("hidden");
    } else {
      devCard.classList.add("hidden");
    }
  });
  