


const inputname = document.getElementById('name')
const btn = document.getElementById('btn')
const greetingEl = document.getElementById('greeting')
const bgcolorEl = document.getElementById('bgcolor')
const greet888EL = document.querySelector('#greet888')
const changeFontEl = document.querySelector('#changeFont')
const placesEl = document.querySelector('#places')
const placesDivEl = document.querySelector('#placesDiv')


 // Array of font families with their import links
 const fonts = [
    { name: 'Roboto', link: 'https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap' },
    { name: 'Open Sans', link: 'https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap' },
    { name: 'Montserrat', link: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap' },
    // Add more font families here
  ];


changeFontEl.addEventListener('click',(e)=>{

  
    const randomfont = fonts[Math.floor(Math.random()*fonts.length)]

    // console.log(randomfont.name)
    // console.log(randomfont.link)

    const fontlink = document.createElement('link')
    
    fontlink.rel = 'stylesheet'
    fontlink.href = randomfont.link
    fontlink.setAttribute('data-font', '');


    const existingFontLinks = document.querySelectorAll('link[data-font]');
    existingFontLinks.forEach(link => link.remove());
  
    // Set the data-font attribute to mark this link for removal
   
  
    // Append the new font link to the head
    document.head.appendChild(fontlink);
  

    document.body.style.fontFamily = randomfont.name + ', sans-serif';
})




bgcolorEl.addEventListener('click',()=>{
    const bodyEL =document.body


    bodyEL.style.backgroundColor = `#${((Math.random() * 0xffffff) << 0).toString(16).padStart(6,"0")}`;
})







btn.addEventListener('click',()=>{
    showwelcome()
})

document.addEventListener("DOMContentLoaded",()=>{

    // greet888EL.className="justify-center font-semibold flex text-xl"

    greetingEl.style.display = "none"  ;

})


function showwelcome(){

    if(! (inputname.value.length >3 && inputname.value.length<=20))
    {
        alert("Input nameshoudl be more than 3 characters")
        return;
    }

    const nameTrim = inputname.value.trim(); // Remove leading and trailing whitespace
    const capitalizedTrimmedName = nameTrim.charAt(0).toUpperCase() + nameTrim.slice(1).toLowerCase();
    

    greetingEl.textContent = `Hello, ${capitalizedTrimmedName}. Welcome to our app.`
    greetingEl.style.display = "flex"   
    greetingEl.style.backgroundColor = `#${((Math.random() * 0xffffff) << 0).toString(16).padStart(6,"0")}`;


    inputname.value = ""
            
}

 
document.addEventListener('keydown',(e)=>{

    if(e.code=== 'Enter'){
    showwelcome()
    }
})




const ulfragment = document.createDocumentFragment('li')

const places =['Chennai','Bangalore', 'Madurai']

places.forEach((place)=>{

    
    let liEl = document.createElement('li')

    liEl.setAttribute("class", "bg-orange-600 text-white px-4 py-2")

    liEl.textContent = place

    ulfragment.append(liEl)
    // console.log(liEl.textContent);
})

placesEl.append(ulfragment)