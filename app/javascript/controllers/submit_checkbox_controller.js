import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets=['form','checkbox', 'taskContainer', 'task']
  connect() {
    console.log("Hello from our first Stimulus controller")
  }

  submitForm() {
    this.formTarget.submit();
    console.log("submitForm Ran")
  }

  stopRefresh() {
    event.preventDefault()
    console.log("stopRefresh ran")
  }
}

// Rails.ajax({
//   type: "patch",
//   url: `${this.formTarget.action}`,
//   data: JSON.stringify({
//     "task": { "completed": this.checkboxTarget.checked}
//   }),
//   dataType: "json",
//   contentType: "application/json",
//   success: function (result) {
//     formTarget.submit();
//   },
//   error: function (e) {
//     console.log(e);
//   },
// })
