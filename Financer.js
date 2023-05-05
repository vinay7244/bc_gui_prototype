import "./Seller.css"
import React,{useState} from 'react';
function Financer()
{
    const [name,setName]=useState('')
    const [Item,setItem]=useState('')
    const [qty,setQty]=useState('')
    const [Price,setPrice]=useState('')
    function handleSubmit(event){
        event.preventDefault();
        console.log(name);
        document.getElementById("f1").innerHTML = "NFT Id:"+name;
        document.getElementById("f2").innerHTML = "Name of Buyer:"+Item;
        document.getElementById("f5").innerHTML = "Date of creation:4/5/2023"
        document.getElementById("f4").innerHTML = "Price:"+Price;
        

    }
    return (
        <div class="body">
        <h1 class="head">Financer Dashboard</h1>
        <br/>
        <div class="form">
        <h1>Verify invoice details</h1>
        <form onSubmit={handleSubmit}>
        <label for="UserName">NFT Id:</label>
        <br/>
         <div class="H1">
        <input type="text" id="uname" name="uname" onChange={e=>setName(e.target.value)}/>
        </div>
        <br/>
        <label for="UserName">Current Owner:</label>
        <br/>
         <div class="H1">
        <input type="text" id="uname" name="uname" onChange={e=>setItem(e.target.value)}/>
        </div>
        <br/>
        <label for="UserName">Buyer:</label>
        <br/>
         <div class="H1">
        <input type="text" id="uname" name="uname" onChange={e=>setQty(e.target.value)}/>
        </div>
        <br/>
        <label for="lname">Price:</label>
        <br />
        <div class="H2">
         <input type="text" id="pass" name="pass" onChange={e=>setPrice(e.target.value)}/>
        </div>
        <br/>
        <br/>
        <input type="submit" value="Verify"/>
        </form>
        </div>
        <div class="panel">
        <div class="entry">
            <label>NFT ID:58345333</label><br/>
            <label>Name of the Buyer: ITC</label><br/>
            <label>Date of Creation:3/3/2023</label><br/>
            <label>Price of the NFT: 3,00,000</label><br/>
            <label>Enter your Signature to SELL NFT:-</label>
            <div class="H2">
            <input type="text"></input>
            </div>
            <input type="submit" value="Sell"></input>
        </div>
        <br/>
        <div class="entry">
            <label>NFT ID:24445333</label><br/>
            <label>Name of the Buyer: Apple</label><br/>
            <label>Date of Creation:4/4/2023</label><br/>
            <label>Price of the NFT: 33,00,000</label><br/>
            <label>Enter your Signature to SELL NFT:-</label>
            <div class="H2">
            <input type="text"></input>
            </div>
            <input type="submit" value="Sell"></input>
        </div>
        <br/>
        <div class="entry">
            <label id='f1'></label>
            <br />
            <label id='f5'></label>
            <br />
            <label id='f2'></label>
            <br />
            <label id='f4'></label>
            <br />
            <label>Enter your Signature to SELL NFT:-</label>
            <div class="H2">
            <input type="text"></input>
            </div>
            <input type="submit" value="Sell"></input>
        </div>

        </div>


        </div>

    );
}
export default Financer;