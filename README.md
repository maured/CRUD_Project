# ToDoList
NodeJS project

Pour faire fonctionner l'application :

Lancer mongod.exe
Créer la base "loginapp" par la commande "use loginapp" ou 
faire sa propre base de données en changeant, dans le fichier app.js, à la ligne 12, la base de données utilisée : 
"mongoose.connect('mongodb://localhost/*nom de la base de données*');"

Importer le fichier s'appelant todolist.sql se trouvant dans le fichier config

OU

Créer la base de données MySQL s'appelant "todolist"
Créer une table s'appelant "tasks" avec comme structure 3 colonnes :
- une première colonne avec comme nom "id" de type INT étant une clé primaire de valeur "255"
- une deuxième colonne s'appelant "task" de type VARCHAR de valeur 255
- une troisième colonne s'appelant "date" de type DATE

Mettre ses identifiants et la base de données utilisée dans le fichier db.js se trouvant dans le dossier config

Lancer le node command prompt.
Se rendre dans la racine du fichier du projet avec "cd *Chemin du projet*" + ENTRER.
Entrer la commande "npm install" + ENTRER.
Une fois la commande terminée lancer l'application avec la commande "node app" + ENTRER.


Fonctionnalités intégrées :
- Connexion de l'utilisateur
- Enregistrement de l'utilisateur
- Sauvegarde des utilisateurs dans une base NoSQL
- Enregistrement des tâches dans une base de données
- Suppression des tâches dans la base de données

Fonctionnalités manquantes :
- Automatisation de l'installation du projet (déploiement)
- Lien entre la liste de tâches et l'utilisateur
- Partage de liste avec d'autres utilisateurs
- Salle de chat


Ce que l'on a retenu de ce projet :
Toutes les fonctionnalités n'étant pas présentes, nous avons appris de nos erreurs pendant ce projet.
Le côté managérial n'était pas du tout au point et nous aurions vraiment du travailler en équipe et faire un compte rendu plus souvent.
La disposition du groupe dans la classe n'était pas bonne et le manque de communication n'a pas aidé au bon déroulement du projet.
La répartition des tâches était inégale ce qui fait que l'application n'intègre pas toute les fonctionnalités demandées.
