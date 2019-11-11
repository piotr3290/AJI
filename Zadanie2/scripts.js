"use strict";
let todoList = [];

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

    let todoTableSelector =  $("#todoTable");
    let inputSearchSelector = $("#inputSearch");
    let inputDateStartSelector = $("#inputDateStart");
    let inputDateEndSelector = $("#inputDateEnd");
    todoTableSelector.empty();


    for (let todo in todoList) {

        if ( searchCondition(todo, inputSearchSelector)
            && dateCondition(todo, inputDateStartSelector, inputDateEndSelector)) {

            todoTableSelector.append("<tr><td>" + todoList[todo].title + "</td>>" +
                "<td>" + todoList[todo].description + "</td> " +
                "<td>" + todoList[todo].place + "</td>"+
                "<td>" + dateFormatStr(todoList[todo].dueDate) + "</td>" +
                "<td><input type='button' value='X' class='btn btn-outline-success' /></td>"+
                "</tr>");
            $("#todoTable:last-child td input").click(function () {
                deleteTodo(todo);
            });
            console.log("test");

        }

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
    let inputTitle = $("#inputTitle");
    let inputDescription = $("#inputDescription");
    let inputPlace = $("#inputPlace");;
    let inputDate = $("#inputDate");;

    let newTitle = inputTitle.val();
    let newDescription = inputDescription.val();
    let newPlace = inputPlace.val();
    let newDate = new Date(inputDate.val());

    let newTodo = {
        title: newTitle,
        description: newDescription,
        place: newPlace,
        dueDate: newDate
    };

    todoList.push(newTodo);
    updateJSONbin();

    inputTitle.val("");
    inputDescription.val("");
    inputPlace.val("");
    inputDate.val("");

};

let searchCondition = function(todo, inputSearchSelector){
  return  inputSearchSelector.val() === "" ||
      todoList[todo].title.includes(inputSearchSelector.val()) ||
      todoList[todo].description.includes(inputSearchSelector.val()) ||
      todoList[todo].place.includes(inputSearchSelector.val())
};

let dateCondition = function(todo, inputDateStartSelector, inputDateEndSelector){
  return  (todoList[todo].dueDate >= inputDateStartSelector.val()
      || inputDateStartSelector.val() === "")
      && (new Date(todoList[todo].dueDate) <= new Date(inputDateEndSelector.val()) || inputDateEndSelector.val() === "")

};

let dateFormatStr = function(dueDate){
    let currentDate = new Date(dueDate);
    return currentDate.getFullYear() + "-" + addZero(currentDate.getMonth() + 1) + "-" + addZero(currentDate.getDate());
};
