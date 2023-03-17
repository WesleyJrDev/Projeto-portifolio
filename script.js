let info = document.getElementById('info')
let main = document.getElementById('main')
let perfil = document.getElementById('perfil')
let formação = document.getElementById('formação')


function entrarperfil(){
    document.getElementById('formação').hidden=true;
    document.getElementById('perfil').hidden=false;
}

function entrarformação(){
    document.getElementById('formação').hidden=false;
    document.getElementById('perfil').hidden=true;
}
