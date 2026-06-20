// Ẩn hiện nội dung

const btnShow = document.getElementById("btnShow");

const content = document.getElementById("content");


btnShow.addEventListener("click", function(){

    if(content.style.display === "none"){

        content.style.display = "block";

    }else{

        content.style.display = "none";

    }

});




// Kiểm tra form

const form = document.getElementById("contactForm");

const result = document.getElementById("result");


form.addEventListener("submit", function(event){


    event.preventDefault();


    const name =
    document.getElementById("name").value;


    const email =
    document.getElementById("email").value;


    const message =
    document.getElementById("message").value;



    if(
        name === "" ||
        email === "" ||
        message === ""
    ){

        result.textContent =
        "Vui lòng nhập đầy đủ thông tin!";

        result.style.color="red";


    }else{


        result.textContent =
        "Gửi liên hệ thành công!";

        result.style.color="green";


    }


});
