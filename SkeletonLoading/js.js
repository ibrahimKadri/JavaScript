const tweets_skeleton=document.querySelector(".tweets-skeleton");
const tweet_skeleton=document.querySelector(".tweet-skeleton");

setTimeout(()=>{
    document.querySelector(".tweets").style="visibilty:hidden;";
    tweets_skeleton.style="display:none;";
},4000 );