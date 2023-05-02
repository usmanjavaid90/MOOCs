var category = function category(key) {
  
  // Write the Logic here
  let loan = {
    pl: "Personal Loan",
    PL: "Personal Loan",
    EL: "Education Loan",
    Vl: "Vehicle Loan",
    VL: "Vehicle Loan",
    hL: "Home Loan",
    HL: "Home Loan"
  }
return loan[key];
  };
  
  module.exports = {
    category: category
  };