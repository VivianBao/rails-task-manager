import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets=['form','checkbox']
  connect() {
    console.log("Hello from our first Stimulus controller")
  }

  submitHello() {
  // const checkbox = document.getElementById('checkbox_submit');
  // console.log(checkbox)
  // console.log("submitCheckbox Connected");
  console.log(this.checkboxTarget.checked)
  console.log(this.formTarget)
  Rails.ajax({
    type: "patch",
    url: `${this.formTarget.action}`,
    data: JSON.stringify({
      "task": { "completed": this.checkboxTarget.checked}
    }),
    dataType: "json",
    contentType: "application/json",
    success: function (result) {
      formTarget.submit();
    },
    error: function (e) {
      console.log(e);
    },
  })
  }
}
