let names = [
    'Ali',
    'Ahmad',
    'Alia',
    'Jake',
    'Henry',
    'Jack',
    'Jad',
    'Jan',
    'John',
    'Stephen',
    'Brad',
    'Taylor',
    'Timmy',
    'Cathy',
    'Sam',
    'Dany',
    'Ellen',
    'Emilie',
    'Nadia',
    'Harvy',
    'Lucy',
    'Amy',
    'Glen',
    'Peter',
    'Mohammad'
];
//sort names in asc
let sortedNames = names.sort();
        // console.log(sortedNames);

let input = document.getElementById('input');

//execute function on keyup
input.addEventListener('keyup',(e) => {
    //loop through above array
    //initially remove all elements (so if user erases a letter  or adds new one then clean previous outputs)
    removeElements();
    for(let i of sortedNames){
                // console.log(i);
        //convert input to lowercase and compare with each string
        if(i.toLocaleLowerCase().startsWith(input.value.toLocaleLowerCase()) && input.value != ""){
            //create li element 
            let listItem = document.createElement('li');
            //one common class name
            listItem.classList.add('list-items');
            listItem.style.cursor = 'pointer';
            listItem.setAttribute('onclick',"displayNames('"+ i + "')");
            // display matched part in bold
            let word = "<b>" + i.substr(0,input.value.length) + "</b>";
            word += i.substr(input.value.length);
            //display value in an array
            listItem.innerHTML = word;
            document.querySelector('.list').appendChild(listItem);
        }
    }
});
function displayNames(value){
    input.value=value;
    removeElements();
};
function removeElements(){
    //clear all the item 
    let items = document.querySelectorAll('.list-items');
    items.forEach((item) => {
        item.remove();
    });
};