// Hàm đổi ảnh khi di chuột (mouseover) hoặc bấm phím Tab (focus)
function upDate(previewPic) {
    console.log("Sự kiện kích hoạt trên ảnh:", previewPic.alt);

    var khungHienThi = document.getElementById('image');

    khungHienThi.innerHTML = previewPic.alt;
    khungHienThi.style.color = "#fff";
    khungHienThi.style.textShadow = "1px 1px 5px rgba(0,0,0,0.9)";
    khungHienThi.style.backgroundImage = "url('" + previewPic.src + "')";
}

// Hàm trả về giao diện ban đầu khi rời chuột (mouseleave) hoặc rời phím Tab (blur)
function unDo() {
    var khungHienThi = document.getElementById('image');

    khungHienThi.style.backgroundImage = "url('')";
    khungHienThi.style.color = "#333";
    khungHienThi.style.textShadow = "none";
    khungHienThi.innerHTML = "Di chuột hoặc bấm Tab qua một hình ảnh bên dưới để hiển thị ở đây.";
}

// Hàm tự động thêm tabindex="0" bằng vòng lặp for khi tải xong trang (body onload)
function setTabindex() {
    console.log("Trang đã tải xong, đang tự động thêm thuộc tính tabindex...");
    var images = document.getElementsByClassName('preview');
    for (var i = 0; i < images.length; i++) {
        images[i].setAttribute('tabindex', '0');
        console.log("Đã gắn tabindex cho ảnh thứ " + (i + 1));
    }
}