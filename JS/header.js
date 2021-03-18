function includeHTML() 
{
    var z, i, elmnt, file, xhttp;
    /* Loop through a collection of all HTML elements: */
    z = document.getElementsByTagName("*");
    for (i = 0; i < z.length; i++) 
    {
        elmnt = z[i];
        /*search for elements with a certain atrribute:*/
        file = elmnt.getAttribute("w3-include-html");
        if (file) 
        {
            /* Make an HTTP request using the attribute value as the file name: */
            xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
            if (this.readyState == 4) {
                if (this.status == 200) {elmnt.innerHTML = this.responseText;}
                if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
                /* Remove the attribute, and call this function once more: */
                elmnt.removeAttribute("w3-include-html");
                includeHTML();
            }
            }
            xhttp.open("GET", file, true);
            xhttp.send();
            /* Exit the function: */
            return;
        }
    }
}


function plusSlides(slideNumber){activatedFade(active +=slideNumber);}
function currentSlide(slideNumber){activatedFade(active = slideNumber);}

function activatedFade(slideNumber)
{
    var slideTitles = document.getElementsByClassName("slideText")
    var slides = document.getElementsByClassName("slide");
    var dots = document.getElementsByClassName("dot");

    for(let i = 0;i < slides.length; i++){ slides[i].style.display = "none";}
    for(let i = 0; i <slideTitles.length; i++){ slideTitles[i].style.display = "none";}
    for(let i = 0;i < dots.length; i++){dots[i].className = dots[i].className.replace(" active", "");}
    if (slideNumber < 0){ active = slides.length-1;}
    if (slideNumber > slides.length-1){ active = 0;}
    slides[active].style.display = "block";
    dots[active].className += " active";
    slideTitles[active].style.display = "";
    slideTitles[active].style.animation = "slideText 2s";
}