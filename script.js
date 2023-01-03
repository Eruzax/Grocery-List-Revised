function initialize()
{
    grocery = document.getElementById("groceries");
    groceryListArray = [];
    groceryList = "<br />";

    addItem = document.getElementById("itemname");
    deleteItem = document.getElementById("deleteitemnum");
    moveItem = document.getElementById("moveitemNumber");

    display();
}

function addGroceries()
{
    let item = addItem.value;
    if (item != "")
    {
        if (dupeCheck(item))
            groceryListArray.push(item);
            console.log(item);
    }

    addItem.value = "";

    display();
}

function deleteGroceries()
{
    let item = deleteItem.value;
    if (deleteItem.value != "" && groceryListArray.length != 0 && deleteItem.value != 0)
    {
        groceryListArray.splice(item - 1, 1);
    }

    deleteItem.value = "";

    display();
}

function moveUp()
{
    if (moveItem.value != "" && groceryListArray.length != 0)
    {
        let item = moveItem.value;

        if (item > 0 && item - 1 != 0)
        {
            let temp = groceryListArray[item - 1];
            groceryListArray[item - 1] = groceryListArray[item - 2];
            groceryListArray[item - 2] = temp;
            if (item - 1 >= 0)
            {
                moveItem.value = item - 1;
            }
        }
        else if (item - 1 < 0 || item - counter == 0)
        {
            console.log("It is at the top of the list")
        }
    }

    display();
}

function moveDown()
{
    if (moveItem.value != "" && groceryListArray.length != 0)
    {
        let item = moveItem.value;
        console.log(item);
        if (item > 0 && item <= groceryListArray.length)
        {
            let temp = groceryListArray[item - 1];
            groceryListArray[item - 1] = groceryListArray[item];
            groceryListArray[item] = temp;

            if (item + 1 != groceryListArray.length)
            {
                moveItem.value++;
                console.log(moveItem.value);
            }
        }
        else if (item + 1 == groceryListArray.length)
        {
            console.log("It is at the bottom of the list")
        }
    }

    display();
}

function dupeCheck(item)
{
    for (var i = 0; i < groceryListArray.length; i++)
    {
        if (item === groceryListArray[i])
        {
            return false;
        }
    }
    return true;
}

function display()
{
    groceryList = "<br />";
    for (var i = 0; i < groceryListArray.length; i++)
    {
        groceryList += i + 1 + ")" + groceryListArray[i] + "<br />";
    }

    grocery.innerHTML = groceryList;
}