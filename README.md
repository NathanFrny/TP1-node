# TP2 Node.js

Nathan Fourny  

## Comment utiliser ?

### Lancer le projet

> Ouvrez vscode  
> Ouvrez un terminal dans la root du projet  
> Effectuez la commande suivante : "npm run start"  

## Fonction minimales

### Ajouter un Utilisateur

> Utilisez Postman
> Sélectionnez la requête http "POST"  
> Utilisez l'url http://localhost:PORT/user/add  
> Indiquez les éléments à créer dans la collection User (json = référe vous au schéma présent dans repositories/jsonSchema.js)  

### Afficher un Utilisateur

> Utilisez l'url http://localhost:PORT/user/get/:id  
> Utilisez l'url http://localhost:PORT/user/get (Permet de récupérer tous les utilisateurs)  

### Ajouter un Item

> Utilisez Postman
> Sélectionnez la requête http "POST"  
> Utilisez l'url http://localhost:PORT/item/add  
> Indiquez les éléments à créer dans la collection Item (json = référe vous au schéma présent dans repositories/jsonSchema.js)  

### Afficher un Item

> Utilisez l'url http://localhost:PORT/item/get/:id  

### Ajouter une watchlist

> Utilisez Postman
> Sélectionnez la requête http "POST"  
> Utilisez l'url http://localhost:PORT/watchlist/add  
> Indiquez les éléments à créer dans la collection Watchlist (json = référe vous au schéma présent dans repositories/jsonSchema.js)  

### Afficher une watchlist

> Utilisez l'url http://localhost:PORT/watchlist/get/:id (Permet de récupérer à partir de l'id d'une watchlist)  
> Utilisez l'url http://localhost:PORT/watchlist/get/user/:id (Permet de récupérer à partir de l'id d'un utilisateur)  


### Ajouter un Item dans une Watchlist

> Utilisez Postman  
> Sélectionnez la requête http "POST"  
> Utilisez l'url http://localhost:PORT/watchlist/addItem/:id (id de la watchlist)  
> Indiquez les éléments d'item à rajouter dans la watchlist (se référer à la section item dans le schéma de la watchlist -> Attention à bien créer l'item avant de l'ajouter dans la watchlist)  

### Modifiez le status d'un Item dans une Watchlist

> Utilisez Postman  
> Sélectionnez la requête http "POST"  
> Utilisez l'url http://localhost:PORT/watchlist/updateItemStatus/:watchlistId/:itemID   
> Indiquez le status de l'item (référez-vous aux status stocké dans le schéma de la watchlist)   


## Fonction Supplémentaire

## Supprimer une Watchlist

> Utilisez Postman  
> Sélectionnez la requête http "DELETE"  
> Utilisez l'url http://localhost:PORT/watchlist/delete/:watchlistId  
