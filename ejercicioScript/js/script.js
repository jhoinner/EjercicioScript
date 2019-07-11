let rbtn_casado = document.getElementById('casado');

let rbtn_soltero = document.getElementById('soltero');

let genero = document.getElementById('generos');

let boton = document.getElementById('boton');

let casado = document.getElementById('casado');

let tabla = document.getElementById('tabla');

boton.addEventListener('click', function(){

    let nombreUsuario = document.getElementById('nombre').value;

    let apellidos = document.getElementById('apellidos').value;

    if(nombreUsuario===''||apellidos==='' || genero.options[genero.selectedIndex].text ==='--Selecciona--'){

        if(rbtn_casado.checked===false && rbtn_soltero.checked===false){

            alert('faltan datos')

        }else if(rbtn_casado.checked!==false || rbtn_soltero.checked!==false){

            alert('faltan datos');

        }
    }else
    {
        let tr=document.createElement('tr');

        let td1=document.createElement('td');

        let td2=document.createElement('td');

        let td3=document.createElement('td');

        let td4=document.createElement('td');

        td1.appendChild(document.createTextNode(nombreUsuario));

        td2.appendChild(document.createTextNode(apellidos));

        td3.appendChild(document.createTextNode(genero.options[genero.selectedIndex].text));

        if(rbtn_casado.checked==true){

            td4.appendChild(document.createTextNode('Casado'))
        }else
        {
            td4.appendChild(document.createTextNode('Soltero'));
        }


        tr.append(td1, td2, td3, td4);

        tabla.appendChild(tr);

        document.getElementById('nombre').value='';

        document.getElementById('apellidos').value='';

        genero.selectedIndex=0;

        rbtn_casado.checked=false;

        rbtn_soltero.checked=false;
    }
});



rbtn_casado.addEventListener('click', function(){ 

    rbtn_casado.checked=true;

    rbtn_soltero.checked=false;

})



rbtn_soltero.addEventListener('click', function(){

    rbtn_soltero.checked=true;

    rbtn_casado.checked=false;
    
})