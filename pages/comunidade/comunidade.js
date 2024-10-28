const form = document.getElementById("helpForm");
const submissionList = document.getElementById("submissionList");

function displaySubmissions() {
  let submissions = JSON.parse(localStorage.getItem("submissions")) || [];
  submissionList.innerHTML = "";
  submissions.forEach((submission, index) => {
    const div = document.createElement("div");
    div.classList.add("submission");
    div.innerHTML = `<p><strong>Nome:</strong> ${submission.nome}</p>
    <p><strong>Celular:</strong> ${submission.celular}</p>
    <p><strong>Email:</strong> ${submission.email}</p>
    <p><strong>Localização:</strong> ${submission.localizacao}</p>
    <p><strong>Status:</strong> ${submission.status}</p>
    <button type="button" class="btn-excluir" onclick=deleteSubmission(${index})>X</button>`;
    submissionList.appendChild(div);
  });
}

function saveSubmission(submission) {
  let submissions = JSON.parse(localStorage.getItem("submissions")) || [];
  submissions.push(submission);
  localStorage.setItem("submissions", JSON.stringify(submissions));
  displaySubmissions();
}

function deleteSubmission(index) {
  let submissions = JSON.parse(localStorage.getItem("submissions")) || [];
  submissions.splice(index, 1);
  localStorage.setItem("submissions", JSON.stringify(submissions));
  displaySubmissions();
}

document.addEventListener("DOMContentLoaded", displaySubmissions);

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const nome = document.getElementById("nome").value;
  const celular = document.getElementById("celular").value;
  const email = document.getElementById("email").value;
  const localizacao = document.getElementById("localizacao").value;
  const status = document.querySelector('input[name="status"]:checked').value;

  const submission = { nome, celular, email, localizacao, status };
  saveSubmission(submission);

  form.reset();
});
