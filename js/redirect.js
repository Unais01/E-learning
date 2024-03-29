
// const homePage = document.querySelectorAll('.box');
// // const subjectHeading = 


// const newPageCtn = document.querySelector('.main');
// let subjectName = document.querySelector('.heading').innerText;
// // let encodedText2 = encodeURIComponent(subjectHeading);
// let encodedText = encodeURIComponent(subjectName);
// // let clickElement=subjectName;
// // console.log(homePage.dataset.id);
// class Redirect {
//     // displaying individiual section
//     // ---------displayUI function ---------

//     displayUI() {
//         console.log(subjectName);
        
//         homePage.forEach((box) => {
//             box.addEventListener('click', () => {
//                 // window.location.href=`${box.dataset.id}.html`
//                 // clickElement = box.dataset.id
                


//                 if (box.dataset.id == "books") {
//                     window.location.href = '../../books.html?text=' + encodedText



//                 } else if (box.dataset.id == "kceInternals") {

//                     window.location.href = '../../kceinternal.html?text=' + encodedText
//                 }
//                 else if (box.dataset.id == "notes") {
//                     window.location.href = '../../notes.html?text=' + encodedText;
//                 }else{
//                     window.location=
//                 }

//             });
//         });
//     }
//     // ---------displayUI function Ends---------



//     //new page function
//     static makepageBookPage() {
//         newPageCtn.innerHTML = `<section class="resource" id="resource">
//         <div class="box-wrappers link-wrappers">
//         <h1 class="heading"></h1>
//         <div class="box">
//         <a>UNIT 1</a>
//         </div>
//         <div class="box">
//         <a>UNIT 2</a>
//         </div>
//         <div class="box">
//         <a>UNIT 3</a>
//         </div>
//         <div class="box">
//                 <a>UNIT 4</a>
//             </div>
//             <div class="box">
//                 <a>UNIT 5</a>
//             </div>
//         </div>
//             </section>
//             `;

//         let params = new URLSearchParams(window.location.search);
//         // Get the text parameter value
//         let text = params.get('text');
//         // Set the text to the heading on this page
//         document.querySelector('.heading').innerText = decodeURIComponent(text);
//     }
//     // ---------new page function ends---------

//     static makepageInternalPage() {
//         newPageCtn.innerHTML = `<section class="resource" id="resource">
//         <div class="box-wrappers link-wrappers">
//         <h1 class="heading"></h1>
//         <div class="box">
//         <a>2021</a>
//         </div>
//         <div class="box">
//         <a>2022</a>
//         </div>
//         <div class="box">
//         <a>2023</a>
//         </div>
    
//         </div>
//             </section>
//             `;

//         let params = new URLSearchParams(window.location.search);
//         // Get the text parameter value
//         let text = params.get('text');
//         // Set the text to the heading on this page
//         document.querySelector('.heading').innerText = decodeURIComponent(text);
//     }

//     static makepageNotesPage() {

//         let content = `
//         <section class="resource" id="resource">
//     <div class="box-wrappers link-wrappers">
//         <h1 class="heading"></h1>
//         <div class="box">
//             <a>UNIT 1</a>
//         </div>
//         <div class="box">
//             <a>UNIT 2</a>
//         </div>
//         <div class="box">
//             <a>UNIT 3</a>
//         </div>
//         <div class="box">
//             <a>UNIT 4</a>
//         </div>
//         <div class="box">
//             <a>UNIT 5</a>
//         </div>
//     </div>
// </section>
//         `;
//         newPageCtn.innerHTML = content;

//         let params = new URLSearchParams(window.location.search);
//         // Get the text parameter value
//         let text = params.get('text');
//         // Set the text to the heading on this page
//         document.querySelector('.heading').innerText = decodeURIComponent(text);
//     }


// }






// let user = new Redirect()
// user.displayUI();









































// // header class="header">

// //
// //     <!-- <div class="link-wrappers"> -->
// //         <section class="resource" id="resource">
// //     <div class="box-wrappers link-wrappers">
// //         <div class="box">
// //             <a>2018</a>
// //         </div>
// //         <div class="box">
// //             <a>2019</a>
// //         </div>
// //         <div class="box">
// //             <a>2022</a>
// //         </div>
// //         <div class="box">
// //             <a>2023</a>
// //         </div>
// //         <div class="box">
// //             <a>2024</a>
// //         </div>
// //     </div>
// //         </section>