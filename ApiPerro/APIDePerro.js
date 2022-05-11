const perritos = document.querySelector('.perritos')
const btnPrint = document.getElementById('btnPrint')
const btnPrintAllRaza = document.getElementById("btnPrintAllRaza")
const btnPrintAllImg = document.getElementById("btnPrintAllImg")

const inputBuscar = document.getElementById('buscar')


const API_Perro =("https://dog.ceo/api/breeds/image/random")
const API_ALLPerroRaza = ("https://dog.ceo/api/breeds/list/all")
const API_ALLPerro = ("https://dog.ceo/api/breed/hound/images")






//------------------------------------------------------------------

function imprimePerro(per){
    perritos.innerHTML = ""
    perritos.innerHTML = `
    <div class="card col-lg-3 col-xs-12 col-md-6">
        <div class="personaje">
        <div class="card-body">
        <h3 class="card-header">${per.status}</h3>
        <img style="height: 200px; width: 100%; display: block;" src="${per.message}"  alt="Card image">
        </div>
        </div>
        </div>
         `;
}

function imprimePerroRaza(per){
    let raza = JSON.stringify(per)
    perritos.innerHTML = ""
    perritos.innerHTML = `
    <div class="card col-lg-3 col-xs-12 col-md-6">
        <div class="personaje">
        <div class="card-body">
        <p class="card-header">${raza}</p>
        </div>
        </div>
        </div>
         `;
}


function imprimePerroImagen(per){
    let imagen = JSON.stringify(per)
    perritos.innerHTML = ""
    perritos.innerHTML = `
    <div class="card col-lg-3 col-xs-12 col-md-6">
        <div class="personaje">
        <div class="card-body">
        <img style="height: 200px; width: 100%; display: block;" src="${imagen}"  alt="Card image">
        </div>
        </div>
        </div>
         `;
}

//---------------------------------------------------------

const buscaPerro = async ()=> {
    try {
        let res = await axios.get(API_Perro);
        console.log(res)
        let aquiEstaPerro = await res.data;
        console.log(aquiEstaPerro)
        imprimePerro(aquiEstaPerro)
    } catch (error) {
        console.error(error)
    }
}


const buscaPerroRaza = async ()=> {
    try {
        let res = await axios.get(API_ALLPerroRaza);
        let aquiEstaPerro = await res.data.message;
        console.log(aquiEstaPerro)
        imprimePerroRaza(aquiEstaPerro)
    } catch (error) {
        console.error(error)
    }
}


const buscaPerroImg = async ()=> {
    try {
        let res = await axios.get(API_ALLPerro);
        console.log(res)
        let aquiEstaPerro = await res.data.message;
        console.log(aquiEstaPerro)
        imprimePerroImagen(aquiEstaPerro)
    } catch (error) {
        console.error(error)
    }
}




//-------------------Event--------------------------



btnPrint.addEventListener('click',(e)=>{
    e.preventDefault();
    buscaPerro();
})


btnPrintAllRaza.addEventListener('click',(e)=>{
    e.preventDefault();
    buscaPerroRaza();
})


btnPrintAllImg.addEventListener('click',(e)=>{
    e.preventDefault();
    buscaPerroImg();
})


