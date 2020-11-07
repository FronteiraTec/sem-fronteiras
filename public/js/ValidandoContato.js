 function ValidarForm(event) {

     //event.preventDefault();

     const FormContato = document.querySelector('[name=FormContato]')

     const formData = new FormData(FormContato);

     for (let campo of formData.entries()) {

         const campotes = document.querySelector(`[name=${campo[0]}]`);

         if (campo[0] === 'name' && campo[1] === "") {
             alert("O nome é obrigatório!");
             campotes.focus();
             return;
         }
         if (campo[0] === 'email' && campo[1] === "") {
             alert("O email é obrigatório!");
             campotes.focus();
             return;
         }

         if (campo[0] === 'message' && campo[1] === "") {
             alert("Por favor, insira uma mensagem!");
             campotes.focus();
             return;
         }
     }
 }