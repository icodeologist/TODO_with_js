document.getElementById('addButton').addEventListener('click', function(event) {

    //prevent form from submiting and vanishing new added div
    event.preventDefault();
    //get the text input value
    let itemInputValue = document.getElementById('itemInput').value;

    //create a div for new cheack box and input field
    if (itemInputValue != ""){
        let newDiv = document.createElement('div');
        //generating unique Id
        newDiv.id = 'newItemDiv_' + new Date().getTime();

        //create a input checkox
        let checkBox = document.createElement('input');
        checkBox.type = 'checkbox';

        //create the input to store value from mainDiv input form
        let storingInput = document.createElement('input');
        storingInput.value = itemInputValue;

        //delete button
        let deleteButton = document.createElement('button')
        deleteButton.id = 'btn-delete_'+ new Date().getTime();
        // generate the ids for deleete button auto 
        deleteButton.innerHTML = 'Delete';
        
        //deleting id
        deleteButton.addEventListener('click', () => newDiv.remove());

        //append the elements to dic
        newDiv.appendChild(checkBox);
        newDiv.appendChild(storingInput);
        newDiv.appendChild(deleteButton);

        //append this newDiv to the html div (exposingItem)
        document.getElementById('exposingItem').appendChild(newDiv);

        //after all this operations we can cleat item input to empty string
        document.getElementById('itemInput').value =  '';
    }
});
