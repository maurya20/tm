export class LoaderService {
  static showLoader = () => {
    let loader = document.createElement("div");
    loader.id = "overlay";
    loader.innerHTML = `<div id="spinner" class="d-flex justify-content-center">
                          <div class="spinner-border" role="status"></div>
                      </div>`;
    const root = document.getElementById("root");
    if (root) {
      root.appendChild(loader);
    }
  };
  static hideLoader = () => {
    const loaderEl = document.getElementById("overlay");
    if (loaderEl) {
      loaderEl.remove();
    }
  };
}
