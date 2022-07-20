// get the output screen value 

let output = document.getElementById('output');

// button click display the value on screen 

function display(no){
  output.value += no;
}

// output screen value clear

function clr(){
  output.value = output.value.slice(0, -2);
}

// output screen all value delete 

function del(){
  output.value = '';
}

/* calculate operation */

function cal(){
  try{
    output.value = eval(output.value);
  }
  catch (error){
    alert('invaild');
  }
}