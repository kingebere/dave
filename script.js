const tabItems=document.querySelectorAll(".tab-item")
const heroText=document.querySelectorAll(".heroText").length
const dd=document.querySelectorAll(".heroText")
const tabContents=document.querySelectorAll(".tab-content")



// for (let i=0;i<heroText;i++){
//     const Item = document.querySelector(`#heroText-${i}-content`)
//     Item.classList.add('active')
// }
// var i =0
// function tyh(){
    
//     if(i<3){
//        i++
//          const Item = dd[i]
// removed();
// Item.classList.add('active')

//     }else{
//         i=0
//         const Item = dd[i]
//         removed();
//         Item.classList.add('active')
//     }
//     return i

// }
// setInterval(tyh,5000)


function removed(){
    dd.forEach((item)=>{
        item.classList.remove('active')
            })
}

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