var input, filter, sugesstions, txtValue;
    input = document.getElementById("search-box");
            
function search() {
    filter = input.value.toUpperCase();
    sugesstions = document.getElementsByTagName('li');
           for (let i = 0; i < sugesstions.length; i++) {
            sugesstions[i].style.display = "none";
           
                if (sugesstions[i]) {
                    txtValue = sugesstions[i].textContent || sugesstions[i].innerText;
                    if (!txtValue.toUpperCase().indexOf(filter)) {
                       sugesstions[i].style.display = "block";
                    }
                     if (input.value == '') 
                        sugesstions[i].style.display = "none";
                }
            }
        }

input.setAttribute('onkeyup', 'search()');
