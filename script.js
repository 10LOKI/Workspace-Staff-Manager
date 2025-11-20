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
        role: "Femme de manage",
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

const autorisations = {
    "Salle de conférence": ["Receptioniste", "agent de securite", "directeur", "Femme de manage", "sucretaire", "Technicien", "responsable RH", "Manager"],
    "Reception": ["Receptioniste", "directeur", "Femme de manage", "sucretaire", "responsable RH", "Manager"],
    "salle serveurs": ["Technicien", "directeur", "Femme de manage", "responsable RH", "Manager"],
    "salle de securite": ["agent de securite", "directeur", "Femme de manage", "responsable RH", "Manager"],
    "salle d'archives": ["Manager"],
    "salle du personnel": ["Receptioniste", "agent de securite", "directeur", "Femme de manage", "sucretaire", "Technicien", "responsable RH", "Manager"], 
};
// l'appel des fonctions 
document.addEventListener("DOMContentLoaded", () =>
{
    afficherEmployee(workers);
    affichOptions(workers);
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
    if(workers.length >= 30)
    {
        alert("vous pouvez pas ajouter encore un employee");
        document.querySelector('.modal').classList.add("hidden");
        return;
    }
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
        if(worker.zone ===null){
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
}

function supprEmployee()
{
//khassni mazal nerje3 liha nekhdem 3la suppresion
}
function affichOptions()
{
    const allSelects = document.querySelectorAll('.room-select');
    allSelects.forEach(select => 
    {
        const roomName = select.getAttribute('data-room');
        const authorizedWorkers = getAuthorizedWorkers(roomName); 
        select.innerHTML = '<option value="">Selectionner</option>';
        authorizedWorkers.forEach((worker) => 
        {
            const workerIndex = workers.indexOf(worker);
            let option = document.createElement('option');
            option.value = workerIndex; 
            option.textContent = worker.nom;
            select.appendChild(option);
        })
        select.onchange = function() {
            const selectedIndex = this.value;
            if(selectedIndex !== "") {
               deplacerEmployee(selectedIndex, this.dataset.room);
           }
           this.value = "";
        };
    })
}


function deplacerEmployee(index,roomName)
{
    if(index === "") return;

    workers[index].zone = roomName;

    afficherEmployee();
    affichOptions();
    afficherSalle();
    alert(workers[index].nom + " est deplacé dans " + roomName);
}

function afficherSalle() {
    document.querySelectorAll('.occupied-list').forEach(div => div.innerHTML = '');

    workers.forEach((worker, index) => {
        if (worker.zone !== null) {
            
            const roomDiv = document.querySelector(`.etageScheme div[data-room="${worker.zone}"]`);
            if (roomDiv) {
                const listContainer = roomDiv.querySelector('.occupied-list');
                listContainer.innerHTML += `
                    <div class="mini-card">
                        <img src="${worker.photo}" alt="${worker.nom}">
                        <h4>${worker.nom}</h4>
                        
                        <div class="mini-card-btns">
                            <button class="btn-info" onclick="voirDescription(${index})">Afficher les infos</button>
                            <button class="btn-remove" onclick="retirerDeSalle(${index})">Retourner a la liste </button>
                        </div>
                    </div>
                `;
            }
        }
    });
}
// retirement men dik zone li fiha 
function retirerDeSalle(index) {
    workers[index].zone = null;
    afficherEmployee();
    affichOptions();
    afficherSalle();
}
// la fonction qui affiche l modal dial description d'un employee
function voirDescription(index)
{
    const Emp = workers[index];
    let message = `
    Nom: ${Emp.nom}
    Rôle: ${Emp.role}
    Email: ${Emp.email}
    Tel: ${Emp.telephone}
    Société précedente: ${Emp.experiences[0] ? Emp.experiences[0].societe : 'Aucune'}
    localisation actuelle: ${Emp.zone}
    `;
    let modalDesc = document.getElementById('workerModal');
    let detailsContainer = document.getElementById('workerDetails');
    let closeButton = document.getElementsByClassName('close-button-desc')[0];
    detailsContainer.textContent = message;
    modalDesc.style.display = "block";
    closeButton.onclick = function() 
    {
        modalDesc.style.display = "none";
    }
}

// Validation Regex
const nomInput = document.getElementById("nomInput");
const emailInput = document.getElementById("emailInput");
const telephoneInput = document.getElementById("telephoneInput");

const nomError = document.getElementById("nomError");
const emailError = document.getElementById("emailError");
const telephoneError = document.getElementById("telephoneError");

const nameRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ\s]{2,}$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRegex = /^(?:\+212|0)([ \-]?\d){9}$/;

nomInput.addEventListener("input", () => {
    if (!nameRegex.test(nomInput.value)) {
        nomError.textContent = "Nom invalide (min 2 lettres).";
        nomInput.style.borderColor = "red";
    } else {
        nomError.textContent = "";
        nomInput.style.borderColor = "green";
    }
});

// Validation Email
emailInput.addEventListener("input", () => {
    if (!emailRegex.test(emailInput.value)) {
        emailError.textContent = "Format email invalide.";
        emailInput.style.borderColor = "red";
    } else {
        emailError.textContent = "";
        emailInput.style.borderColor = "green";
    }
});

// Validation Téléphone
telephoneInput.addEventListener("input", () => {
    if (!phoneRegex.test(telephoneInput.value)) {
        telephoneError.textContent = "Numéro invalide (Format marocain requis).";
        telephoneInput.style.borderColor = "red";
    } else {
        telephoneError.textContent = "";
        telephoneInput.style.borderColor = "green";
    }
});

// fonction dial restrictions
function getAuthorizedWorkers(roomName) {
    // Utilise le nouvel objet d'autorisations pour obtenir les rôles permis pour la salle
    const authorizedRoles = autorisations[roomName]; 

    // Si la salle n'est pas répertoriée, aucun rôle n'est autorisé
    if (!authorizedRoles) {
        return [];
    }

    return workers.filter(worker => {
        // 1. L'employé doit être dans la liste d'attente (zone === null)
        if (worker.zone !== null) {
            return false;
        }

        const role = worker.role;

        // 2. Vérifier si le rôle de l'employé est dans le tableau des rôles autorisés pour cette salle
        return authorizedRoles.includes(role);
    });
}