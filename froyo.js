const userInputString = prompt (
    "Please enter a list of froyo flavors separated by a comma.",
    "vanilla,vanilla,vanilla,strawberry,coffee,coffee"
);

const promptArray = userInputString.split(",");
console.log(promptArray);

function displayOrder(flavorsArray){
    const userOrder = {};
    for (let i = 0; i < flavorsArray.length; i++) {
        if (userOrder[flavorsArray[i]]) {
            userOrder[flavorsArray[i]] = userOrder[flavorsArray[i]] + 1;
        } else {
            userOrder[flavorsArray[i]] = 1;
        }
}
return userOrder;
}
console.log (displayOrder (promptArray));



