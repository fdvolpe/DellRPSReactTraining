function LoginButton(props){

    var LoginArray = [];
    function onButtonClick(){
        LoginArray.push(props.text);
        LoginArray.push(props.textpwd);
        console.log(LoginArray);
        if((props.text) == "admin" && (props.textpwd) == "pwd")
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
            <button onClick={()=>onButtonClick()}>Enter</button>
            <hr/>
        </>
    );
}

export default LoginButton;