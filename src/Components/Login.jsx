
import React from 'react';


const Login = () => {

    return (
        <>
         <div className="hero">
            <div className="card bg-dark text-black border-0">
                <img src="/assets/background_image3.jpg" className="card-img" alt="BackgroundImage" height="550px" />
                <div className="card-img-overlay d-flex flex-column justify-content-center ">
                    
            <div id="fromdiv">
                <form action="./" className="rounded p-4 p-sn-3 " id="formdesign">
                    <table cellPadding={"20px"} >
                        <tr className="mb-r3">
                            <td> <label htmlFor=""><b>Email Address:</b></label></td>
                            <td><input type="email" /></td>
                        </tr>
                        <tr className="mb-r3" >
                            <td> <label htmlFor=""><b>Password:</b></label></td>
                            <td> <input type="password" /></td>
                        </tr>
                        <tr className="mb-r3">
                            <td>  <label htmlFor=""><i>Remember me</i></label></td>
                            <td>  <input type="checkbox" /></td>
                        </tr>
                        <tr><td colSpan={2}><button type='submit' style={{ width: "100%", backgroundColor: "green", color: "white" }}>LOGIN</button></td></tr>
                        <tr><td colSpan={2}><button type='submit' style={{ width: "100%", backgroundColor: "skyblue", color: "black" }}>REGISTER</button></td></tr>

                    </table>
                </form>
            </div>

            </div>
            </div>
        </div>
        </>
    );
}
export default Login;