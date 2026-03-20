document.getElementById("decisionForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const question = document.getElementById("question").value;
  const optionA = document.getElementById("optionA").value;
  const optionB = document.getElementById("optionB").value;

  document.getElementById("displayOptions").textContent = `${optionA} vs ${optionB}`;
  document.getElementById("results").classList.remove("hidden");
});

document.getElementById("scoreBtn").addEventListener("click", function() {
  const answers = [document.getElementById("q1").value, document.getElementById("q2").value, document.getElementById("q3").value];
  let scoreA = answers.filter(a => a === "A").length;
  let scoreB = answers.filter(a => a === "B").length;

  const result = document.getElementById("finalResult");
  result.textContent = scoreA > scoreB ? "Option A seems better!" :
                       scoreB > scoreA ? "Option B seems better!" :
                       "It's a tie! Consider your priorities.";
  result.classList.remove("hidden");
});

document.getElementById("resetBtn").addEventListener("click", function() {
  document.getElementById("decisionForm").reset();
  document.getElementById("results").classList.add("hidden");
  document.getElementById("finalResult").classList.add("hidden");
});