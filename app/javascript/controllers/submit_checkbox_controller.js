import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets=['form','checkbox', 'taskContainer', 'task']
  connect() {
    console.log("Hello from our first Stimulus controller")
  }

  submitForm() {
    // this.formTarget.submit();
    console.log("submitForm Connected")
    let url = this.formTarget.action
    let form = this.formTarget
    let value = this.checkboxTarget.checked
    $.ajax({
      type: "PATCH",
      url: url,
      data: `task[completed]=${value}`
      // dataType: "json"
    });
    // console.log(this.formTarget.method)
    console.log(this.checkboxTarget.checked)
    // console.log($form.attr("action"))
    if (this.checkboxTarget.checked) {
      this.taskContainerTarget.classList.add("completed")
    } else {
      this.taskContainerTarget.classList.remove("completed")
    }
    return false;
  }

  // stopRefresh() {
  //   event.preventDefault()
  //   console.log("stopRefresh ran")
  // }
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
