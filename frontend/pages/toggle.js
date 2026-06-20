var users = [
    {
        name: "John",
        gender: "male",
        image: "../images/john.png"
    },
    {
        name: "Jane",
        gender: "female",
        image: "../images/jane.png"
    }
];

var curId = 0;
function toggle() {
    curId = (curId + 1) % users.length;

    var user = users[curId];

    document.getElementById("userImage").src = user.image;
    document.getElementById("username").innerText = user.name;
    document.getElementById("userGender").innerText = user.gender;
}