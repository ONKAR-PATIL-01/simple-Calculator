function insert(num){
    var text = document.form.textinput.value
    document.form.textinput.value = text + num
}

function clean(){
    document.form.textinput.value = ""
}
     
function calculate(){
    var text = document.form.textinput.value
    document.form.textinput.value = eval(text)
}
     
function back(){
     var text = document.form.textinput.value
     document.form.textinput.value = text.substring(0,text.length-1)
}
     

     

