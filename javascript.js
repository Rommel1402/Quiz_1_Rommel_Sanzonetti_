
    function validar(valor) {
            if (valor.value == "") {
        valor.className = 'error';
            } else {
        valor.className = 'campos';
            }
        }
        function validar_Numeros(valor) {
            if (valor.value == "") {
        valor.className = 'error';
            } else {
                if (isNaN(valor.value)) {
        valor.className = 'error';
                    valor.value = "";

                } else {
        valor.className = 'campos';
                }
            }
        }

        function longitud(valor, minimo) {

                var h=true;
                if (valor.length < minimo) {
        valor.className = "error";

                    return false;
                } else {

        valor.className = 'campos';
                    return true;
                }


            }

        function todo_correcto(f) {

                var ok = true;
                msg = "Debes escribir contenido en los campos: \n";
                // alert(msg+'\n' +f.elements[0].id+ '\n'+ f.elements[1].id +'\n' + f.elements[2].id+'\n' + '\n');

                // alert(f.elements[1].value);
                // alert(f.elements[2].value);
                // alert(f.elements[3].value);


                for (i = 0; i < f.length-1; i++) {
                    // alert('i');
                    if (((longitud(f.elements[i].value, 3)) == false)) {
        msg += f.elements[i].id;
                        ok = false;
                        break;
                    }

                }
                if (ok == false) {
        alert(msg);

                    return false;
                }
                alert('Formulario enviado')
                return true;
            }

