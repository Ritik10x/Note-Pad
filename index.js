// button add
let btn = document.querySelector('.btnAdd')

btn.onclick = () => {

  let scroll = document.querySelector('.scroll')
  //  let scrDiv = document.createElement('div')
  //  scrDiv.style.width= '90%';
  //   scrDiv.style.height='172px';
  //   scrDiv.style.backgroundColor= 'rgb(228, 228, 228)';
  //   scrDiv.style.overflowYy= 'scroll';

  //  scrDiv.style.margin='38px';



  let list = document.createElement('ol')
  list.style = 'none'



  let input = document.querySelector('.inn')
  let task = input.value.trim()
  if (task === "") {
    alert("Please enter a task before adding!")
    return
  }
  list.textContent = task
  input.value = ''// this making input empty after affing



  scroll.appendChild(list);
  // scrDiv.appendChild(input)








  // 





  // edit 
  let edit = document.createElement('button')
  edit.textContent = 'edit'
  edit.style.backgroundColor = 'grey'
  edit.style.color = 'white'
  edit.style.marginLeft = '15px'
  edit.style.marginRight = '15px'
  edit.style.borderRadius = '9px'
  list.appendChild(edit)




  edit.onclick = () => {
    let inn = prompt('enter list', list.textContent)
    list.textContent = inn;


    list.appendChild(edit)
    list.appendChild(dlte)
  }

  // delete

  let dlte = document.createElement('button')
  dlte.textContent = 'delete'
  dlte.style.color = 'white'
  dlte.style.backgroundColor = 'red'
  dlte.style.borderRadius = '9px'
  list.appendChild(dlte)

  dlte.onclick = () => {
    list.remove()
  }
}


//TOGGLE SWITCH




document.body.style.backgroundColor = 'white'


let btn1 = document.createElement('button')
btn1.setAttribute('class', 'one')
btn1.textContent = 'ON'
btn1.style.width = '3%'
btn1.style.height = '20px'
btn1.style.border = '1px solid black'
btn1.style.backgroundColor = 'white'
btn1.style.marginTop = '8px'
btn1.style.borderRadius = '16px 0px 0px 16px '
btn1.style.cursor = 'pointer'
document.body.appendChild(btn1)


let btn2 = document.createElement('button')
btn2.setAttribute('class', 'two')
btn2.textContent = 'OFF'
btn2.style.width = '3%'
btn2.style.height = '20px'
btn2.style.border = '1px solid black'
btn2.style.marginTop = '8px'
btn2.style.borderRadius = '0px 16px 16px 0px '
btn2.style.backgroundColor = 'blue'
btn2.style.cursor = 'pointer'
document.body.appendChild(btn2)

btn1.onclick = () => {
  if (document.body.style.backgroundColor == 'white') {
    document.body.style.backgroundColor = 'rgb(40, 40, 40)'


    btn1.style.backgroundColor = 'red'
    btn2.style.backgroundColor = 'white'
  }

}

btn2.onclick = () => {
  if (document.body.style.backgroundColor == 'rgb(40, 40, 40)') {
    document.body.style.backgroundColor = 'white'


    btn2.style.backgroundColor = 'blue'
    btn1.style.backgroundColor = 'white'
  }


}

