/**Script para animação junto com CSS
 * @author Gustavo Teodoro Gabilan*/

document.getElementById("btn-fotografia").addEventListener("click",function(){    

        document.getElementById("fotografia").classList.add("animation")
        document.getElementById("fotografia").classList.remove("desaparecer")
        document.getElementById("sobre").classList.remove("animation")
        document.getElementById("sobre").classList.add("desaparecer")
        document.getElementById("portfolio").classList.remove("animation")
        document.getElementById("portfolio").classList.add("desaparecer")
        document.getElementById("galeria").classList.remove("animation")
        document.getElementById("galeria").classList.add("desaparecer")

    setTimeout(function(){
        document.getElementById("sobre").classList.remove("animation","desaparecer")
        document.getElementById("portfolio").classList.remove("animation","desaparecer")
        document.getElementById("galeria").classList.remove("animation","desaparecer")
    },1000)
})

document.getElementById("btn-inicio").addEventListener("click",function(){    

    document.getElementById("inicio").classList.add("animation")
    document.getElementById("inicio").classList.remove("desaparecer")
    document.getElementById("sobre").classList.remove("animation")
    document.getElementById("sobre").classList.add("desaparecer")
    document.getElementById("portfolio").classList.remove("animation")
    document.getElementById("portfolio").classList.add("desaparecer")
    document.getElementById("galeria").classList.remove("animation")
    document.getElementById("galeria").classList.add("desaparecer")
    document.getElementById("fotografia").classList.remove("animation")
    document.getElementById("fotografia").classList.add("desaparecer")

setTimeout(function(){
    document.getElementById("sobre").classList.remove("animation","desaparecer")
    document.getElementById("portfolio").classList.remove("animation","desaparecer")
    document.getElementById("galeria").classList.remove("animation","desaparecer")
},1000)
})

document.getElementById("btn-sobre").addEventListener("click",function(){    

        document.getElementById("sobre").classList.add("animation")
        document.getElementById("sobre").classList.remove("desaparecer")
        document.getElementById("fotografia").classList.remove("animation")
        document.getElementById("fotografia").classList.add("desaparecer")
        document.getElementById("portfolio").classList.remove("animation")
        document.getElementById("portfolio").classList.add("desaparecer")
        document.getElementById("galeria").classList.remove("animation")
        document.getElementById("galeria").classList.add("desaparecer")

    setTimeout(function(){
        document.getElementById("fotografia").classList.remove("animation","desaparecer")
        document.getElementById("portfolio").classList.remove("animation","desaparecer")
        document.getElementById("galeria").classList.remove("animation","desaparecer")
    },1000)
})

document.getElementById("btn-portfolio").addEventListener("click",function(){    

        document.getElementById("portfolio").classList.add("animation")
        document.getElementById("portfolio").classList.remove("desaparecer")
        document.getElementById("fotografia").classList.remove("animation")
        document.getElementById("fotografia").classList.add("desaparecer")
        document.getElementById("sobre").classList.remove("animation")
        document.getElementById("sobre").classList.add("desaparecer")
        document.getElementById("galeria").classList.remove("animation")
        document.getElementById("galeria").classList.add("desaparecer")

    setTimeout(function(){
        document.getElementById("fotografia").classList.remove("animation","desaparecer")
        document.getElementById("sobre").classList.remove("animation","desaparecer")
        document.getElementById("galeria").classList.remove("animation","desaparecer")
    },1000)
})

document.getElementById("btn-galeria").addEventListener("click",function(){    

        document.getElementById("galeria").classList.add("animation")
        document.getElementById("galeria").classList.remove("desaparecer")
        document.getElementById("fotografia").classList.remove("animation")
        document.getElementById("fotografia").classList.add("desaparecer")
        document.getElementById("portfolio").classList.remove("animation")
        document.getElementById("portfolio").classList.add("desaparecer")
        document.getElementById("sobre").classList.remove("animation")
        document.getElementById("sobre").classList.add("desaparecer")

    setTimeout(function(){
        document.getElementById("fotografia").classList.remove("animation","desaparecer")
        document.getElementById("portfolio").classList.remove("animation","desaparecer")
        document.getElementById("sobre").classList.remove("animation","desaparecer")
    },1000)
})


