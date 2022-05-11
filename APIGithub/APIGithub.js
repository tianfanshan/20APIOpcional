const btnPrint = document.querySelector('.Github')
const btnBuscar = document.getElementById('btnGithub')
const inputValue = document.getElementById('inputValue')

const API_GITHUB = ("")


const buscaGithub = async () => {
    try {
        // const valorDeInput = inputValue.value;
        const aquiGithub = await axios.get(API_GITHUB)
        console.log(aquiGithub)
    } catch (error) {
        console.error(error)
    }
}

btnBuscar.addEventListener('click',(e)=>{
    e.preventDefault();
    buscaGithub()
})