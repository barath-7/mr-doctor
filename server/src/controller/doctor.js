const {
    createDoctorService,
    doctorLoginService,
  } = require("../service/doctorService");
  
  const createDoctor = async (req, res) => {
    try {
      let { body = {} } = req;
      let response = await createDoctorService(body);
      let { data = {} } = response;
      let { token = "" } = data;
  
      if (response.status == "success") {
        return res.cookie("MRDR", token).status(200).json(response);
      } else {
        return res.status(400).json(response);
      }
    } catch (error) {
      console.log(`Error while creating doctor: ${error}`);
      return res.status(400).json({
        status: "failure",
        message: "Error while creating doctor",
      });
    }
  };
  
  const doctorLogin = async (req, res) => {
    try {
      let { body = {} } = req;
      let response = await doctorLoginService(body);
      let { data = {} } = response;
      let { token = "" } = data;
  
      if (response.status == "success") {
        return res.cookie("MRDR", token).status(200).json(response);
      } else {
        return res.status(400).json(response);
      }
    } catch (error) {
      console.log(`Error while doctor login: ${error}`);
      return res.status(400).json({
        status: "failure",
        message: "Error while doctor login",
      });
    }
  };
  
  module.exports = {
    createDoctor,
    doctorLogin,
  };
  