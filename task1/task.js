const listButttons = [...document.querySelectorAll('.btn')]
const listClose = [...document.querySelectorAll('.modal__close_times')]

listButttons[0].parentElement.parentElement.classList.add('modal_active')
listButttons[0].onclick = () => {
    listButttons[0].parentElement.parentElement.classList.remove('modal_active')
    listButttons[1].parentElement.parentElement.classList.add('modal_active')
    listButttons[1].onclick = () => {
        listButttons[1].parentElement.parentElement.classList.remove('modal_active')
    }
}

for(let item of listClose) {
    item.onclick = (el) => {
        let targetElement = el.target
        console.log(targetElement.parentElement.parentElement.classList.remove('modal_active'))
    }
}