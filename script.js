let workers = [
    {
        nom : "Loki",
        role : "manager",
        photo : "/images/alae_img.jpeg",
        email : "alaeloki18@gmail.com",
        telephone : "0694733827",
        zone: null,
        experiences: [
            {
                societe: "TVA",
                role: "variant",
                date_debut: "2021-09-20",
                date_fin: "unknown"
            }
        ]
    },
    {
        nom: "Youssef El Mansouri",
        role: "directeur",
        photo: "https://randomuser.me/api/portraits/men/32.jpg",
        email: "youssef.mansouri@example.com",
        telephone: "+212 661 123 456",
        zone: null,
        experiences: [
            {
                societe: "Groupe OCP",
                role: "Chef de Département",
                date_debut: "2018-01-15",
                date_fin: "2022-12-31"
            },
            {
                societe: "Maroc Telecom",
                role: "Manager Senior",
                date_debut: "2014-03-01",
                date_fin: "2017-12-30"
            }
        ]
    },
    {
        nom: "Salma Benali",
        role: "Receptioniste",
        photo: "https://randomuser.me/api/portraits/women/44.jpg",
        email: "salma.benali@example.com",
        telephone: "+212 663 987 654",
        zone: null,
        experiences: [
            {
                societe: "Hôtel Royal Mansour",
                role: "Hôtesse d'accueil",
                date_debut: "2021-06-01",
                date_fin: "2023-05-30"
            },
            {
                societe: "Centre d'Appel",
                role: "Téléconseillère",
                date_debut: "2019-09-01",
                date_fin: "2021-04-01"
            }
        ]
    },
    {
        nom: "Karim Tazi",
        role: "agent de securite",
        photo: "https://randomuser.me/api/portraits/men/85.jpg",
        email: "karim.tazi@example.com",
        telephone: "+212 655 223 344",
        zone: null,
        experiences: [
            {
                societe: "Securitas Maghreb",
                role: "Agent de surveillance",
                date_debut: "2020-02-01",
                date_fin: "2023-08-15"
            },
            {
                societe: "Marjane Holding",
                role: "Vigile",
                date_debut: "2018-01-10",
                date_fin: "2020-01-20"
            }
        ]
    }
];

// l'appel des fonctions 
document.addEventListener("DOMContentLoaded", () =>
{
    afficherEmployee(workers);
})



const modal = document.querySelector('.modal');
const openBtn = document.getElementById("addEmployee");
const annulBtn = document.getElementById("closeModal");
const submitBtn = document.getElementById("submitBtn");
const closeModal = document.getElementById("closeIcon");

openBtn.addEventListener('click', () =>
{
    modal.classList.remove("hidden");
})
annulBtn.addEventListener('click', () =>
{
    modal.classList.add("hidden");
})
closeModal.addEventListener('click', () =>
{
    modal.classList.add("hidden");
})
// Ajouter des employee
submitBtn.addEventListener('click', ajoutCarte);
function ajoutCarte()
{
    let nom = document.getElementById("nomInput").value;
    let role = document.getElementById("selected").value;
    let photo = document.getElementById("photoInput").value;
    let email = document.getElementById("emailInput").value;
    let telephone = document.getElementById("telephoneInput").value;
    let experienceArray = [];
    let experienceItems = document.querySelectorAll('.experience-item');
    
    experienceItems.forEach(function(item)
{
    let societe = item.querySelector('.exp-societe').value;
    let rolexp = item.querySelector('.exp-role').value;
    let debut = item.querySelector('.exp-du').value;
    let fin = item.querySelector('.exp-a').value;

    if(societe !== '')
    {
        experienceArray.push({
            societe: societe,
            role: rolexp,
            date_debut: debut,
            date_fin: fin
        })
    }
})
if(nom === "" || role === "" || email === "" || telephone ==="")
{
    alert("Veuillez saisir les cordonnés s'il vous plait");
    return;
}
let nouveauWorker = {
    nom: nom,
    role: role,
    photo: photo !== "" ? photo: "https://www.w3schools.com/howto/img_avatar.png",
    email: email,
    telephone : telephone,
    zone: null,
    experiences: experienceArray
}
workers.push(nouveauWorker);
afficherEmployee();
let allInputs = document.querySelectorAll('.modal input');

allInputs.forEach(input => {
    input.value = "";
});

document.querySelector('.modal').classList.add("hidden");
}



// Afficher les employee dans la liste d'attente
function afficherEmployee(){
    let workList = document.querySelector('.list');
    workList.innerHTML = '';
    for(let i =0; i <  workers.length ; i++)
    {
        let worker = workers[i];
        workList.innerHTML += `
        <div class="worker_card">
        <button class="delete_btn">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="3 6 5 6 21 6"></polyline>
                    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                </svg>
            </button>
            <div class="card_header">
                <img src="${worker.photo}" alt="${worker.nom}" class="user_img">
            </div>
            <div class="card_body">
                <h3>${worker.nom}</h3>
                <p class="role">${worker.role}</p>
                <p class="contact">${worker.telephone}</p>
            </div>
        </div>
        `;
    }
}

function supprEmployee()
{

}

function affichOptions()
{
    const allSelects = document.querySelectorAll('.room-select');
    allSelects.forEach(select => 
    {
        select.innerHTML = '<option value="">Selectionner</option>';
        workers.forEach((worker, index) => 
        {
            if(worker.zone === null)
            {
                let option = document.createElement('option');
                option.value = index;
                option.textContent = worker.nom;
                select.appendChild(option);
            }
        })
        select.onchange = function() {
            deplacerEmployee(this.value, this.dataset.room);
        };
    })
}


function deplacerEmployee(index,roomName)
{
    if(index === "")
        return;
}

function afficherSalle()
{
    
}