
const homePage = document.querySelectorAll('.box');
const newPageCtn = document.querySelector('.main');
let clickElement='';
// console.log(homePage.dataset.id);
class Redirect 
{
    // displaying individiual section
     displayUI() 
    {
        console.log(newPageCtn);
        homePage.forEach((box) => {
            box.addEventListener('click', () => { 
                // window.location.href=`${box.dataset.id}.html`
                clickElement = box.dataset.id
                if(box.dataset.id=="books"){
                    window.location.href="../../books.html"
                  
                    
                } else{
                    window.location.href=`${box.dataset.id}.html`;
                }
                
             });
        });
    }



   
}

class makePage extends Redirect{
   static makepageBookPage(){
        newPageCtn.innerHTML = `<section class="resource" id="resource">
        <div class="box-wrappers link-wrappers">
        <h1>${clickElement}</h1>
            <div class="box">
                <a>UNIT 1</a>
            </div>
            <div class="box">
                <a>UNIT 2</a>
            </div>
            <div class="box">
                <a>UNIT 3</a>
            </div>
            <div class="box">
                <a>UNIT 4</a>
            </div>
            <div class="box">
                <a>UNIT 5</a>
            </div>
        </div>
            </section>
            `;
      }
    
}

let user = new Redirect()
user.displayUI();




  




































// header class="header">

//
//     <!-- <div class="link-wrappers"> -->
//         <section class="resource" id="resource">
//     <div class="box-wrappers link-wrappers">
//         <div class="box">
//             <a>2018</a>
//         </div>
//         <div class="box">
//             <a>2019</a>
//         </div>
//         <div class="box">
//             <a>2022</a>
//         </div>
//         <div class="box">
//             <a>2023</a>
//         </div>
//         <div class="box">
//             <a>2024</a>
//         </div>
//     </div>
//         </section>