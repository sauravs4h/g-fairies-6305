let buy_data=JSON.parse(localStorage.getItem("buy"))  

let card= document.createElement("div");
            document.querySelector("#buylines").append(card);
            

            let productimg=document.createElement("img");
            productimg.src=buy_data.img_url;
            let productname=document.createElement("p");
            productname.innerText=buy_data.name;
            let productprice=document.createElement("h2");
            productprice.innerText=buy_data.price;

            let buynow=document.createElement("button");
            buynow.innerText="BUY NOW"
            
            

            card.append(productimg,productname,productprice,buynow)
