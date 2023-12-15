
function validateForm() {
  // Kiểm tra xem tất cả các trường đã được điền đầy đủ hay chưa
const form = document.getElementById('register-service');
var petname = form.querySelector('input[name="petname"]').value;
var petspecies = form.querySelector('input[name="petspecies"]').value;
var petgender = form.querySelector('input[name="petgender"]').value;
var petweight = form.querySelector('input[name="petweight"]').value;
var service = form.querySelector('input[name="service"]:checked').value;
var date = form.querySelector('input#date').value;
var time = form.querySelector('input#time').value;
var ownername = form.querySelector('input[name="ownername"]').value;
var phone = form.querySelector('input[name="phone"]').value;
var email = form.querySelector('input[name="email"]').value;

if (
  petname === "" ||
  petspecies === "" ||
  petgender === "" ||
  petweight === "" ||
  !service ||
  date === "" ||
  time === "" ||
  ownername === "" ||
  phone === "" ||
  email === ""
) {
  alert("Vui lòng điền đầy đủ thông tin trong biểu mẫu.");
  // Ngăn chặn việc gửi biểu mẫu nếu thông tin còn trống
} else {
  // Tiếp tục xử lý việc gửi biểu mẫu nếu tất cả trường đều đã được điền
  // Điều này có thể làm bằng cách sử dụng AJAX hoặc gửi dữ liệu đến một trang máy chủ.
}
}


///Show confirm
function bookAppointment() {
  document.querySelector('input[type="submit"]').addEventListener('click', function() {
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: 'btn btn-success',
          cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false
      })
      
      swalWithBootstrapButtons.fire({
        title: 'Xác nhận đặt lịch',
        imageUrl: '/assets/img/logo_alert.png',
        imgWidth:'50px',
        showCancelButton: true,
        confirmButtonText: 'Có',
        cancelButtonText: 'Hủy',
        reverseButtons: true
      }).then((result) => {
        if (result.isConfirmed) {
          swalWithBootstrapButtons.fire(
            'Hoàn thành',
            'Bạn đã đặt lịch thành công',
            'success'
          )
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire(
            'Đã hủy',
            'Bạn đã hủy đặt lịch',
            'error'
          )
        }
      })
});
  return false;
}
///sendcode




