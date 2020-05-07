tabSymptome = [];
tabfacteurPronostique = [];
tabfacteurMineur = [];
tabfacteurMajeur = [];

resultSymptome = 0 ;
resultfacteurMineur =0;
resultfacteurMajeur =0;
resultfacteurPronostique =0;



trireponces = ()=>{
for (let i = 0; i < resultat.length; i++){
    if ( i == 1){
        tabfacteurMineur.push(resultat[i]);
        tabfacteurMajeur.push(resultat[i]);
    
    }else if (i >= 11 && i <= 21){
        tabfacteurPronostique.push(resultat[i]);
    }else if (i == 7 || i == 8){
        tabfacteurMajeur.push(resultat[i]);
    }else if (i == 6 || i == 9){

    tabfacteurMineur.push(resultat[i]);
    }
    
     if (i >= 0 && i <= 9){
         tabSymptome.push(resultat[i]);
     }
}

};
nombreDeFacteur = () =>{
    for (let i = 0 ;i < tabSymptome.length; i++){
        if(
            tabSymptome[i] == "oui"  ){
            resultSymptome++;
        }
    }
     for(let i = 0; i < tabfacteurPronostique.length; i++){
        if (tabfacteurPronostique[i] >= 70|| tabfacteurPronostique[i] == "oui"){
            resultfacteurPronostique++;
        }
    }
    for (let i = 0 ; i < tabfacteurMineur.length; i++){
        if (tabfacteurMineur[i] >= 39 || 
            tabfacteurMineur[i] == "oui" ||
            tabfacteurMineur[i] == "très fatigué"  ||
            tabfacteurMineur[i] == "Fatigué"
             ){
            resultfacteurMineur++;
        }

    }
    for (let i=0 ; i < tabfacteurMajeur.length; i++){
        if (tabfacteurMajeur[i]<= 35.4 || tabfacteurMajeur[i] == "oui"){
            resultfacteurMajeur++;
        }
    } 
};
let messageFinal = document.getElementById("affichageResult");
Algorithme = () => {
    if (
        resultat[0] == "oui" ||
        (resultat[2] == "oui" && resultat[4] =="oui") ||
        (resultat[2] == "oui" && resultat[3] =="oui") ||
        (resultat[0] == "oui" && resultat[5] =="oui") 
    ){if (resultfacteurPronostique ==0){
        if (resultfacteurMajeur ==0 &&
             resultfacteurMineur ==0 &&
              resultat[10] < 50)
              { 
           messageFinal.innerHTML = messageAffiche [0];
            }else if (
                resultfacteurMajeur ==0 &&
                resultfacteurMineur >= 1 &&
                (resultat [10] >= 50 || resultat[10] <= 69)
            ){
                messageFinal.innerHTML = messageAffiche [1];

            }
    }else {
        if(
            resultfacteurMajeur ==0 &&
            resultfacteurMineur <=1
        ){
            messageFinal.innerHTML = messageAffiche [1];
        }else if (
            resultfacteurMajeur ==0 &&
            resultfacteurMineur >=2
        ){
            messageFinal.innerHTML = messageAffiche [2];

        }
    }
    if(resultfacteurMajeur >= 1) {
        messageFinal.innerHTML = messageAffiche [2];
    }
    }
    else if (resultat[0] == "oui" &&
         resultat[2] == "oui" ){
        if (resultfacteurPronostique == 0){
            if (resultfacteurMajeur == 0  &&
                resultfacteurMineur >= 1){
                    messageFinal.innerHTML = messageAffiche[3];
                }
        }else {
            if(resultfacteurMajeur == 0 &&
                resultfacteurMineur
                 <= 1){
                    messageFinal.innerHTML = messageAffiche[3];
                }else if (resultfacteurMajeur == 0 &&
                    resultfacteurMineur > 1){
                        messageFinal.innerHTML = messageAffiche[2];
                    }
        }
        if(resultfacteurMajeur > 0){
            messageFinal.innerHTML = messageAffiche[2];
        }
    }
    else if(
     resultat[0] == "oui"||
     resultat[2] == "oui" ||
     resultat[3] == "oui" ||
     resultat[4] == "oui" 
     ){
         if(resultfacteurMajeur == 0 &&
            resultfacteurMineur == 0){
                messageFinal.innerHTML = messageAffiche[4];
            }else{
                if(resultfacteurPronostique > 0 ){
                    messageFinal.innerHTML = messageAffiche[4] + " " + messageAffiche[2];
                }
            }

     }
     else if(resultSymptome == 0){
        messageFinal.innerHTML = messageAffiche[5];
     }
    else if(resultat[10] < 15 ){
        messageFinal.innerHTML = messageAffiche[6];
     }
};
