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
        document.getElementById('insight').innerText = "Net Zero income indicates some financial responsibility, but there is room for improvement"
    }
}