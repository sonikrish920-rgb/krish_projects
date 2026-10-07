const decisionForm = document.getElementById("decisionForm");
const results = document.getElementById("results");
const finalResult = document.getElementById("finalResult");
const scoreStatus = document.getElementById("scoreStatus");
const decisionFields = ["question", "optionA", "optionB"].map(id => document.getElementById(id));

decisionFields.forEach(field => {
  field.addEventListener("input", () => field.setCustomValidity(""));
});

decisionForm.addEventListener("submit", event => {
  event.preventDefault();
  const blankField = decisionFields.find(field => field.value.trim() === "");
  if (blankField) {
    blankField.setCustomValidity("Enter at least one non-space character.");
    blankField.reportValidity();
    return;
  }
  document.getElementById("displayQuestion").textContent =
    document.getElementById("question").value.trim();
  document.getElementById("displayOptions").textContent =
    `${document.getElementById("optionA").value.trim()} vs. ${document.getElementById("optionB").value.trim()}`;
  results.classList.remove("hidden");
  finalResult.classList.add("hidden");
  scoreStatus.textContent = "";
});

document.getElementById("scoreBtn").addEventListener("click", () => {
  const answers = ["q1", "q2", "q3"].map(id => document.getElementById(id).value);
  if (answers.some(answer => answer === "")) {
    finalResult.classList.add("hidden");
    scoreStatus.textContent = "Choose an option for all three questions before calculating.";
    return;
  }

  const scoreA = answers.filter(answer => answer === "A").length;
  const scoreB = answers.length - scoreA;
  const optionA = document.getElementById("optionA").value.trim();
  const optionB = document.getElementById("optionB").value.trim();

  finalResult.textContent = scoreA > scoreB
    ? `${optionA} scores higher (${scoreA} to ${scoreB}).`
    : scoreB > scoreA
      ? `${optionB} scores higher (${scoreB} to ${scoreA}).`
      : "The options are tied. Consider which priorities matter most to you.";
  scoreStatus.textContent = "";
  finalResult.classList.remove("hidden");
});

decisionForm.addEventListener("reset", () => {
  decisionFields.forEach(field => field.setCustomValidity(""));
  results.classList.add("hidden");
  finalResult.classList.add("hidden");
  scoreStatus.textContent = "";
  ["q1", "q2", "q3"].forEach(id => {
    document.getElementById(id).value = "";
  });
});
