export const handleSubmit = (event) => {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  const userDataTemp = {};
  const userData = {};
  for (const pair of data.entries()) {
    userDataTemp[pair[0]] = pair[1];
  }
  userData["password"] = userDataTemp.password;
  userData["phoneNumber"] = userDataTemp.phoneNumber;
  return userData;
};
