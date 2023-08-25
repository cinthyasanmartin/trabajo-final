arrastrar=(event)=>{
    event.dataTransfer.setData("text",event.target.id);
   
}

prevent=(event)=>{
    event.preventDefault();  
}

soltar=(event)=>{
    const contenedorImgs = document.getElementById("juego-armar");
    let iDimagen= event.dataTransfer.getData("text");    
    let imagen=document.getElementById(iDimagen);
        event.target.innerHTML = '';
        event.target.appendChild(imagen);
}

reiniciar=()=>{    
location.reload() 
}

let video=document.querySelector("video");

let minutos;
let segundos;
let duracionEnMinYSeg=video.duration

setTimeout(()=>{    
    document.querySelector('.duracion').textContent=video.duration.toFixed(2)
},3000)



const play=()=>{
    video.play();

}

const pause=()=>{
    video.pause();
}