// Button Status
const buttonsStatus = document.querySelectorAll("[button-status]");
if (buttonsStatus.length > 0) {
  let url = new URL(window.location.href);

  buttonsStatus.forEach(button => {
    button.addEventListener("click", () => {
      const status = button.getAttribute("button-status");
      if (status) {
        url.searchParams.set("status", status)
      } else {
        url.searchParams.delete("status");
      }
      window.location.href = url.href;
    })
  })
}
// End Button Status

// Form Search
const formSearch = document.querySelector("#form-search");

if (formSearch) {
  let url = new URL(window.location.href);

  formSearch.addEventListener("submit", (e) => {
    e.preventDefault();

    const keyword = e.target.elements.keyword.value;

    if (keyword) {
      url.searchParams.set("keyword", keyword)
    } else {
      url.searchParams.delete("keyword");
    }
    window.location.href = url.href;
  })
}
// End FormSearch  

// Pagination
const buttonsPagination = document.querySelectorAll("[button-pagination]");
// "[]": dùng để cái tự định nghĩa
if (buttonsPagination) {
  let url = new URL(window.location.href);
  buttonsPagination.forEach(button => {
    button.addEventListener("click", () => {
      const page = button.getAttribute("button-pagination")

      url.searchParams.set("page", page);
      window.location.href = url.href;
    })
  })

}
// End Pagination

// Checkbox Multi
const checkboxMulti = document.querySelector("[checkbox-multi]");
if (checkboxMulti) {
  const inputCheckAll = checkboxMulti.querySelector("input[name='checkall']");
  const inputsId = checkboxMulti.querySelectorAll("input[name='id']");

  inputCheckAll.addEventListener("click", () => {
    if (inputCheckAll.checked) {
      inputsId.forEach(input => {
        input.checked = true;
      })
    } else {
      inputsId.forEach(input => {
        input.checked = false;
      })
    }
  });

  inputsId.forEach(input => {
    input.addEventListener("click", () => {
      const countChecked = checkboxMulti.querySelectorAll("input[name='id']:checked").length;

      if (countChecked === inputsId.length) {
        inputCheckAll.checked = true;
      } else {
        inputCheckAll.checked = false;
      }
    });
  });
}
// End Checkbox Multib

// Form Change Multi
const formChangeMulti = document.querySelector("[form-change-multi]");
if (formChangeMulti) {
  formChangeMulti.addEventListener("submit", (e) => {
    e.preventDefault(); // giúp ngăn trang k bị load lại

    const checkboxMulti = document.querySelector("[checkbox-multi]");
    const inputsChecked = checkboxMulti.querySelectorAll("input[name='id']:checked");

    const typeChange = e.target.elements.type.value;
    
    if (typeChange == "delete-all") {
      const isConfirm = confirm("Bạn chắc chắn muốn xóa những sản phẩm này chứ?");
      if (!isConfirm) {
        return;
      }
    }

    if (inputsChecked.length > 0) {
      let ids = [];
      const inputIds = formChangeMulti.querySelector("input[name='ids']");

      inputsChecked.forEach(input => {
        ids.push(input.value);
      });

      inputIds.value = ids.join(", "); // chuyển thành string thay vì mảng
      formChangeMulti.submit();

    } else {
      alert("Vui lòng chọn ít nhất 1 sản phẩm!");
    }
  });
}
// End Form Change Multi