
let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar5');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}

// dependent dropdown
function populatedoctor() {
    var specilization = document.getElementById("specilization");
    var doctor = document.getElementById("doctor");

    // Clear previous subcategory options
    doctor.innerHTML = "<option value=''>Choose a Doctor</option>";

    // Get the selected category
    var selectedSpecilization = specilization.options[specilization.selectedIndex].value;

    // Define subcategories based on the selected category
    var doctors = {
       Orthopaedic: ["Dr. Avinash Pal","Dr. Ankit Patel"],
IVFandInfertility: ["Dr. Anju Chhabra","Dr. Priya Madan"],
Pediatrician: ["Dr. Deepak Chhabra","Dr. Arun Mandal"],
ChildSpecialist: ["Dr. Vinod Kumar","Dr. Vishal Rawat"],
Neurosurgeon: [ "Dr. Sourabh Kumar Jain","Dr. Amar Joshi"],
Dental: [ "Dr. Deepali Jain", "Dr.Pankaj Lohani"],
Nephrology:  ["Dr. Jitendra Singh Bishnoi", "Dr.Bhavana Kohli"],
ConsultantPathology :  [ "Dr.Rashika Chand", "Dr.Maya Mohan"],
Physician: ["Dr. Sanjay Kumar", "Dr. Ayush "] 
    };

    // Populate subcategories dropdown
    if (doctors[selectedSpecilization]) {
        doctors[selectedSpecilization].forEach(function (item) {
            var option = document.createElement("option");
            option.value = item;
            option.text = item;
            doctor.add(option);
        });
    }
}  


// to delete the appointment
function delete_row(id){
       
       var isConfirmed = confirm("Are you sure you want to delete this data?");

       if (isConfirmed) {

        window.location.href = "admin_appointment.php?id=" + id;
       
    }
}

//popup form



   