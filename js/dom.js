const title = document.getElementById("title");
const btnChange = document.getElementById("btnChange");

btnChange.addEventListener("click", function () {
// Đổi nội dung
title.textContent = "Học DOM thật vui!";

```
// Đổi giao diện
title.style.color = "white";
title.style.backgroundColor = "green";
title.style.padding = "10px";
```

});
