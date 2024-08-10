const dataArray = [];
const buttonSave = document.getElementById("save");

(function(){
    emailjs.init("95HBr6eBpDDRZArj3");
})();

buttonSave.addEventListener("click", (event) => {
  event.preventDefault();
  const name = document.getElementById("name").value;
  const mail = document.getElementById("mail").value;
  const proj = document.getElementById("proj").value;

  const savedData = {
    name: name,
    mail: mail,
    proj: proj,
  };

  dataArray.push(savedData);

  var serviceId = "service_m3z26i2";
  var tempId = "template_hu95mvq";

  var tempParams = {
    name: name,
    mail: mail,
    proj: proj,
  };

  emailjs.send(serviceId , tempId , savedData).then(function(response){
    console.log("Success",response.status , response.text);    
  }),function(error){
    console.log(error);
    console.log("Failure");
  }

  document.getElementById("myForm").reset();
});