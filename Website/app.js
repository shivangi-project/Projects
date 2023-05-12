function validate()
{
    var validFirstName=/^[A-Za-z]+$/;
    var validEmailAddress=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    var fname=document.getElementById('fname').value;
    var lname=document.getElementById('lname').value;
    var email= document.getElementById("email").value;
    var phone_number= document.getElementById("phone_number").value;
    var company_name= document.getElementById("company_name").value;
    var state = document.getElementById("state");
    var describe_ques = document.getElementById("describe_ques");
    var preferred = document.getElementById("preferred");
    var checkbox = document.getElementById('checkbox').value;

    var strUser = state.options[state.selectedIndex].value;
    console.log(state.selectedIndex)
    var strques = describe_ques.options[describe_ques.selectedIndex].value;
    var strpreferred = preferred.options[preferred.selectedIndex].value;

    if(fname== "" || lname=="")
    {
        alert("Name is required");
    }
    else if(!validFirstName.test(fname) || !validFirstName.test(lname))
    {
      alert("Name must be only string");
    }
    else if(email=="")
    {
        alert("Email Address is required");
    }
    else if(!validEmailAddress.test(email))
    {
     alert("Email Addre must be in valid formate with @ symbol")
    }
    else if(phone_number=="")
    {
        alert("Mobile Number is required")
    }
   else if(!validMobileNumber.test(phone_number))
   {
    alert("Mobile Number must be a number");
   }
   else if(phone_number.length!=10)
   {
      alert("Mobile Number must have 10 digits");
   }
    else if(company_name== "")
    {
        alert("Company Name is required");
    }
    
    else if(strUser == 0)
    {
        alert("Please select a state");
    }
    else if(strques == 0)
    {
        alert("Please select a describe yourself question");
    }
    else if(strpreferred == 0)
    {
        alert("Please select a preferred distributor");
    }
    else if (checked != checkbox.checked) 
    {
        alert('Please check terms and conditions')

    }
    else{
      alert('Submit Successful')
      return true;
    }

}