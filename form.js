function send() {
    let name = document.getElementById('name').value;
    let prenom = document.getElementById('prenom').value;
    let dateNaissance = new Date(document.getElementById('date_naissance').value);
    let dateActuelle = new Date();
    
    if(name=="" || prenom=="" || dateNaissance=="")
    {
        return alert("Veuillez remplir tous les champs");
    };
   
    let age = dateActuelle.getFullYear() - dateNaissance.getFullYear();

    alert("Bonjour " + name + " " + prenom +  ", vous aurez " + age + " ans cette annee");
}
