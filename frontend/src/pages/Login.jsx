const handleSubmit = (e) => {

  e.preventDefault();

  alert("Login successful");

  localStorage.setItem(
    "username",
    formData.username
  );

  navigate("/dashboard");

};