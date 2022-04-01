const team = [
    {
    name:"mr. charles George Croes",
    email : "info@gmail.com",
    designation : "Rail Consultant",
    country: "Colombia",
    image: './Images/maps/colombia.png',
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
 

