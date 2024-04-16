function calculateNetIncome() {
    var revenue = document.getElementById('revenue').value
    var expense = document.getElementById('expenses').value

    var netIncome = revenue - expense;

    document.getElementById('result').innerText = "Net income: $" + netIncome.toFixed(2);

    if (netIncome > 0) {
        document.getElementById('insight').innerText = "A positive net income is a good sign and indicates good financial responsibility good job"
    }
    if (netIncome == 0) {
        document.getElementById('insight').innerText = "Net Zero income indicates some financial responsibility, but there is room for improvement"
    }
    if (netIncome < 0) {
        document.getElementById('insight').innerText = "Negative net income indicates that improvement is needed"
    }
}

// calculate loan function

function calculateLoan() {
    var loanAmount = document.getElementById("loanAmount").value
    var loanTerm = document.getElementById("loanTerm").value
    var loanInterest = document.getElementById("loanInterest").value /100 /12;

    var monthlyPayment = (loanAmount * loanInterest) / (1 - Math.pow(1 + loanInterest, -loanTerm))
    var totalPriciple = monthlyPayment * loanTerm;
    var totalInterest = totalPriciple - loanAmount;

    if (document.getElementById("loanInterest").value > 20 ) {
        document.getElementById("insight2").innerText = "The interest rate on this loan is considerably high and comparable to loan rates found on credit cards and payday loans"
    }
    if (document.getElementById("loanInterest").value <= 20 ) {
        document.getElementById("insight2").innerText = "The interest rate on this loan is fairly high"
    }
    if (document.getElementById("loanInterest").value <= 5 ) {
        document.getElementById("insight2").innerText = "The interest rate on this loan is fairly low comparable to a mortgage or car loan obtained with a high credit score"
    }

        document.getElementById('monthlyPayment').innerText = "Estimated Monthly Payment: $" + monthlyPayment.toFixed(2);
        document.getElementById('resultNetPaid').innerText = "Total Amount Paid Over Loan Term: $" + totalPriciple.toFixed(2);
        document.getElementById('resultNetInterest').innerText = "Total Interest Paid on Loan: $" + totalInterest.toFixed(2);
    
        document.getElementById("insight3").innerText = "This essentially means that you are paying an additional $" + totalInterest.toFixed(2) + " that you would not have paid if you paid the full amount initially."

}

function calculateInvestment() {
    var principal = parseFloat(document.getElementById("principal").value);
    var rate = parseFloat(document.getElementById("rate").value) / 100;
    var months = parseInt(document.getElementById("months").value);

    var monthlyRate = rate / 12;


    var total = principal;

    for (var i = 0; i < months; i++) {
        var interest = total * monthlyRate;
        total += interest;

    }

    var returnMoney = total - principal;

    document.getElementById("netInvestment").innerHTML = "Your $" + principal + " will increase to $" + total.toFixed(2) + " which means your gained $" + returnMoney.toFixed(2) + " on your initial investment";
    

}

