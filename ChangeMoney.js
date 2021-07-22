function Change() {
    let chuyenDoi;
    let tien = parseInt(document.getElementById("nhap").value);
    console.log(tien)
    let tienTruoc= document.getElementById("truoc").value;
    console.log(tienTruoc)
    let tienSau= document.getElementById("sau").value;
    console.log(tienSau)
    if(tien != NaN) {
        if (tienTruoc == "VietNam" && tienSau=="USD"){
            chuyenDoi= tien/23000;
            console.log(chuyenDoi);
            document.getElementById("result").innerHTML=chuyenDoi+" USD"
        }
        else if(tienTruoc == "USD" && tienSau=="VietNam"){
            chuyenDoi= tien*23000;
            console.log(chuyenDoi);
            document.getElementById("result").innerHTML=chuyenDoi+" VND"
        }
        else {
            document.getElementById("result").innerHTML="Lựa chọn của bạn không hợp lệ !!"
        }
    }
    else {
        document.getElementById("result").innerHTML="Bạn chưa nhập số tiền cần chuyển"
    }
}