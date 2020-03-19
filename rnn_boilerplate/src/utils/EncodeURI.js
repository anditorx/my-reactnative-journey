
export default encodeURI = (object)=>{

    var formBody = "";
    for (var property in object) {
      formBody += encodeURIComponent(property) + "=" + encodeURIComponent(object[property]) + "&";
    }

    return formBody;
}
