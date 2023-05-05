import "./Buyer.css"
function Buyer()
{
    return (
        <div class="body">
        <h1 class="head">Buyer Dashboard</h1>
        <br/>
        <div class="form">
        <h1>Place Order</h1>
        <form>
        <label for="UserName">Seller name:</label>
        <br/>
         <div class="H1">
        <input type="text" id="uname" name="uname"/>
        </div>
        <br/>
        <label for="UserName">Item:</label>
        <br/>
         <div class="H1">
        <input type="text" id="uname" name="uname"/>
        </div>
        <br/>
        <label for="UserName">Quantity:</label>
        <br/>
         <div class="H1">
        <input type="text" id="uname" name="uname"/>
        </div>
        <br/>
        <label for="lname">Prices:</label>
        <br />
        <div class="H2">
         <input type="text" id="pass" name="pass"/>
        </div>
        <br/>
        <br/>
        <input type="submit" value="Submit"/>
        </form>
        </div>
        <div class="panel">
        <div class="entry">
            <label>Name of the Seller: Tobacco Kings</label><br/>
            <label>Invoice ID:32125665</label><br/>
            <label>Item: Tobacco</label><br/>
            <label>Quantity: 100KG</label><br/>
            <label>Price of the Invoice: 3,00,000</label><br/>
            <label>Enter your Signature to verify:-</label>
            <div class="H2">
            <input type="text"></input>
            </div>
            <input type="submit" value="Verify"></input>
        </div>
        <br/>
        <div class="entry">
            <label>Name of the Seller: Samsung</label><br/>
            <label>Invoice ID:34225665</label><br/>
            <label>Item: Lens</label><br/>
            <label>Quantity: 100,000</label><br/>
            <label>Price of the Invoice: 15,00,000</label><br/>
            <label>Enter your Signature to verify:-</label>
            <div class="H2">
            <input type="text"></input>
            </div>
            <input type="submit" value="Verify"></input>
        </div>
        <br/>
        <div class="entry">
            <label>Name of the Seller: Amazon</label><br/>
            <label>Invoice ID:63785665</label><br/>
            <label>Item: Processor</label><br/>
            <label>Quantity: 10,00,000</label><br/>
            <label>Price of the Invoice: 25,00,000</label><br/>
            <label>Enter your Signature to verify:-</label>
            <div class="H2">
            <input type="text"></input>
            </div>
            <input type="submit" value="Verify"></input>
        </div>
        <br/>
        </div>


        </div>

    );
}
export default Buyer