
if (document.getElementById('addNew')) {

    document.getElementById('addNew').addEventListener('click', function () {
        let membershipRow = document.getElementById('membershipRow');

        let newRow = document.createElement('div');
        newRow.classList.add('row', 'g-3', 'membershipE', 'mt-2');

        newRow.innerHTML = `
        <div class="col-12 col-md-5">
            <input type="text" class="form-control address" placeholder="Add Title" >
        </div>
        <div class="col-12 col-md-5">
            <input type="text" class="form-control about" placeholder="About Membership">
        </div>
        <div class="col-12 col-md-2 d-flex align-items-center">
            <button type="button" class="btn text-danger custom-btn deleteBtn">Delete</button>
        </div>
        `;

        membershipRow.appendChild(newRow);
    });

    document.addEventListener('click', function (e) {
        if (e.target.classList.contains('deleteBtn')) {
            e.target.closest('.membershipE').remove();
        }
    });
}

// // ======  FORM  ======
if (document.getElementById('form')) {
    let users = [];
    let form = document.getElementById('form');

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        let user = {
            firstName: document.getElementById('firstName').value.trim(),
            lastName: document.getElementById('lastName').value.trim(),
            displayName: document.getElementById('displayName').value.trim(),
            designation: document.getElementById('designation').value.trim(),
            phone: document.getElementById('phone').value.trim(),
            email: document.getElementById('email').value.trim(),
            languages: document.getElementById('languages').value.trim(),
            memberships: []
        };

        document.querySelectorAll('.membershipE').forEach(row => {
            let title = row.querySelector('.title')?.value.trim() || '';
            let about = row.querySelector('.about')?.value.trim() || '';
            if (title || about) {
                user.memberships.push({ title, about });
            }

        });

        users.push(user);
        localStorage.setItem('users', JSON.stringify(users))
        console.log(JSON.stringify(users))
        let usersLocalStorage = JSON.parse(localStorage.getItem('users'))
        usersLocalStorage.push(user)

        console.log('Saved users:', users);

        form.reset();
    });

    let uploadInput = document.getElementById('uploadInput');
    let uploadBtn = document.getElementById('uploadBtn');
    let fileName = document.getElementById('fileName');

    uploadBtn.addEventListener('click', () => {
        uploadInput.click();
    });

    uploadInput.addEventListener('change', () => {
        if (uploadInput.files.length > 0) {
            fileName.textContent = ` ${uploadInput.files[0].name}`;
        } else {
            fileName.textContent = '';
        }
    });

    form.addEventListener('input', (e) => {
        // console.log(e)
        // console.log(e.target.id)

        if (e.target.id == "firstName") {
            nameValidation(e.target)
        }
        else if (e.target.id == 'email')
            emailValidation(e.target)
    })

}

//  =======input tag


// let container = document.getElementById("tags-container");
// let input = document.getElementById("tag-input");
// function addTag(text) {
//     const tag = document.createElement("span");
//     tag.classList.add("tag");
//     tag.textContent = text;

//     const removeBtn = document.createElement("span");
//     removeBtn.textContent = "×";
//     removeBtn.classList.add("remove");
//     removeBtn.onclick = () => container.removeChild(tag);

//     tag.appendChild(removeBtn);
//     container.insertBefore(tag, input);
// }


// let initialTags = ["English", "Arabic", "French"];
// initialTags.forEach(tag => addTag(tag));


// input.addEventListener("keydown", function(e) {
//     if (e.key === "Enter" && input.value.trim() !== "") {
//         e.preventDefault();
//         addTag(input.value.trim());
//         input.value = "";
//     }
// });



document.addEventListener("DOMContentLoaded", () => {
    let container = document.getElementById("tags-container");
    let input = document.getElementById("tag-input");

    function addTag(text) {
    let tag = document.createElement("span");
    tag.classList.add("tag");
    tag.textContent = text;

    let removeBtn = document.createElement("span");
    removeBtn.textContent = "×";
    removeBtn.classList.add("remove");
    removeBtn.onclick = () => container.removeChild(tag);

    tag.appendChild(removeBtn);
    container.insertBefore(tag,input);
}


let initialTags = ["English", "Arabic", "French"];
initialTags.forEach(tag => addTag(tag));


input.addEventListener("keydown", function(e) {
    if (e.key === "Enter" && input.value.trim() !== "") {
        e.preventDefault();
        addTag(input.value.trim());
        input.value = "";
    }
});
});



// -------form------------------------------------------------------------------------
let nameValidation = (input) => {

    let inputValue = input.value.trim()
    if (inputValue.length < 3) {
        handleError(input, "at least 3 character")
        input.nextElementSibling.innerText = "at least 3 character"
    }

    else {
        handleError(input)
        input.nextElementSibling.innerText = ""
    }
}

let handleError = (input, msg = "") => {
    input.nextElementSibling.innerText = msg
}


let emailValidation = (input) => {
    let inputValue = input.value
    // let reg = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$/
    let reg = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/

    console.log(reg.test(inputValue))
    if (!reg.test(inputValue)) handleError(input, "enter a valid email")
    else handleError(input)

}


// -------jquery------------------------------------------------------------------------

// if (document.querySelector('.owl-carousel')) {
//     $(document).ready(function () {
//         $(".owl-carousel").owlCarousel({
//             items: 7,
//             margin: 20,
//             loop: true,
//             nav: true,
//             navText: ['<div class="circle-arrow bg-secondary-subtle align-items-center "><i class="fa-solid fa-angle-left m-arrow"></i></div>',
//                 '<div class=" circle-arrow  bg-secondary-subtle "><i class="fa-solid fa-angle-right m-arrow   "></i></div>']

//         });
//     });

// }
$(document).ready(function () {
    if ($('.owl-carousel').length) {
        $(".owl-carousel").owlCarousel({
            items: 7,
            margin: 20,
            loop: true,
            nav: true,
            navText: [
                '<div class="circle-arrow bg-secondary-subtle align-items-center "><i class="fa-solid fa-angle-left m-arrow"></i></div>',
                '<div class=" circle-arrow  bg-secondary-subtle "><i class="fa-solid fa-angle-right m-arrow"></i></div>'
            ]
        });
    }
});
