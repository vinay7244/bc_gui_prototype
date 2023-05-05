import "./Main.css"
import React,{useState} from 'react';
import {Link} from 'react-router-dom'
function Main()
{
  const [name,setName]=useState('');
    return(
    <body>
 <div class="Demo">
    <h1>Sign In</h1>
<form>
  <label for="UserName">User name:</label>
  <br/>
  <div class="H1">
  <input type="text" id="uname" name="uname" onChange={e=>setName(e.target.value)}/>
  </div>
  <br/>
  <label for="lname">Password:</label>
  <br />
  <div class="H2">
  <input type="password" id="pass" name="pass"/>
  </div>
  <br/>
  <br/>
  <Link to={'/'+name}className='btn btn-primary'>Sign In</Link>
</form>
</div>
</body>
    );
}
export default Main