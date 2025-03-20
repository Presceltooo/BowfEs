// Change Status
const buttonChangeStatus = document.querySelectorAll("[button-change-status]"); //thuộc tính tự định nghĩa để trong []

if (buttonChangeStatus.length > 0) {
  const formChangeStatus = document.querySelector("#form-change-status");
  const path = formChangeStatus.getAttribute("data-path");
  

  buttonChangeStatus.forEach(button => {
    button.addEventListener("click", () => {
      const statusCurrent = button.getAttribute("data-status");
      const id = button.getAttribute("data-id");

      let statusChange = statusCurrent == "active" ? "inactive" : "active";

      // console.log(statusCurrent);
      // console.log(id);
      // console.log(statusChange);

      const action = path + `/${statusChange}/${id}?_method=PATCH`; //tạo phương thức PATCH
      formChangeStatus.action = action;

      formChangeStatus.submit();
    });
  });
}
// End Change Status

// Delete Item
const buttonsDelete = document.querySelectorAll("[button-delete]");
if (buttonsDelete.length > 0) {
  const formDeleteItem = document.querySelector("#form-delete-item");
  const path = formDeleteItem.getAttribute("data-path");

  buttonsDelete.forEach(button => {
    button.addEventListener("click", () => {
      const isConfirm = confirm("Bạn chắc chắn muốn xóa sản phẩm này chứ?");
      
      if (isConfirm) {
        const id = button.getAttribute("data-id");

        const action = `${path}/${id}?_method=DELETE`;

        formDeleteItem.action = action;
        formDeleteItem.submit();
      }
    });
  });
}
// EndDelete Item