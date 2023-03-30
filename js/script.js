// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Mr. Coxall
// Created on: Sep 2020
// This file contains the JS functions for index.html
// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Mr. Coxall
// Created on: Sep 2020
// This file contains the JS functions for index.html
function enterClicked() {
  // input
  const pay = document.getElementById("pay").value
  const hours = document.getElementById("hours").value

  // output
  document.getElementById('pay').innerHTML = `Your pay will be: $ ${takeHomeSalary.toFixed(2)}`
  document.getElementById('pay').innerHTML = 'Your pay will be: $' + takeHomeSalary.toFixed(2)
}
