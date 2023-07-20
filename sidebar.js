document.getElementById("menu").addEventListener('click', func1);
document.getElementById("side-menu-cross").addEventListener('click', func1);

var count = 1;

function func1() {
    if (count == 0) {
        document.getElementById("side-menu").classList.add("side-menu-anime-out");
        
        document.getElementById("side-menu").classList.remove("side-menu-anime-in");
        
        try {
            document.getElementById("website").classList.remove("blur-sm", "cursor-not-allowed");

        }
        catch {

        }
        setTimeout(function(){
            document.getElementById("side-menu").style.display = "none";
        }, 200);
        
        count = 1;

    }
    else {
        document.getElementById("side-menu").style.display = "block";
        document.getElementById("website").classList.add("blur-sm", "cursor-not-allowed");
        document.getElementById("side-menu").classList.add("side-menu-anime-in");
        
        try{
        document.getElementById("side-menu").classList.remove("side-menu-anime-out");

        }catch{

        }

        count = 0;
    }
}


document.querySelector("footer span").innerHTML = new Date().getFullYear();