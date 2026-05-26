const handleSubmit = async (e) => {

  e.preventDefault();

  localStorage.setItem(
    "username",
    formData.username
  );

  alert("Login successful");

  navigate("/dashboard");

};