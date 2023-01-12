export const handleSubmit = (event) => {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  const userDataTemp = {};
  const userData = {};
  for (const pair of data.entries()) {
    userDataTemp[pair[0]] = pair[1];
  }
  userData["name"] = userDataTemp.firstName + " " + userDataTemp.lastName;
  userData["email"] = userDataTemp.email;
  userData["password"] = userDataTemp.password;
  userData["phoneNumber"] = userDataTemp.phoneNumber;
  userData["dateOfBirth"] = userDataTemp.dob;
  userData["address"] = userDataTemp.address + "\n" + userDataTemp.pincode;
  userData["aadhaarNumber"] = userDataTemp.aadhar;
  userData["gender"] = userDataTemp.gender;
  userDataTemp.doctorId.length > 1
    ? (userData["doctorId"] = userDataTemp.doctorId)
    : (userData["doctorId"] = null);
  userDataTemp.doctorId.length > 1
    ? (userData["role"] = "doctor")
    : (userData["role"] = null);
  console.log(userData);
  return userData;
};
