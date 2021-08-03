
document.addEventListener("DOMContentLoaded", function(){

    document.querySelectorAll('.sidebar .mpt').forEach(function(element){
    
        element.addEventListener('click', function (e) {
    
            let nextEl = element.nextElementSibling;
            let parentEl  = element.parentElement;	

            console.log(nextEl);
            
            let sm = element.querySelector('.submenu');
        
            if(nextEl) {
                e.preventDefault();	
                let mycollapse = new bootstrap.Collapse(nextEl);
                
                if(nextEl.classList.contains('show')){
                mycollapse.hide();
                } else {
                    mycollapse.show();
                    // find other submenus with class=show
                    var opened_submenu = parentEl.parentElement.querySelector('.submenu.show');
                    // if it exists, then close all of them
                    if(opened_submenu){
                    new bootstrap.Collapse(opened_submenu);
                    }
                }
            }
        }); // addEventListener
    }) // forEach
}); 