import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets=['form','checkbox']
  connect() {
    console.log("Hello from our first Stimulus controller")
  }

  submitHello() {
    this.formTarget.submit();
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
  }
}
