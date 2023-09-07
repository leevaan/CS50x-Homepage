
const regEx = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const submit = document.querySelectorAll(".sec-one-cont-submit");
const mail = document.getElementsByClassName("sec-one-cont-emale");
const subText = document.querySelectorAll("#mail-subtext");

for(let i = 0; i < 2; i++){
    submit[i].addEventListener("click", function(){
        if(mail[i].value.match(regEx)){
            mail[i].style.border = "0.625px solid #07043B";
            subText[i].innerText = " ";
            return true;
        }else{
            mail[i].style.border = "0.625px solid #EF4877";
            subText[i].innerText = "Please Check you email";
            return false;
        }
    });
}

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("burger-ul-id").classList.toggle("show");
}
// Close the dropdown if the user clicks outside of it
window.onclick = function(e) {
    if (!e.target.matches('#burger, .only-for-match')) {
    var myDropdown = document.getElementById("burger-ul-id");
      if (myDropdown.classList.contains('show')) {
        myDropdown.classList.remove('show');
      }
    }
  }