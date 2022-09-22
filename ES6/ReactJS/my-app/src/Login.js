function Login(props){

    var LoginArray = [];
    function onButtonClick(){
        LoginArray.push(props.text);
        console.log(LoginArray);
        if((props.text) == "admin")
        {
            alert(`Login success!`);   
        }else
        {
            alert(`Login failed!`);
        }
         
    }

    return(

        <>
            <h1><p>Login</p></h1>
            <hr/>           
            <textArea>{props.text}</textArea>
            <hr/>           
            <textArea>{props.text}</textArea>
            <hr/>
            <button onClick={()=>onButtonClick()}>Enter</button>
        </>
    );
}

export default Login;