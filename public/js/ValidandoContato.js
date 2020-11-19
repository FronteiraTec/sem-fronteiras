 function handleSubmit(event) {

     event.preventDefault();

     const [...fields] = document.querySelectorAll(".form [name]");
     let isValid = true;

     fields.forEach(element => {
         if (!isValid) {
             return;
         }

         element.addEventListener("keypress", (event) => {
             if (element.value != "") {
                 element.classList.remove("has-error");
             }
         });

         if (["name", "email", "message"].indexOf(element.name) > -1 && !element.value) {
             console.dir(element);
             element.focus();
             element.classList.add("has-error");
             isValid = false;
         }
         if (["name", "email", "message"].indexOf(element.name) > 1 && !element.value) {
             let MeuForm = document.querySelector(".form");
             MeuForm.submit();
         }
     });

 }