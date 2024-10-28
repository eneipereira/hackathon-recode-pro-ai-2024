function mostrarCidade(cidade) {
  const todasCidades = document.querySelectorAll(".cidade");
  const pontosPorCidade = document.querySelectorAll("." + cidade);
  const mapa = document.getElementById("mapa-rs");

  todasCidades.forEach((c) => (c.style.display = "none"));
  pontosPorCidade.forEach((ponto) => (ponto.style.display = "block"));

  switch (cidade) {
    case "porto-alegre":
      mapa.src =
        "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Locator_map_of_Porto_Alegre_in_Rio_Grande_do_Sul.svg/450px-Locator_map_of_Porto_Alegre_in_Rio_Grande_do_Sul.svg.png";
      break;
    case "caxias":
      mapa.src =
        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Locator_map_of_Caxias_do_Sul_in_Rio_Grande_do_Sul.svg/450px-Locator_map_of_Caxias_do_Sul_in_Rio_Grande_do_Sul.svg.png";
      break;
    case "pelotas":
      mapa.src =
        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Locator_map_of_Pelotas_in_Rio_Grande_do_Sul.svg/450px-Locator_map_of_Pelotas_in_Rio_Grande_do_Sul.svg.png";
      break;
    case "santa-maria":
      mapa.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/RioGrandedoSul_Municip_SantaMaria.svg/450px-RioGrandedoSul_Municip_SantaMaria.svg.png";
      break;
    case "canoas":
      mapa.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Locator_map_of_Canoas_in_Rio_Grande_do_Sul.svg/450px-Locator_map_of_Canoas_in_Rio_Grande_do_Sul.svg.png";
      break;
    case "novo-hamburgo":
      mapa.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Locator_map_of_Novo_Hamburgo_in_Rio_Grande_do_Sul.svg/450px-Locator_map_of_Novo_Hamburgo_in_Rio_Grande_do_Sul.svg.png";
      break;
    case "gravatai":
      mapa.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/RioGrandedoSul_Municip_Gravatai.svg/450px-RioGrandedoSul_Municip_Gravatai.svg.png";
      break;
    case "viamao":
      mapa.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/RioGrandedoSul_Municip_Viamao.svg/450px-RioGrandedoSul_Municip_Viamao.svg.png";
      break;
    default:
      mapa.src = "rs.png";
      break;
  }
}

function mostrarDetalhes(btn) {
  let detalhes = btn.nextElementSibling;
  if (detalhes.style.display === "block") {
    detalhes.style.display = "none";
  } else {
    detalhes.style.display = "block";
  }
}

function marcarStatus(status, btn) {
  let statusSpan = btn.parentNode.querySelector(".status-abrigo");

  if (status === "disponivel") {
    statusSpan.textContent = "Disponível";
    statusSpan.style.color = "green";
  } else if (status === "lotado") {
    statusSpan.textContent = "Lotado";
    statusSpan.style.color = "red";
  }
}
