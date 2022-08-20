// Bài 5: Tính tổng 2 ký số

// Mô hình 3 khối:
/** 
 * - Đầu vào:
 *  soNhap = 45
 * 
 * - Xử lí:
 *   soHangDV = soNhap % 10
 *   soHangChuc = Math.floor(soNhap / 10)
 *   tongKySo = soHangDV + soHangChuc
 *  
 * - Đầu ra: 
 *  => tongKySo = ?
 * 
 * */

// ĐẦU VÀO
var soNhap = 45;
var soHangDV = 0;
var soHangChuc = 0;

// XỬ LÍ
soHangDV = soNhap % 10;
soHangChuc = Math.floor(soNhap / 10);
tongKySo = soHangDV + soHangChuc;

// ĐẦU RA
console.log("Tổng ký số vừa nhập là: " + tongKySo);
