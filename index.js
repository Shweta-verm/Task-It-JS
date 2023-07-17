let inputField = document.getElementById('inputField');
let add = document.getElementById('add');
let toDoContainer = document.getElementById('toDoContainer');

add.addEventListener('click', function(){
    // addEventListener() -- used to provide event on id
    // in this function only name event as click, dbclick 
    var para = document.createElement('p')
    para.innerText = inputField.value
    para.classList.add('dummy')
    // used to access class initalized in css file to js file directly.
    toDoContainer.append(para);
    inputField.value = ''
    para.addEventListener('click', function(){
        para.style.textDecoration = 'line-through'
        // .style -- used to provide inline css in js 
    })
    para.addEventListener('dblclick', function(){
        toDoContainer.removeChild(para)
    })
    // console.log(para) -- used to check the exceution at each step.
    //.value -- used to take value from inputfield
})