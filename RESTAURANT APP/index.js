let booking = document.getElementById("Book");
booking.addEventListener("click", function(e) {

  let people = document.getElementById("people");
  let time = document.getElementById("time");
  let number = document.getElementById("number");
  let date = document.getElementById("date");
  let name = document.getElementById("name");
  let email = document.getElementById("email")

  
    if (name.value == "" || email.value == "") {
        return alert("Please Enter Your Name and Email")
    }

  let bookedBy = localStorage.getItem("bookedBy");
  if (bookedBy == null) {
    reservation = [];
  } else {
    reservation = JSON.parse(bookedBy);
  }
  let customer = {
    people: people.value,
    time: time.value,
    number:number.value,
    date:date.value,
    name:name.value,
    email:email.value
  }
  reservation.push(customer);
  localStorage.setItem("bookedBy", JSON.stringify(reservation));
  alert("Booking Done Successfully!!")
  people.value = "";
  time.value = "";
  number.value = "";
  date.value = "";
  name.value = "";
  email.value = "";
  console.log(reservation);
  let url = "Booked.html";
  window.location.assign(url);
  return false;
}); 