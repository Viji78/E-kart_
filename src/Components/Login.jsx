
import React from 'react';


const Login = () => {

    return (
        <>
            <div id="fromdiv">
                <form action="./" className="rounded p-4 p-sn-3 " id="formdesign">
                    <table>
                        <tr className="mb-r3">
                            <td> <label htmlFor=""><b>Email Address:</b></label></td>
                            <td><input type="email" /></td>
                        </tr>
                        <tr className="mb-r3">
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
        </>
    );
}
export default Login;