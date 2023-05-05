import "./Seller.css"
import React,{useState} from 'react';
function Seller()
{
    const [name,setName]=useState('')
    const [Item,setItem]=useState('')
    const [qty,setQty]=useState('')
    const [Price,setPrice]=useState('')
    function handleSubmit(event){
        event.preventDefault();
        console.log(name);
        document.getElementById("f1").innerHTML = "Company Name:"+name;
        document.getElementById("f2").innerHTML = "Item:"+Item;
        document.getElementById("f3").innerHTML = "Quantity:"+qty;
        document.getElementById("f4").innerHTML = "Price:"+Price;
        

    }
    return (
        <div class="body">
        <h1 class="head">Seller Dashboard</h1>
        <br/>
        <div class="form">
        <h1>Enter the invoice details</h1>
        <form onSubmit={handleSubmit}>
        <label for="UserName">Company name:</label>
        <br/>
         <div class="H1">
        <input type="text" id="uname" name="uname" onChange={e=>setName(e.target.value)}/>
        </div>
        <br/>
        <label for="UserName">Item:</label>
        <br/>
         <div class="H1">
        <input type="text" id="uname" name="uname" onChange={e=>setItem(e.target.value)}/>
        </div>
        <br/>
        <label for="UserName">Quantity:</label>
        <br/>
         <div class="H1">
        <input type="text" id="uname" name="uname" onChange={e=>setQty(e.target.value)}/>
        </div>
        <br/>
        <label for="lname">Prices:</label>
        <br />
        <div class="H2">
         <input type="text" id="pass" name="pass" onChange={e=>setPrice(e.target.value)}/>
        </div>
        <br/>
        <br/>
        <input type="submit" value="Submit"/>
        </form>
        </div>
        <div class="panel">
        <div class="entry">
            <label>Name of the company: ITC</label><br/>
            <label>Item: Tobacco</label><br/>
            <label>Quantity: 100KG</label><br/>
            <label>Price of the Invoice: 3,00,000</label><br/>
            <label>Click here to mint NFT===></label>
            <input type="submit" value="Accept and Mint"></input>
        </div>
        <br/>
        <br/>
        <div class="entry">
            <label>Name of the company: Apple</label><br/>
            <label>Item: Microchip</label><br/>
            <label>Quantity: 100,000</label><br/>
            <label>Price of the Invoice: 15,00,000</label><br/>
            <label>Click here to mint NFT===></label>
            <input type="submit" value="Accept and Mint"></input>
        </div>
        <br/>
        <div class="entry">
            <label>Name of the company: Amazon</label><br/>
            <label>Item: Processor</label><br/>
            <label>Quantity: 10,00,000</label><br/>
            <label>Price of the Invoice: 25,00,000</label><br/>
            <label>Click here to mint NFT===></label>
            <input type="submit" value="Accept and Mint"></input>
        </div>
        <br/>
        <div class="entry">
            <label id='f1'></label>
            <br />
            <label id='f2'></label>
            <br />
            <label id='f3'></label>
            <br />
            <label id='f4'></label>
            <br />
            <label>Click here to mint NFT===></label>
            <input type="submit" value="Accept and Mint"/>
        </div>
        </div>


        </div>

    );
}
export default Seller