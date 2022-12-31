var chk = document.getElementById('check');

chk.addEventListener('change', () => {
    chk.checked == true ? localStorage.setItem("Theme", "DARK") : localStorage.setItem("Theme", "LIGHT");

    if(localStorage.getItem("Theme").toLowerCase() == "dark"){
        window.document.body.style.backgroundColor = "var(--dark)";
    }else{
        window.document.body.style.backgroundColor = "var(--light)";
    }

});