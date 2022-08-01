
const button=document.getElementById('button-toggle')
button.addEventListener('click',()=>{
    button.classList.toggle('active')
})


const buttonToggle=document.getElementById('button-toggle')
const menuContainer=document.getElementById('menu-toggle-container')
const menuToggle=document.getElementById('menu-toggle')

const XD=()=>{
    menuContainer.classList.toggle('toggle-containerActive')
    menuToggle.classList.toggle('menu-toggle-active')
}
buttonToggle.addEventListener('click',(e)=>{
    const ulToggle=document.getElementById('ul-toggle')
    XD()
    ulToggle.addEventListener('click',()=>{
        if(buttonToggle.classList[1]){
            XD()
            button.classList.toggle('active')
        }
    })
})

