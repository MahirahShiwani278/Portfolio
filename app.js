(function () {
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function() {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        })
    });
    document.querySelector(".theme-btn").addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
    })
})();

var Name = document.getElementById("name");
var email = document.getElementById("email");
var sub = document.getElementById("sub");
var msg = document.getElementById("msg");
var btn = document.getElementById('sendBtn');
btn.addEventListener("click",function(e){
     e.preventDefault();

     let body = `<b>Name: </b> ${Name.value} <br>
                 <b>Email: </b>${email.value} <br>
                 <b>Message: </b> ${msg.value}`
     
     Email.send({
        SecureToken : "9571130b-f6bf-4026-8307-f92b64a29921",
        To : 'mahirahjs278@gmail.com',
        From : 'mahirahjs278@gmail.com',
        Subject : sub.value,
        Body : body
    }).then(
      message => alert(message)
    );
});
