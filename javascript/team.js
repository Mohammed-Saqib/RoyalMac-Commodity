const team = [
    {
    name:"mr. mohammed saqib",
    email : "mohammedsaqibbca62@gmail.com",
    designation : "Software developer",
    country: "india",
    image: './Images/maps/india.png',
    phone:'123456789',
    },
    {
        name:"mr. viper",
        email : "viper@gmail.com",
        designation : "Software developer",
        country: "Dubai",
        image: './Images/maps/saudi.png',
        phone:'123456789',
    },
    {
        name:"mr. danish",
        email : "danish@gmail.com",
        designation : "seo",
        country: "america",
        image: './Images/maps/usa.png',
        phone:'123456789',
    },
    {
        name:"mr. vicky",
        email : "vicky@gmail.com",
        designation : "Software developer",
        country: "australia",
        image: './Images/maps/australia.png',
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
            <a href="https://api.whatsapp.com/send?phone=${card.phone}"><img src="./Images/SVG/whatsapp.svg" style="width: 25px; height: 25px;"  alt="wathsapp"></a>
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
 

