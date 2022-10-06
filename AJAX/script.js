document.getElementById("button1").addEventListener('click', getCustomer);
document.getElementById("button2").addEventListener('click', getCustomers);
function getCustomer(e){
    //create xhr object
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "customer.json", true);
    xhr.onload = function(){
        if(this.status === 200){
            //console.log(this.responseText);
            const customerdetail = JSON.parse(this.responseText);
            console.log(customerdetail);
            const output =`
                <ul>
                    <li>ID: ${customerdetail.id}</li>
                    <li>Name: ${customerdetail.name}</li>
                    <li>Company: ${customerdetail.Company}</li>
                    <li>Phone: ${customerdetail.Phone}</li>
                </ul>
            `;
            document.getElementById('customer').innerHTML = output;
        }
    }
    xhr.send();
}

function getCustomers(e){
    //create xhr object
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "customers.json", true);
    xhr.onload = function(){
        if(this.status === 200){
            //console.log(this.responseText);
            const customerdetails = JSON.parse(this.responseText);
            let output ='';
            customerdetails.forEach(function(customerdetail){
                output +=`
                <ul>
                    <li>ID: ${customerdetail.id}</li>
                    <li>Name: ${customerdetail.name}</li>
                    <li>Company: ${customerdetail.Company}</li>
                    <li>Phone: ${customerdetail.Phone}</li>
                </ul>
            `;
            })

            document.getElementById('customers').innerHTML = output;
        }
    }
    xhr.send();
}