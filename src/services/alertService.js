export class TMAlert {
  static showAlert(type, message) {
    const wrapper = document.createElement("div");
    wrapper.classList.add(
      "tmalert",
      "shadow-lg",
      "bg-body-tertiary",
      "rounded"
    );
    wrapper.innerHTML = [
      `<div class="alert alert-${type} alert-dismissible" role="alert">`,
      `   <div>${message}</div>`,
      '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
      "</div>",
    ].join("");
    const root = document.getElementById("root");
    if (root) {
      root.appendChild(wrapper);
    }
  }
}
