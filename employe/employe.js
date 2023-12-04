const nbEmployes = prompt("Entrez le nombre d'employés :");
const employes = [];

for (let i = 0; i < nbEmployes; i++) {
  const nom = prompt(`Entrez le nom de l\'employé ${i+1} :`);
  const salaire = parseFloat(prompt(`Entrez le salaire de l'employé ${i+1} :`));
  employes.push({ nom, salaire });
}

const employeMinSalaire = employes.reduce((min, employe) => employe.salaire < min.salaire ? employe : min, employes[0]);


const employeMaxSalaire = employes.reduce((max, employe) => employe.salaire > max.salaire ? employe : max, employes[0]);

console.log(`L'employé avec le salaire le plus bas est ${employeMinSalaire.nom} avec un salaire de ${employeMinSalaire.salaire}`);
console.log(`L'employé avec le salaire le plus élevé est ${employeMaxSalaire.nom} avec un salaire de ${employeMaxSalaire.salaire}`);