
// function clickMouse(click) {

//             let items = document.getElementsByTagName("li");

//             for (let i = 0; i < items.length; i++) {
//                 items[i].classList.remove("click-m");
//             }


//             click.classList.add("click-m");
//         }


let form = document.getElementById('form');
let tableBody = document.getElementById('tableBody');
let users = [];

form.addEventListener('submit', (e) => {
    e.preventDefault();

    let obj = {
        firstName: e.target[0].value,
        lastName: e.target[1].value
    };

    users.push(obj);

    let row = document.createElement('tr');

    let firstNameTd = document.createElement('td');
    firstNameTd.innerText = obj.firstName;

    let lastNameTd = document.createElement('td');
    lastNameTd.innerText = obj.lastName;

    let actionTd = document.createElement('td');

    let editBtn = document.createElement('button');
    editBtn.innerText = "Edit";
    editBtn.addEventListener('click', () => {
        let newFirst = prompt("Enter new first name:", obj.firstName);
        let newLast = prompt("Enter new last name:", obj.lastName);

        if (newFirst && newLast) {
            obj.firstName = newFirst;
            obj.lastName = newLast;

            firstNameTd.innerText = newFirst;
            lastNameTd.innerText = newLast;

            console.log("User updated:", obj);
        }
    });

    let removeBtn = document.createElement('button');
    removeBtn.innerText = "Remove";
    removeBtn.addEventListener('click', () => {
        let index = users.indexOf(obj);
        if (index !== -1) users.splice(index, 1);

        row.remove();
        console.log("User removed. Remaining users:", users);
    });


    actionTd.appendChild(editBtn);
    actionTd.appendChild(removeBtn);

    
    row.appendChild(firstNameTd);
    row.appendChild(lastNameTd);
    row.appendChild(actionTd);

    
    tableBody.appendChild(row);

    console.table(users);

    
    form.reset();
});



// let elementDiv = document.getElementById('div_element')

// let newH2 = document.createElement('h2')

// newH2.innerText = "Javascript"

// console.log(newH2)

// elementDiv.appendChild(newH2)
