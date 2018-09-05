
 window.onload = function(){
    var inputs = document.getElementsByClassName("form");
            for (var i = 0; inputs.length;i++){
            inputs[i].addEventListener('focus',addFocus,false);
            inputs[i].addEventListener('blur',removeFocus,false);
          }
          function addFocus(){
            this.classList.add('focus');
          }
          function removeFocus(){
            this.classList.remove('focus');
          }
}

    document.getElementById('Submit').onclick = function(event)
        {
        event.preventDefault();
        SubmitContactForm();
        return false;
        }


function SubmitContactForm(){

    var name = document.getElementById('FirstName'),
    Lname = document.getElementById('LastName'),
    phone = document.getElementById('Phone'),
    eMail = document.getElementById('E-mail'),
    coment = document.getElementById('Coment');
    comentValue = coment.value;
    /*----------- REGULAR ----------*/
    var regName = /^[a-zA-Zа-яА-ЯÕõÜüÄäÖö]+$/i,
    regLname = /^[a-zA-Zа-яА-ЯÕõÜüÄäÖö]+$/i,
    regPhone = /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g,
    regEmail = /.+@.+\..+/i;
    /*-------------------------------*/
    frmOk = true;
    /*-------------------------------*/

    if (name.value==="" || name.value.length<=3) {
            var errText = "";
            addError(name,errText);
            frmOk = false;
        }else if(!regName.test(name.value)){
            var errText = 'В имени не должно быть цифр или других симолов';
            errText.innerHTML;
            addError(name,errText);
            frmOk = false;
        }

        if (Lname.value==="" || Lname.value.length<=3) {
            var errText = "";
            addError(Lname,errText);
            frmOk = false;
        }else if (!regLname.test(Lname.value)) {
           var errText = 'В Фамилии не должно быть цифр или других симолов';
           errText.innerHTML;
           addError(Lname,errText);
           frmOk = false;

        }

        if (phone.value==="") {
            var errText = "";
            addError(phone,errText);
            frmOk = false;

        }else if(!regPhone.test(phone.value)){
                var errText = 'Вы ввели не цифры';
                addError(phone,errText)
                frmOk = false;
        }

        if (eMail.value==="") {
            var errText = "";
            addError(eMail,errText);
            frmOk = false;
        }
        else if (!regEmail.test(eMail.value)) {
            eMail.classList.add("wrong");
           var errText ='Не вверный формат эмейла';
           addError(eMail,errText);
           frmOk = false;
        }
        if (comentValue.length === 0||comentValue.length === 1 ) {
            var errText = "";
            addError(coment,errText);
            frmOk = false;

        }else if(comentValue.length<=3 && comentValue.length >1){
            var errText = "Слишком мало символов";
            addError(coment,errText);
            frmOk = false;

        }
        if ( frmOk === true) {
            var newImg = document.createElement('img');
            newImg.src="img/loading.gif";
            document.getElementsByTagName('body')[0].appendChild(newImg);

            document.getElementsByTagName('form')[0].style.display = 'none';
            document.getElementById('message').style.border = 5 + 'px solid green';
            document.getElementById('message').innerHTML = 'Все поля заполнены согласно правилам';
            document.getElementById('message').style.display="none";

            setTimeout(function(){      
                document.getElementsByTagName("img")[0].style.display="none"
                document.getElementById('message').style.display="block";

            },1000)


        }

    }

    function addError(field, errText)//функция получает параметры, тогда когда поле не прошло проверку.
        {
        field.className = "field wrong"; //присваеваем полю которое мы передали класс
        var err = document.getElementById(field.name+'-error'); // получаем поле ошибки и кладем его в переменную err

        if (err) // если она true
            {
            err.innerHTML = errText; // выводим содержание ошибки в поле err
            err.style.display = "block"; // отображаем ошибку
        }

        field.onfocus = function() // повесели на поле которое передали обработчк onfocus
            {
            this.className = "field"; // этому полю даем класс field
            this.classList.add('focus');
            var err = document.getElementById(this.name+'-error'); // получаем поле ошибки и кладем его в переменную err
            if (err) err.style.display = "none"; // если она есть убираем текст ошибки
        }

}
