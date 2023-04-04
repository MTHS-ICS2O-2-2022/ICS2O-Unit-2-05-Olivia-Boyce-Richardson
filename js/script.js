function enterClicked() {
  // input
  const payPerHour = parseInt.getElementById("pay-per-hour").value
  const hoursWorked = parseInt.getElementById("hours-worked").value

  // process 
  const totalSalary = payPerHour * hoursWorked
  const governmentTakes = (payPerHour * hoursWorked) * 0.18

  // output
  document.getElementById("total-salary").innerHTML = "Your pay will be: " totalSalary "."
  document.getElementById('government-takes').innerHTML = 'The government will take ' governmentTakes '.'
}
