"use strict";
let todoList = [];

let initList = function () {
    let savedList = window.localStorage.getItem("todos");
    if (savedList != null)
        todoList = JSON.parse(savedList);
    else
        todoList.push(
            {
                title: "Learn JS",
                description: "Create a demo application for my TODO's",
                place: "445",
                dueDate: new Date(2019, 10, 16)
            },
            {
                title: "Lecture test",
                description: "Quick test from the first three lectures",
                place: "F6",
                dueDate: new Date(2019, 10, 17)
            }
        )

};

//initList();

$.ajax({
    url: 'https://api.jsonbin.io/b/5dad5d53359b467a5851509e/latest',
    type: 'GET',
    headers: {
        'secret-key': '$2b$10$lbRoAd5Q1WOxrWkOD9/1u.ST9cOGhpLhxd7WohN48tIDa88Hs5/TW'
    },
    success: (data) => {
        todoList = data;
    },
    error: (err) => {
        console.log(err.responseJSON);
    }

});

let updateJSONbin = function () {
    $.ajax({
        url: 'https://api.jsonbin.io/b/5dad5d53359b467a5851509e',
        type: 'PUT',
        headers: {
            'secret-key': '$2b$10$lbRoAd5Q1WOxrWkOD9/1u.ST9cOGhpLhxd7WohN48tIDa88Hs5/TW'
        },
        contentType: 'application/json',
        data: JSON.stringify(todoList),
        success: (data) => {
            console.log(data);
        },
        error: (err) => {
            console.log(err.responseJSON);
        }
    })
};

let updateTodoList = function () {
    //let todoListDiv = document.getElementById("todoListView");
    let filterInput = document.getElementById("inputSearch");
    let todoTable = document.getElementById("todoTable");

    while (todoTable.firstChild) {
        //todoListDiv.removeChild(todoListDiv.firstChild);
        todoTable.removeChild(todoTable.firstChild);
    }

    for (let todo in todoList) {
        //let newElement = document.createElement("div");

        let newTableTr = document.createElement("tr");
        let newDeleteButton = document.createElement("input");
        newDeleteButton.type = "button";
        newDeleteButton.value = "X";
        newDeleteButton.className = "btn btn-danger";
        newDeleteButton.addEventListener("click",
            function () {
                deleteTodo(todo);
            });

        if (
            (filterInput.value === "") ||
            (todoList[todo].title.includes(filterInput.value)) ||
            (todoList[todo].description.includes(filterInput.value))
        ) {
            /*let newElement = document.createElement("p");
            let newContent = document.createTextNode(todoList[todo].title + " " +
                                                            todoList[todo].description);
            newElement.appendChild(newContent);
            todoListDiv.appendChild(newElement);
            newElement.appendChild(newDeleteButton);*/

            /*let todoElements = ["title","description","place","dueDate"];
            for (let todoElement in todoList[todo]){
                let newTableTd = document.createElement("td");
                let newContent = document.createTextNode(todoList[todo][todoElement]);
                newTableTd.appendChild(newContent);
                newTableTr.appendChild(newTableTd);
            }*/

            let newTableTd = document.createElement("td");
            let newContent = document.createTextNode(todoList[todo].title);
            newTableTd.appendChild(newContent);
            newTableTr.appendChild(newTableTd);

            newTableTd = document.createElement("td");
            newContent = document.createTextNode(todoList[todo].description);
            newTableTd.appendChild(newContent);
            newTableTr.appendChild(newTableTd);

            newTableTd = document.createElement("td");
            newContent = document.createTextNode(todoList[todo].place);
            newTableTd.appendChild(newContent);
            newTableTr.appendChild(newTableTd);

            let currentDate = new Date(todoList[todo].dueDate);
            let formattedDate = currentDate.getFullYear() + "-" + addZero(currentDate.getMonth() + 1) + "-" + addZero(currentDate.getDate());

            newTableTd = document.createElement("td");
            newContent = document.createTextNode(formattedDate);
            newTableTd.appendChild(newContent);
            newTableTr.appendChild(newTableTd);

            newTableTd = document.createElement("td");
            newTableTd.appendChild(newDeleteButton);
            newTableTr.appendChild(newTableTd);

        }

        todoTable.appendChild(newTableTr);
    }

};


function addZero(n) {
    if (n <= 9) {
        return "0" + n;
    }
    return n
}


setInterval(updateTodoList, 1000);

let deleteTodo = function (index) {
    todoList.splice(index, 1);
    //window.localStorage.setItem("todos", JSON.stringify(todoList));
    updateJSONbin();
};

let addTodo = function () {
    let inputTitle = document.getElementById("inputTitle");
    let inputDescription = document.getElementById("inputDescription");
    let inputPlace = document.getElementById("inputPlace");
    let inputDate = document.getElementById("inputDate");

    let newTitle = inputTitle.value;
    let newDescription = inputDescription.value;
    let newPlace = inputPlace.value;
    let newDate = new Date(inputDate.value);

    let newTodo = {
        title: newTitle,
        description: newDescription,
        place: newPlace,
        dueDate: newDate
    };

    todoList.push(newTodo);
    updateJSONbin();

    inputTitle.value = "";
    inputDescription.value = "";
    inputPlace.value = "";
    inputDate.value = "";
    //window.localStorage.setItem("todos", JSON.stringify(todoList));
};
