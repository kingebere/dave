const tabItems=document.querySelectorAll(".tab-item")
const tabContents=document.querySelectorAll(".tab-content")

tabItems.forEach(item=>{
    item.addEventListener('click',selectItem)
})


function removeShow(){
    tabItems.forEach((item)=>{
item.classList.remove('active')
    })
}

function removeContent(){
    tabContents.forEach((content)=>{
content.classList.remove('active')
    })
}

function selectItem(e){
    removeShow();
    removeContent();
    const tabContentItem = document.querySelector(`#${e.target.id}-content`)
    tabContentItem.classList.add('active')
    this.classList.add('active')
}