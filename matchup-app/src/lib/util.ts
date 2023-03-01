export {
    trim_comment
}
const trim_comment = function(comment: String): String{
    if(comment.length > 500){
        return comment.substring(0, 500)+"...";
    } else {
        return comment;
    }
}