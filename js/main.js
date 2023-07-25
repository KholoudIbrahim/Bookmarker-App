//CRUD Conept

//They are global variables
//input kolo,then save it in a variable
var bookmarkNameInput = document.getElementById("bookmarkName");
var bookmarkURLInput = document.getElementById("bookmarkURL");

var  bookmarkContainer = []; 


function addBookmark() {

    var bookmark = {
        name: bookmarkNameInput.value,
        url: bookmarkURLInput.value,
    }

    
// for(var i = 0 ; i < bookmarkContainer.length ; i++){
//     while(bookmarkContainer[i].name.length < 3){
//         const openDialogButton = document.getElementById('openDialog');

//         const closeDialogButton = document.getElementById('closeDialog');
//         const myDialog = document.getElementById('myDialog');
        
//         openDialogButton.addEventListener('click', () => {
//             myDialog.showModal();
//         });
        
//         closeDialogButton.addEventListener('click', () => {
//             myDialog.close();
//         });
//     }
// }


    bookmarkContainer.push(bookmark); //add item(object) into array
    displayData();
    clearForm();
} 




// R in CRUD
function displayData() {
    var cartona= '';
    for(var i=0;i<bookmarkContainer.length;i++){
        cartona += `
        <tr>
        <td> ${i} </td>
        <td> ${bookmarkContainer[i].name} </td>
        <td> <button class="btn btn-visit pe-2 " onclick="visitURL('${bookmarkContainer[i].url}')"><i class="fa-solid fa-eye pe-2"></i>Visit</button></td>
    
        <td>
            <button class="btn btn-delete pe-2" onclick="deleteBookmark( ${i} )"><i class="fa-solid fa-trash-can"></i>Delete</button>
        </td>
    </tr> `;
    }

    // console.log(cartona);
    document.getElementById("tableData").innerHTML = cartona;

}


function clearForm() {

    bookmarkNameInput.value = '';
    bookmarkURLInput.value='';
}

function deleteBookmark( index ) {
    bookmarkContainer.splice(index,1);
    displayData();
}


function visitURL( urlLink ) {
    window.open(urlLink, '_blank');
    // window.open("https://github.com/KholoudIbrahim/Quote-Generator-No-Repetition-App/blob/master/index.html","_blank");
    

}

