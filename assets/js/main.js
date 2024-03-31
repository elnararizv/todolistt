let input = document.querySelector('.inp');
let ul = document.querySelector('.ul-list');
let addBtn = document.querySelector('.add-btn');
let arr = [];

// addBtn.addEventListener('click', function () {
//     if (input.value !== '') {
//         arr.push(input.value);
//         ul.innerHTML = ''
//         for(let i = 0; i < arr.length; i++){
//              ul.innerHTML += ` <li class="list-item">
//             <div class="d-flex justify-content-center mt-3 px-2 py-1 rounded">
//                 <div class="ps-2 pt-1 rounded-3">
//                     <input type="checkbox" class="check">
//                     <span class="fs-5">${arr[i]}</span>
//                 </div>
//                 <button class="btn mx-1 edit-btn"><i class="fa-solid fa-pencil"></i></button>
//                 <button class="btn delete-btn "><i class="fa-solid fa-trash-can"></i></button>
//             </div>
//         </li>`
//         input.value = '';
//         }
//         // console.log(arr);
//     }
// });
function updateList() {
    ul.innerHTML = '';
    arr.forEach(function (item, i) {
        ul.innerHTML += `<li class="list-item">
            <div class="d-flex justify-content-center mt-3 px-2 py-1 rounded">
                <div class="ps-2 pt-1 rounded-3">
                    <input type="checkbox" class="check">
                    <span class="fs-5">${item}</span>
                </div>
                <button class="btn mx-1 edit-btn"><i class="fa-solid fa-pencil"></i></button>
                <button class="btn delete-btn"><i class="fa-solid fa-trash-can"></i></button>
            </div>
        </li>`;
    });

    let editBtns = document.querySelectorAll('.edit-btn');
    editBtns.forEach(function (btn, i) {
        btn.addEventListener('click', function () {
            let newValue = prompt("Edit your list:", arr[i]);
            if (newValue !== null) {
                arr[i] = newValue;
                updateList();
            }
        });
    });

    let deleteBtns = document.querySelectorAll('.delete-btn');
    deleteBtns.forEach(function (btn, i) {
        btn.addEventListener('click', function () {
            arr.splice(i, 1);
            updateList();
        });
    });
}

addBtn.addEventListener('click', function () {
    if (input.value !== '') {
        arr.push(input.value);
        input.value = '';
        updateList();
    }
});







