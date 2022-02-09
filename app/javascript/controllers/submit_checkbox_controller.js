import { Controller } from "@hotwired/stimulus"

export default class extends Controller {

  connect() {
    console.log("Hello from our first Stimulus controller")
  }

  submitHello() {
  // const checkbox = document.getElementById('checkbox_submit');
  // console.log(checkbox)
  // console.log("submitCheckbox Connected");
  console.log("Hi hi")
  // Rails.ajax({
  //   url: "/books",
  //   type: "get",
  //   data: "",
  //   success: function (data) { },
  //   error: function (data) { }
  // })
}
}
