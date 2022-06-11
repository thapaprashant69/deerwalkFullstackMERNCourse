const vegetables = ['radish','spinach','cauliflower','potato'];


const checkItem = (itemArray,itemToSearch) =>{
    if(itemArray.indexOf(itemToSearch) === -1){
        console.log(`${itemToSearch} is not present in array [${itemArray}].Adding value to array.....`)
        itemArray.push(itemToSearch);
    }
    else{
        console.log(`${itemToSearch} is present in array`);
    }
}

checkItem(vegetables,"carrot");

console.log(vegetables);