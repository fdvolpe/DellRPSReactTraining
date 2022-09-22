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
            <hr/>           
            <textArea>{props.text}</textArea>
        </>
    );
}

export default Login;