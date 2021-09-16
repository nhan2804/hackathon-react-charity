const validateYouTubeUrl = (url) => {
  if (url) {
    var regExp =
      /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=|\?v=)([^#\&\?]*).*/;
    var match = url.match(regExp);
    if (match && match[2].length === 11) {
      // Do anything for being valid
      // if need to change the url to embed url then use below line
      return (
        "https://www.youtube.com/embed/" +
        match[2] +
        "?autoplay=1&enablejsapi=1"
      );
    } else {
      return "";
    }
  }
};
function youtube_parser(url) {
  var regExp =
    /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;

  console.log(url);
  if (!url) return false;
  const uri = url.join("");
  var match = uri.match(regExp);
  return match && match[7].length == 11 ? match[7] : false;
}
export { youtube_parser };
export default validateYouTubeUrl;
