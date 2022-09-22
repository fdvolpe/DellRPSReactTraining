import './NewPost.css'
function Post(props){

    var postArray = [];
    var postCompletedStyle = {backgroundColor:'yellow'};
    function onButtonClick(status){
        postArray.push(props.text);
        console.log(postArray);
        postCompletedStyle = {backgroundColor:'yellow'};
        alert(`Post added successfully! ${status}`);
    }

    return(

        <>
            <img id="smallImg" src={props.img}/>
            <hr/>
            <textArea style={postCompletedStyle}>{props.text}</textArea>
            <button onClick={()=>onButtonClick("task completed")}>Post</button>
            <hr/>
        </>
    );
}

export default Post;