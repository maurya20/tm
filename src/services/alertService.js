export class TMAlert {
  static showAlert(type, message) {
    const wrapper = document.createElement("div");
    wrapper.id = "tm-alert";
    wrapper.classList.add(
      "tmalert",
      "shadow-lg",
      "bg-body-tertiary",
      "rounded",
      "alert",
      `tm-${type}`,
      "alert-dismissible"
    );
    wrapper.setAttribute("role", "alert");
    wrapper.innerHTML = [
      `<div>${message}</div>`,
      '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    ].join("");
    const root = document.getElementById("root");
    if (root) {
      root.appendChild(wrapper);
    }
    setTimeout(() => {
      const activeTmAlert = document.getElementById("tm-alert");
      if (activeTmAlert) {
        activeTmAlert.remove();
      }
    }, 4000);
  }
  static hideAlert() {
    const wrapper = document.getElementById("tm-alert");
    if (wrapper) {
      wrapper.remove();
    }
  }
}
