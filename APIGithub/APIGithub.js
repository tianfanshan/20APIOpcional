const btnPrint = document.querySelector('.Github')
const btnBuscar = document.getElementById('btnGithub')
const inputValue = document.getElementById('inputValue')

const API_GITHUB = ("https://api.github.com/users/")


function muestraInfo(persona){
    btnPrint.innerHTML = ""
    btnPrint.innerHTML = `
    <div class="card col-lg-3 col-xs-12 col-md-6">
        <div class="personaje">
        <div class="card-body">
        <h3 class="card-header">nombre:  ${persona.data.name}</h3>
        <h2 class="card-header">cantidad de repositorio:  ${persona.data.public_repos}</h2>
        <img style="height: 200px; width: 100%; display: block;" src="${persona.data.avatar_url}"  alt="Card image">
        </div>
        </div>
        </div>
         `;
}

const buscaGithub = async () => {
    try {
        const valorDeInput = inputValue.value;
        const aquiGithub = await axios.get(API_GITHUB + valorDeInput)
        muestraInfo(aquiGithub)
    } catch (error) {
        console.error(error)
    }
}

btnBuscar.addEventListener('click',(e)=>{
    e.preventDefault();
    buscaGithub()
})