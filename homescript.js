window.onload = function() {
    alert("Welcome to the Home Page!");
};
function searchRedirect() {
    var input = document.getElementById("searchInput").value.toLowerCase();
    if (input === "bathware") {
        window.location.href = "file:///C:/Users/GAYUMI/Desktop/IP%20Web%20Site/bathware/Group%20Project/file.html";
    } else if (input === "kitchen") {
        window.location.href = "file:///C:/Users/GAYUMI/Desktop/IP%20Web%20Site/Kitchen/Kitchen/html/kitchen.html";
    } else if (input === "bedroom") {
        window.location.href = "file:///C:/Users/GAYUMI/Desktop/IP%20Web%20Site/BEDROOM/BEDROOM/Html/file.html";
    } else if (input === "living room") {
        window.location.href = "livingroom.html";
    } else {
        alert("No matching results found.");
    }
  
}
