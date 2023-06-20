document.getElementById("loanForm").addEventListener("submit", function(event) {
  event.preventDefault(); 

 
  const principal = parseFloat(document.getElementById("principal").value);
  const tenure = parseInt(document.getElementById("tenure").value);
  const interestRate = parseFloat(document.getElementById("interestRate").value);

 
  if (isNaN(principal) || isNaN(tenure) || isNaN(interestRate)) {
    document.getElementById("result").textContent = "Please enter valid input values.";
    return;
  }


  const monthlyInterestRate = interestRate / 100 / 12;
  const totalMonths = tenure * 12;
  const emi = (principal * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, totalMonths)) /
    (Math.pow(1 + monthlyInterestRate, totalMonths) - 1);


  document.getElementById("result").textContent = "EMI: " + emi.toFixed(2);
});
