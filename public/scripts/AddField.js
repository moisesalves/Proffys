//Clique do botão "Novo horário"
document.querySelector("#add-time").addEventListener('click', cloneField)

function cloneField(){

        //Duplicar os campos. Que campos?
        const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)

        //Pegar os campos
        const  fields = newFieldContainer.querySelectorAll('input')

        //Para cada campo limpar
        fields.forEach(function(field){
            //pega o field do momento e limpa ele
            field.value = ""
        })

         //Colocar na página. Onde?
        document.querySelector('#schedule-items').appendChild(newFieldContainer)  

}

