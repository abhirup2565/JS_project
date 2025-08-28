//get dom key Element reference
const EmployeeDataList = document.querySelector(".EmployeeData__List--Name");  
const EmployeeDataSingleInfo = document.querySelector(".EmployeeData__Single--info");
const EmployeeDataSingleImg = document.querySelector(".EmployeeData__Single--image");
const AddForm = document.querySelector(".addEmployee__form");
const AddBtn = document.getElementById('add-btn');
const AddEmployee = document.querySelector(".addEmployee");

let resp = [];
(async (params) => {
    try
    {
        data = await fetch("data.json");
        resp = await data.json();
        console.log(resp);
    }
    catch(error)
    {
        console.log(String(error));
    }
    renderEmployeeList();
})()

function renderEmployeeList()
{
    EmployeeDataList.innerHTML="";
    resp.forEach(element => {
        const EmployeeDataListNames = document.createElement('span');
        EmployeeDataListNames.classList.add("nameItem");
        EmployeeDataListNames.textContent = `${element.firstname} ${element.lastname}`;
        EmployeeDataList.appendChild(EmployeeDataListNames);

        EmployeeDataListNames.addEventListener('click',(e)=>{
            renderSingleInfo(element);
        })
    }
    )
}

function renderSingleInfo(data)
        {
        EmployeeDataSingleInfo.innerHTML=""
        EmployeeDataSingleImg.innerHTML=""

            const SingleInfoImage = document.createElement('img');
            SingleInfoImage.src = data.image_url;
            SingleInfoImage.style = "width:200px; height:200px";
            const SingleInfoFirstNames = document.createElement('span');
            SingleInfoFirstNames.textContent = data.firstname;
            const SingleInfoLastNames = document.createElement('span');
            SingleInfoLastNames.textContent = data.lastname;
            const SingleInfoEmail = document.createElement('span');
            SingleInfoEmail.textContent = data.email;
            const SingleInfoContact = document.createElement('span');
            SingleInfoContact.textContent = data.contactNumber;
            const SingleInfoDob = document.createElement('span');
            SingleInfoDob.textContent = data.dob;
            const SingleInfoSalary = document.createElement('span');
            SingleInfoSalary.textContent = data.salary;
            const SingleInfoAddress = document.createElement('span');
            SingleInfoAddress.textContent = data.address;

            EmployeeDataSingleImg.appendChild(SingleInfoImage);
            EmployeeDataSingleInfo.appendChild(SingleInfoFirstNames);
            EmployeeDataSingleInfo.appendChild(SingleInfoLastNames);
            EmployeeDataSingleInfo.appendChild(SingleInfoEmail);
            EmployeeDataSingleInfo.appendChild(SingleInfoContact);
            EmployeeDataSingleInfo.appendChild(SingleInfoDob);
            EmployeeDataSingleInfo.appendChild(SingleInfoSalary);
            EmployeeDataSingleInfo.appendChild(SingleInfoAddress);  
        }

AddForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    const formdata = new FormData(AddForm);
    const values = [...formdata.entries()];
    let empdata = {};
    values.forEach((value)=>
    {
        empdata[value[0]] = value [1]; 
    })
    empdata.id = Number(resp[resp.length-1].id)+1;
    empdata.age = new Date().getFullYear()-parseInt(empdata.dob.slice(0,4),10);
    empdata.image_url = empdata.image_url||"https://images.pexels.com/photos/14653174/pexels-photo-14653174.jpeg"; 
    console.log(`emp data${JSON.stringify(empdata)}`);
    resp.push(empdata);
    console.log(resp);
    AddEmployee.classList.toggle('active');
    renderEmployeeList();
})

AddBtn.addEventListener('click',()=>{
    AddEmployee.classList.toggle('active');
})





