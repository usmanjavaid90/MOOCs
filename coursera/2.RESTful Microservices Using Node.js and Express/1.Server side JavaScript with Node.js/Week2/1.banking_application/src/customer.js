var customerList=[];

const addCustomer=(CustomerId, CustomerName,CustomerAge,CustomerAddress,CustomerContactNumber,Category)=>{
      // Write the Logic here
      let customer = [CustomerId, CustomerName, CustomerAge, CustomerAddress,CustomerContactNumber, Category]; 
      var present = false;
      for (var person of customerList) {
            if (person[0] == CustomerId) {
                  present = true;
            }
      }
      if (present == false) {
            customerList.push(customer);
      }
}

const updateCustomer=(CustomerId, CustomerName,CustomerAge,CustomerAddress,CustomerContactNumber,Category)=>{
      // Write the Logic here
      for (var i = 0; i < customerList.length; i++) {
            if (customerList[i][0] == CustomerId) {
                  customerList[i] = [CustomerId, CustomerName, CustomerAge, CustomerAddress,CustomerContactNumber, Category];
            }
      }
}
const getAllCustomers=()=>{
  // Write the Logic here
  return customerList;
}


module.exports={addCustomer,updateCustomer,getAllCustomers}