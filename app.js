 const addClassShrink= () => {
    
   const header= document.querySelector('header')
   if(document.body.scrollTop > 100 || document.documentElement.scrollTop> 100)
   {
    console.log("hi")
       header.classList.add('shrink')
   }
   else {
       header.classList.remove('shrink')
   }
}

 window.addEventListener("scroll", addClassShrink)

// slide hero///////////////////////////////////////////////

 let hero_slide= document.querySelector('#hero-slide')

 let hero_slide_items= hero_slide.querySelectorAll('.slide')

 let hero_slide_index = 0

 let hero_slide_play = true

 let hero_slide_control_items = hero_slide.querySelectorAll('.slide-control-item')

 let slide_next = hero_slide.querySelector('.slide-next')

 let slide_prev = hero_slide.querySelector('.slide-prev')


 showSlide = (index)=> {
     hero_slide.querySelector('.slide.active').classList.remove('active')
     hero_slide_items[index].classList.add('active')

     hero_slide.querySelector('.slide-control-item.active').classList.remove('active')
     hero_slide_control_items[index].classList.add('active')
 }
 nextSlide = () => {
    hero_slide_index= (hero_slide_index + 1) === hero_slide_items.length ? 0 : (hero_slide_index + 1)
    showSlide(hero_slide_index)
 }
 prevSlide = () => {
   hero_slide_index= (hero_slide_index - 1) < 0 ? (hero_slide_items.length-1) : (hero_slide_index - 1)
   showSlide(hero_slide_index)
}

slide_next.addEventListener('click', () => nextSlide() )
slide_prev.addEventListener('click', () => prevSlide() )

//click control item[1 ,2 3]
hero_slide_control_items.forEach((slide,index) =>slide.addEventListener('click', () =>showSlide(index)))

 //pause slide when mouse come in slider
hero_slide.addEventListener('mouseover',() => hero_slide_play=false)

 //resum slide when mouse leave out slider

hero_slide.addEventListener('mouseleave',() => hero_slide_play=true)


setTimeout (() =>hero_slide_items[0].classList.add('active'), 200)
 

setInterval (() =>{
   if(!hero_slide_play) return
   nextSlide()
},5000)

