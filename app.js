const list = document.querySelector("#list");
const myForm = document.querySelector("#myForm");
const arr = document.querySelectorAll("input[type=checkbox]");
var other_complaint = "";

function render(doc) {
    let li = document.createElement("li");
    let complaints = document.createElement("span");
    let Name = document.createElement("span");
    let Number = document.createElement("span");
    const complaint = doc.data();
    console.log(complaint.complaints);
    var complaintString = "";
    for (var i = 0; i < complaint.complaints.length; i++) {
        if (complaint.complaints[i] == "1") {
            complaintString += " सांडपाण्या संदर्भात ";
        } else if (complaint.complaints[i] == "2") {
            complaintString += " स्वच्छता संदर्भात ";
        } else if (complaint.complaints[i] == "3") {
            complaintString += " रोड/फूटपाथ संदर्भात ";
        } else if (complaint.complaints[i] == "4") {
            complaintString += " पाणी संदर्भात ";
        } else if (complaint.complaints[i] == "5") {
            complaintString += " वीज संदर्भात ";
        } else if (complaint.complaints[i] == "6") {
            complaintString += " झाडा संदर्भात ";
        } else if (complaint.complaints[i] == "7") {
            //   complaintString+=otherDiv;
        }

    }
    li.setAttribute('data-id', doc.id);
    complaints.textContent = complaintString;
    Name.textContent = doc.data().Name;
    Number.textContent = doc.data().Number;

    li.appendChild(complaints);
    li.appendChild(Name);
    li.appendChild(Number);
    list.appendChild(li);
}


//saving
myForm.addEventListener("submit", (e) => {
    e.preventDefault();
    complaintsArr = [];
    for (i = 0; i < arr.length; i++) {
        if (arr[i].checked) {
            complaintsArr.push(arr[i].value);
        }
    }
    if (arr[arr.length - 1].checked) {
        other_complaint = document.getElementById("other_complaint").value;
        console.log(other_complaint);
    }
    var complaint = {
        complaints: complaintsArr,
        Name: myForm.Name.value,
        Number: myForm.Number.value,
        time: firebase.firestore.Timestamp.fromDate(new Date()),
        resolved: false,
        other_complaint: other_complaint
    }
    db.collection("Complaints").add(
        complaint
    ).then(() => { window.location = "home.html" });

})

function myFunction2() {
    var y = document.getElementById("otherDiv");
    if (y.style.display === "none") {
        y.style.display = "block";
    } else {
        y.style.display = "none";
    }
}

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

function logout() {
    auth.signOut().then(() => {
        // Sign-out successful.
        window.location.href = "index.html";
    }).catch((error) => {
        // An error happened.
    });
}