 function ValidarForm(event) {

     event.preventDefault();

     console.log(event);

     const FormContato = document.querySelector('[name=FormContato]')

     const formData = new FormData(FormContato);
     console.log(formData);
     for (let campo of formData.entries()) {

         const campotes = document.querySelector(`[name=${campo[0]}]`);
         console.log(campotes)

         if (campo[0] === 'name' && campo[1] === "") {
             alert("Campo nome obrigatório!");
             campotes.focus();
             return;
         }
         if (campo[0] === 'email' && campo[1] === "") {
             alert("Campo nome obrigatório!");
             campotes.focus();
             return;
         }
         if (campo[0] === 'message' && campo[1] === "") {
             alert("Campo nome obrigatório!");
             campotes.focus();
             return;
         }
     }
 }