import { Controller } from "@hotwired/stimulus"

export default class extends Controller {

  connect() {
    console.log("Hello from our first Stimulus controller")
  }

  submitCheckbox() {
  const checkbox = document.getElementById('checkbox_submit');
  console.log(checkbox)
  checkbox.addEventListener('change', (event) => {
    console.log("submitCheckbox Connected");
    // console.log(event.currentTarget)
  });
  // Rails.ajax({
  //   url: "/books",
  //   type: "get",
  //   data: "",
  //   success: function (data) { },
  //   error: function (data) { }
  // })
}
}
