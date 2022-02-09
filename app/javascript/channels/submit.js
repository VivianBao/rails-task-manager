const submitCheckbox = () => {
  const checkbox = document.getElementById('checkbox_submit');
  checkbox.addEventListener('change', (event) => {
    console.log("Connected");
  });
  // Rails.ajax({
  //   url: "/books",
  //   type: "get",
  //   data: "",
  //   success: function (data) { },
  //   error: function (data) { }
  // })
}
submitCheckbox();
