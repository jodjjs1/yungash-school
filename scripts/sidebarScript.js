function openSbMenu(menuPtId) {
    let menuPt = document.querySelector('.main-pts').querySelector('#'+menuPtId);
    let SbMenu = menuPt.querySelector('.submenu');
    //console.log(menuPt.querySelector('.submenu'));
    SbMenu.style.display = 'block';
}

function closeSbMenu(menuPtId) {
    let menuPt = document.querySelector('.main-pts').querySelector('#'+menuPtId);
    let SbMenu = menuPt.querySelector('.submenu');
    //console.log(menuPt);
    SbMenu.style.display = 'none';
}

document.addEventListener("DOMContentLoaded", function(){

    document.querySelectorAll('.sidebar .mpt').forEach(function(element){
        
        let isOpen = false;

        element.addEventListener('click', function (e) {

            let nextEl = element.nextElementSibling;
            let parentEl  = element.parentElement;	

            console.log(element);
            
            //parentEl.parentElement.parentElement.style.height = '500px';
            


            if(!isOpen) {
                openSbMenu(parentEl.id);
                isOpen = true;
                // parentEl.parentElement.querySelector('#nav')
            } else {
                closeSbMenu(parentEl.id);
                //parentEl.classList.remove('open');
                isOpen = false;
            }
            console.log(parentEl.parentElement.parentElement);
            parentEl.parentElement.parentElement.style.height = parentEl.parentElement.offsetHeight + 'px';
            //parentEl.firstChild.style.transform = 'rotate(90deg)';



                // if(nextEl) {
                //     e.preventDefault();	
                //     let mycollapse = new bootstrap.Collapse(nextEl);
                    
                //     if(nextEl.classList.contains('show')){
                //         mycollapse.hide();
                //     } else {
                //         mycollapse.show();
                //         // find other submenus with class=show
                //         var opened_submenu = parentEl.parentElement.querySelector('.submenu.show');
                //         // if it exists, then close all of them
                //         if(opened_submenu){
                //             new bootstrap.Collapse(opened_submenu);
                //         }
                //     }
                // }
        }); // addEventListener
    }) // forEach
    }); 
    