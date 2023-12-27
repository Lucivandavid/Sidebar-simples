var menuItem = document.querySelectorAll('.item-menu')

function selectlink (){
    menuItem.forEach((item)=>
    item.classList.remove('ativo')
    )
    this.classList.add('ativo')
}

menuItem.forEach((item)=>
    item.addEventListener('click', selectlink)
)


//expandir o menu

var btnExp = document.querySelector('#btn-exp')
var manuSide = document.querySelector('.menu-lateral')

btnExp.addEventListener('click', function(){
    manuSide.classList.toggle('expandir')
})
