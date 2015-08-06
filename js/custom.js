    
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
        var thousand =0,hundred=0,taka=0;

        document.querySelector('#product_list').style.display='none';
        document.querySelector('#product_brochure').style.display='block';


        var tk = parseInt(document.getElementById("total").innerHTML,10);

        if(tk>0 && tk<100){
            taka = tk;
            thousand = '',
            hundred='';
        }
        else if(tk>99 && tk<1000){
            hundred=parseInt(tk/100,10);
            if(tk%100){
              taka = totaltk-(100 * hundred);  
            }
            else{
               taka = ''; 
            }      
            thousand = '';
        }
        else if(tk>999 && tk<100000){
            thousand = parseInt(tk/1000,10);

            if(tk%1000){
              taka = totaltk-(100 * hundred);
              hundred= parseInt((tk-(1000 * thousand))/100,10);
              if(tk%100){
                    taka = totaltk-(100 * hundred);  
                }
                else{
                   taka = ''; 
                }  
            }
            else{
               hundred = ''; 
               taka = ''; 
            } 
        }
        else{

        }

        if(thousand)
            thousand= thousand+'thousand';
        if(hundred)
            hundred= hundred+'hundred';

        //for show in word taka
        document.querySelector('#totaltk').innerHTML = tk;
        document.querySelector('#thousand').innerHTML = thousand;
        document.querySelector('#hundred').innerHTML = hundred;
        document.querySelector('#taka').innerHTML = taka;
        //for show date
        document.querySelector('#date').innerHTML = Date();
        


    }
