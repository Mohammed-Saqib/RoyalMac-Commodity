const team = [
    {
        name:"ms. Harshita Anand",
        email : "harshita@royal-mac.com",
        designation : "Internship",
        country: "India",
        image: './Images/maps/india.png',
        phone:'123456789',
    },
    {
        name:"ms. Pooja.K",
        email : "pooja@royal-mac.com",
        designation : "Internship",
        country: "India",
        image: './Images/maps/india.png',
        phone:'123456789',
    },
    {
        name:"ms. Vinitha",
        email : "vini@royal-mac.com",
        designation : "Internship",
        country: "India",
        image: './Images/maps/india.png',
        phone:'123456789',
    },
    {
        name:"mr. Pavan Kumar",
        email : "pavan@royal-mac.com",
        designation : "Internship",
        country: "India",
        image: './Images/maps/india.png',
        phone:'123456789',
    },
    {
        name:"mr. charles George Croes",
        email : "info@royal-mac.com",
        designation : "Rail Consultant",
        country: "Colombia",
        image: './Images/maps/colombia.png',
        phone:'123456789',
    },
    {
        name:"mr. Orlando Maldonado",
        email : "info@royal-mac.com",
        designation : "Rail Consultant",
        country: "Dominica",
        image: './Images/maps/dominica.png',
        phone:'123456789',
    },
    {
        name:"mr. Sudheer Nasim",
        email : "sr@oyal-mac.com",
        designation : "Managing Director",
        country: "India",
        image: './Images/maps/india.png',
        phone:'123456789',
    },
    {
        name:"mr. Manikanta K",
        email : "mk@royal-mac.com",
        designation : "Operation Director",
        country: "India",
        image: './Images/maps/india.png',
        phone:'123456789',
    },
    {
        name:"mr. Bindu Kalam",
        email : "bk@royal-mac.com",
        designation : "Public Relation Dir",
        country: "India",
        image: './Images/maps/india.png',
        phone:'123456789',
    },
    {
        name:"mr. Selastin",
        email : "info@royal-mac.com",
        designation : "Chartered Accountant",
        country: "India",
        image: './Images/maps/india.png',
        phone:'123456789',
    },
    {
        name:"mr. S. Padmanabhan",
        email : "info@royal-mac.com",
        designation : "Chartered Accountant",
        country: "India",
        image: './Images/maps/india.png',
        phone:'123456789',
    },
    {
        name:"Mrs. Hemalatha",
        email : "info@royal-mac.com",
        designation : "Company Secretary",
        country: "India",
        image: './Images/maps/india.png',
        phone:'123456789',
    },
    {
        name:"Mr. M. Saqib",
        email : "sq@royal-mac.com",
        designation : "Web Developer",
        country: "India",
        image: './Images/maps/india.png',
        phone:'123456789',
    },
    {
        name:"Mr. Arun V.",
        email : "info@royal-mac.com",
        designation : "SEO Control",
        country: "India",
        image: './Images/maps/india.png',
        phone:'123456789',
    },
    {
        name:"Mr. Hamdan Abdullah",
        email : "info@royal-mac.com",
        designation : "Lawyer",
        country: "Dubai",
        image: './Images/maps/dubai.png',
        phone:'123456789',
    },
    {
        name:"Mrs. Begum Selma",
        email : "info@royal-mac.com",
        designation : "Accountant",
        country: "Dubai",
        image: './Images/maps/dubai.png',
        phone:'123456789',
    },
    {
        name:"Mr. Santosh",
        email : "sh@royal-mac.com",
        designation : "SEO Specialist",
        country: "India",
        image: './Images/maps/india.png',
        phone:'123456789',
    },
    {
        name:"Mr. Chandra Pratap Samal",
        email : "ch@royal-mac.com",
        designation : "Graphic Designer",
        country: "India",
        image: './Images/maps/india.png',
        phone:'123456789',
    },
    {
        name:"Mr. Ravi Vyas",
        email : "info@royal-mac.com",
        designation : "Business Development Advisor",
        country: "India",
        image: './Images/maps/india.png',
        phone:'123456789',
    },
    {
        name:"Mr. Surender Kapoor",
        email : "sk@royal-mac.com",
        designation : "Business Relations Adviser",
        country: "India",
        image: './Images/maps/india.png',
        phone:'123456789',
    },
    {
        name:"Mr. Shashi Kumar",
        email : "ss@royal-mac.com",
        designation : "Public Relation Executive",
        country: "India",
        image: './Images/maps/india.png',
        phone:'123456789',
    },
];

const parent = document.querySelector('.team-list');
const msg = document.querySelector('.msg');
function display(term){
 let data = team.filter(elem => Object.values(elem).join(' ').toLocaleLowerCase().includes(term.toLocaleLowerCase()));
 if(data.length == 0 ){
     msg.innerHTML = "Sorry No Data Found"
 }else{
    msg.innerHTML = ""
    data.map(card => {
        let teamCard =  `<div class="team-card">
        <div class="flag">
            <img src="${card.image}" alt="flag">
            <p class="country">${card.country}</p>
            <a href="mailto:${card.email}"><img src="./Images/SVG/gmail.svg" style="width: 25px; height: 25px;"  alt="wathsapp"></a>
        </div>
        <p class="name">${card.name}</p>
        <p class="designation">DESIGNATION : ${card.designation}</p>
        <p class="mail">${card.email}</p>
        </div>`;
           parent.insertAdjacentHTML('afterbegin',teamCard);
     });
 }
 
//  console.log(data.length);
}

let filterText = document.querySelector('.filter-text');
filterText.oninput = function (e){
    let child = document.querySelectorAll('.team-card');
    for(let i = 0; i < child.length; i++){
        child[i].remove();
    }
    let term = e.target.value;
    display(term);
}

display('');
 

