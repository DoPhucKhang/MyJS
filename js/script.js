// NÚT ẨN HIỆN

const btnShow = document.getElementById("btnShow");

const content = document.getElementById("content");


btnShow.onclick = function(){


    if(content.style.display === "none"){

        content.style.display = "block";

    }

    else{

        content.style.display = "none";

    }


};





// FORM


const form = document.getElementById("contactForm");


const result = document.getElementById("result");



form.addEventListener("submit", function(e){


    e.preventDefault();



    let name =
    document.getElementById("name").value;


    let email =
    document.getElementById("email").value;


    let message =
    document.getElementById("message").value;



    if(
        name == "" ||
        email == "" ||
        message == ""
    ){


        result.innerHTML =
        "Chưa nhập đủ thông tin";


        result.style.color="red";


    }


    else{


        result.innerHTML =
        "Gửi thành công";


        result.style.color="green";


    }


});
