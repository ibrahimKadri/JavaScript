getTask = document.getElementById('task');
addBtn = document.getElementById('addBtn');

addBtn.addEventListener('click',()=>{
    if(getTask.value != ''){
        localStorage.setItem(Date(),getTask.value);
        getTask.value = '';
        location.reload();
    }
    else{
        location.reload();
    }
});

listTasks();
function listTasks(){
    for(let i=0; i<localStorage.length;i++){
        // Create the parent with two childs
        var div = document.createElement('div'); // parent
        var leftDiv = document.createElement('textarea'); // 1st child
        var rightDiv = document.createElement('span'); //2nd child
        leftDiv.setAttribute('class','leftDiv'); //set 1st child's class 
        rightDiv.setAttribute('class','rightDiv'); //set 1st child's class 
        // set the parent for the childs
        div.appendChild(leftDiv);
        div.appendChild(rightDiv);
        // fetching items key and text
        let key =  localStorage.key(i);
        const text = document.createTextNode(localStorage.getItem(key));
        // Create edit button
        let editBtn = document.createElement('button');
        editBtn.textContent = 'Edit';
        // execute the function when btn is clicked
        editBtn.addEventListener('click',()=>{
            getTask.value = text.textContent;
            addBtn.textContent = 'Edit';
            addBtn.addEventListener('click',()=>{
                localStorage.setItem(key,getTask);
                localStorage.removeItem(key);
                location.reload();
            });
        });
        // Create delete button
        let deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        // execute the function when btn is clicked
        deleteBtn.addEventListener('click',()=>{
            localStorage.removeItem(key);
            location.reload();
        });
        // set text in the 1st child
        leftDiv.appendChild(text);
        // set btns in the 2nd child
        rightDiv.appendChild(editBtn);
        rightDiv.appendChild(deleteBtn);
        // invoke the parent to view it's content
        var listedTasks = document.getElementById('listed-tasks');
        listedTasks.appendChild(div);
    }
}