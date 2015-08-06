    var totalPrice = 0;
    function savedata () {
        var name = document.querySelector('#name').value;
        var price = document.querySelector('#price').value;
        var quentity = document.querySelector('#quentity').value;
        totalPrice += quentity*price;


        var table = document.getElementById("productTable");

        // add raw:
        var row = table.insertRow(1);

        // Insert new cells:
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);

        // Add cells value:
        cell1.innerHTML = name;
        cell2.innerHTML = price;
        cell3.innerHTML = quentity;
        document.getElementById('total').innerHTML  = totalPrice;
    }


    function showBrochure(){

        document.querySelector('#product_list').style.display='none';
        document.querySelector('#product_brochure').style.display='block';


        var totaltk = parseInt(document.getElementById("total").innerHTML,10);

        document.querySelector('#totaltk').innerHTML = totaltk;

        document.querySelector('#date').innerHTML = Date();
        



        



    }
