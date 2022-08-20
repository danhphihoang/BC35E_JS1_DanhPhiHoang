// Bài 3: Quy đổi tiền tệ

// Mô hình 3 khối:
/** 
 * - Đầu vào:
 *  + TI_GIA = 23500
 *  + soTienUSD = 4

 * 
 * - Xử lí:
 *   soTienVND = TI_GIA * soTienUSD
 * 
 * - Đầu ra: 
 *  => soTienVND = ?
 * 
 * */

// ĐẦU VÀO
const TI_GIA = 23500;
var soTienUSD = 4;
var soTienVND = 0;

// XỬ LÍ
soTienVND = TI_GIA * soTienUSD;

// ĐẦU RA
console.log("Số tiền sau khi quy đổi từ USD sang VND là: " + soTienVND);
