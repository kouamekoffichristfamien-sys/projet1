function send() {
    let name = document.getElementById('name').value;
    let prenom = document.getElementById('prenom').value;
    let dateNaissance = new Date(document.getElementById('date_naissance').value);
    let dateActuelle = new Date();

    let age = dateActuelle.getFullYear() - dateNaissance.getFullYear();

    alert("Bonjour " + name + " " + prenom +  ", vous aurez " + age + " ans cette annee");
}
