import * as bootstrap from "bootstrap";

export const useConfirmation = () => {
  let cnfDialog = document.createElement("div");
  cnfDialog.classList.add();
  cnfDialog.innerHTML = `
    <div class="modal fade" id="confirmModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="confirmModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="confirmModalLabel">Are you sure?</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <h6>This action cann't be undone!!!!</h6>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary" id="deleteBtn" data-bs-dismiss="modal">Delete</button>
      </div>
    </div>
  </div>
</div>`;

  const showModal = (onYes) => {
    const root = document.getElementById("root");
    if (root) {
      root.appendChild(cnfDialog);
      const myModal = new bootstrap.Modal(
        document.getElementById("confirmModal")
      );
      myModal.show();
      const deleteBtn = document.getElementById("deleteBtn");
      if (deleteBtn) {
        deleteBtn.addEventListener("click", (e) => hide(onYes, e));
      }
    }
  };
  const hide = (onYes, e) => {
    const deleteBtn = document.getElementById("deleteBtn");
    onYes("yes");
    //myModal.dispose();
    if (deleteBtn) {
      deleteBtn.removeEventListener("click", hide);
    }
  };

  return { showModal };
};
