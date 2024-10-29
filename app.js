$('.central>div').click(function(e){
    atual = $(this).find('.nome').html();
    if(atual == ""){
        //assento livre né guys galera amigos gente joao patrick rafael
        resp = confirm("Deseja reservar o assento?");
        if(resp == true){
            //decidi reservar, qq acontece agora galera gente amigos patrick rafael joao
            nome = "";
            while(nome == "" || nome == null){
                nome = prompt("Digite seu nome:");
            }
            console.log(nome);
            $(this).find('.nome').html(nome);
            classes = $(this).attr('class','ocupado');
            console.log(classes);
        }
    }  else{
            //decidi ocupar agora, qq acontece agora galera gente amigos patrick rafael joao
            resp = confirm("Você deseja mesmo cancelar o assento?")
            if(resp == true){
                //quer mesmo cancelar pqp q cliente arrombado
                nome == "";
                $(this).find('.nome').html(nome);

                if(resp == true){
                    classes = $(this).attr('class','vazio');
                }
            }
            
        }
    
})
