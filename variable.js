const questions = [
    `<p class="form__question"> Pensez-vous avoir ou avoir eu de la fièvre ces 10 derniers jours (frissons, sueurs) ? </p>
      <div class="answer-inputs">
        <div>
            <input type="radio" name="Q1"  id="Oui" value="Oui">
            <label for="Oui"><span>Oui</span> </label>
        </div>
        <div>
            <input type="radio" name="Q1" id="Non" value="Non">
            <label for="Non"><span>Non</span> </label>
        </div>
      </div>`,
    `<p class="form__question--c">Quelle est votre température corporelle ?</p>
    <div class="answer-inputs">
      <input type="number" name="Q2" id="degrés" min="34" max="42" placeholder="34 - 42">
      <span class="input-span">degrés</span></div>
    
  `,
    `<p class="form__question"> Ces derniers jours, avez-vous une toux ou une augmentation de votre toux habituelle ?</p>
    <div class="answer-inputs">
      <div>
           <input type="radio" name="Q1"  id="Oui" value ="Oui">
           <label for="Oui"><span>Oui</span> </label>
      </div>
      <div>
           <input type="radio" name="Q1"  id="Non" value="Non">
           <label for="Non"><span>Non</span> </label>
      </div>
    </div>`,


    //////////
    `<p class="form__question"> Avez-vous eu des courbatures inhabituelles au cours des derniers jours ?</p>
    <div class="answer-inputs">
      <div>
           <input type="radio" name="Q4"  id="Oui" value ="Oui">
           <label for="Oui"><span>Oui</span> </label>
      </div>
      <div>
           <input type="radio" name="Q4"  id="Non" value="Non"><label for="Non"><span>Non</span> </label>
      </div>
    </div>`,

      //////////
      `<p class="form__question"> Ces derniers jours, avez-vous un mal de gorge ?</p>
      <div class="answer-inputs">
        <div>
             <input type="radio" name="Q5"  id="Oui" value ="Oui">
             <label for="Oui"><span>Oui</span> </label>
        </div>
        <div>
             <input type="radio" name="Q5"  id="Non" value="Non"><label for="Non"><span>Non</span> </label>
        </div>
      </div>`,

        //////////
    `<p class="form__question"> Ces dernières 24 heures, avez-vous de la diarrhée ? Avec au moins 3 selles molles.</p>
    <div class="answer-inputs">
      <div>
           <input type="radio" name="Q6"  id="Oui" value ="Oui">
           <label for="Oui"><span>Oui</span> </label>
      </div>
      <div>
           <input type="radio" name="Q6"  id="Non" value="Non">
           <label for="Non"><span>Non</span> </label>
      </div>
    </div>`,

       //////////
       `<p class="form__question"> Ces derniers jours, avez-vous une fatigue inhabituelle qui vous a obligé à vous reposer plus de la moitié de la journée ?</p>
       <div class="answer-inputs">
         <div>
              <input type="radio" name="Q7"  id="Oui" value ="Oui">
              <label for="Oui"><span>Oui</span> </label>
         </div>
         <div>
              <input type="radio" name="Q7"  id="Non" value="Non">
              <label for="Non"><span>Non</span> </label>
         </div>
       </div>`,

          //////////
    `<p class="form__question"> Avez-vous des difficultés importantes pour vous alimenter ou boire depuis plus de 24h ?</p>
    <div class="answer-inputs">
      <div>
           <input type="radio" name="Q8"  id="Oui" value ="Oui">
           <label for="Oui"><span>Oui</span> </label>
      </div>
      <div>
           <input type="radio" name="Q8"  id="Non" value="Non">
           <label for="Non"><span>Non</span> </label>
      </div>
    </div>`,
         //////////
         `<p class="form__question">Dans les dernières 24 heures, avez-vous noté un manque de souffle inhabituel lorsque vous parlez ou faites un petit effort ?</p>
         <div class="answer-inputs">
           <div>
                <input type="radio" name="Q9"  id="Oui" value ="Oui">
                <label for="Oui"><span>Oui</span> </label>
           </div>
           <div>
                <input type="radio" name="Q9"  id="Non" value="Non">
                <label for="Non"><span>Non</span> </label>
           </div>
         </div>`,

           //////////
           `<p class="form__question">Actuellement, comment vous vous sentez ?</p>
           <div class="answer-inputs">
             <div>
                  <input type="radio" name="etat"  id="bien" value ="Bien">
                  <label for="bien"><span>Bien</span> </label>
             </div>
             <div>
                  <input type="radio" name="etat"  id="abien" value="Assez bien">
                  <label for="abien"><span>Assez bien</span> </label>
             </div>
             <div>
                  <input type="radio" name="etat"  id="Fatigué" value="Fatigué">
                  <label for="Fatigué"><span>Fatigué(e)</span> </label>
             </div>
             <div>
                  <input type="radio" name="etat"  id="très fatigué" value="très fatigué">
                  <label for="très fatigué"><span>Très fatigué(e)</span> </label>
             </div>
           </div>`,

           `<p class="form__question--c">Quel est votre âge ? Ceci, afin de calculer un facteur de risque spécifique.</p>
           <div class="answer-inputs">
             <input type="number" name="Q11" id="Age" placeholder="15 - 110" min="15" max="110">
             <span class="input-span">Age</span></div>
           
         `,

         `<p class="form__question--c">Quel est votre poids ? Afin de calculer l’indice de masse corporelle qui est un facteur influençant le risque de complications de l’infection.</p>
         <div class="answer-inputs">
           <input type="number" name="Q12" id="kg" placeholder="20 - 250" min="20" max="250">
           <span class="input-span">kg</span></div>
         
       `,
       `<p class="form__question--c">Quelle est votre taille ? Afin de calculer l’indice de masse corporelle qui est un facteur influençant le risque de complications de l’infection.</p>
       <div class="answer-inputs">
         <input type="number" name="Q13" id="kg" placeholder="80 - 250" min="80" max="250">
         <span class="input-span">Cm</span></div>
       
     `,
     `<p class="form__question">Avez-vous de l’hypertension artérielle mal équilibrée ? Ou avez-vous une maladie cardiaque ou vasculaire ? Ou prenez-vous un traitement à visée cardiologique ? </p>
     <div class="answer-inputs">
       <div>
            <input type="radio" name="Q14"  id="Oui" value ="Oui">
            <label for="Oui"><span>Oui</span> </label>
       </div>
       <div>
            <input type="radio" name="Q14"  id="Non" value="Non">
            <label for="Non"><span>Non</span> </label>
       </div>
     </div>`,

     `<p class="form__question">Êtes-vous diabétique ?</p>
     <div class="answer-inputs">
       <div>
            <input type="radio" name="Q15"  id="Oui" value ="Oui">
            <label for="Oui"><span>Oui</span> </label>
       </div>
       <div>
            <input type="radio" name="Q15"  id="Non" value="Non">
            <label for="Non"><span>Non</span> </label>
       </div>
     </div>`,
     `<p class="form__question">Avez-vous ou avez-vous eu un cancer ?</p>
     <div class="answer-inputs">
       <div>
            <input type="radio" name="Q16"  id="Oui" value ="Oui">
            <label for="Oui"><span>Oui</span> </label>
       </div>
       <div>
            <input type="radio" name="Q16"  id="Non" value="Non">
            <label for="Non"><span>Non</span> </label>
       </div>
     </div>`,
     `<p class="form__question">Avez-vous une maladie respiratoire ? Ou êtes-vous suivi par un pneumologue ?</p>
     <div class="answer-inputs">
       <div>
            <input type="radio" name="Q17"  id="Oui" value ="Oui">
            <label for="Oui"><span>Oui</span> </label>
       </div>
       <div>
            <input type="radio" name="Q17"  id="Non" value="Non">
            <label for="Non"><span>Non</span> </label>
       </div>
     </div>`,

     `<p class="form__question">Avez-vous une insuffisance rénale chronique dialysée ?</p>
     <div class="answer-inputs">
       <div>
            <input type="radio" name="Q18"  id="Oui" value ="Oui">
            <label for="Oui"><span>Oui</span> </label>
       </div>
       <div>
            <input type="radio" name="Q18"  id="Non" value="Non">
            <label for="Non"><span>Non</span> </label>
       </div>
     </div>`,
     `<p class="form__question">Avez-vous une maladie chronique du foie ?</p>
     <div class="answer-inputs">
       <div>
            <input type="radio" name="Q19"  id="Oui" value ="Oui">
            <label for="Oui"><span>Oui</span> </label>
       </div>
       <div>
            <input type="radio" name="Q19"  id="Non" value="Non">
            <label for="Non"><span>Non</span> </label>
       </div>
     </div>`,

     `<p class="form__question">Êtes-vous enceinte ?</p>
     <div class="answer-inputs">
       <div>
            <input type="radio" name="Q20"  id="Oui" value ="Oui">
            <label for="Oui"><span>Oui</span> </label>
       </div>
       <div>
            <input type="radio" name="Q20"  id="Non" value="Non">
            <label for="Non"><span>Non</span> </label>
       </div>
       <div>
       <input type="radio" name="Q20"  id="homme" value="homme">
       <label for="homme"><span>Homme</span> </label>
  </div>
     </div>`,


     

     `<p class="form__question">Avez-vous une maladie connue pour diminuer vos défenses immunitaires ?</p>
     <div class="answer-inputs">
       <div>
            <input type="radio" name="Q21"  id="Oui" value ="Oui">
            <label for="Oui"><span>Oui</span> </label>
       </div>
       <div>
            <input type="radio" name="Q21"  id="Non" value="Non">
            <label for="Non"><span>Non</span> </label>
       </div>
     </div>`,
     `<p class="form__question">Prenez-vous un traitement immunosuppresseur ? C’est un traitement qui diminue vos défenses contre les infections. Voici quelques exemples : corticoïdes, méthotrexate, ciclosporine, tacrolimus, azathioprine, cyclophosphamide (liste non exhaustive).</p>
     <div class="answer-inputs">
       <div>
            <input type="radio" name="Q22"  id="Oui" value ="Oui">
            <label for="Oui"><span>Oui</span> </label>
       </div>
       <div>
            <input type="radio" name="Q22"  id="Non" value="Non">
            <label for="Non"><span>Non</span> </label>
       </div>
     </div>`,



          ];

          messageAffiche =[
              `  nous vous conseillons de rester à votre domicile et de contacter votre médecin en cas d’apparition de nouveaux symptômes.
               Vous pourrez aussi utiliser à nouveau l’application pour réévaluer vos symptômes.`,
               `téléconsultation ou médecin généraliste : préciser “appelez le 141 si une gêne respiratoire ou des difficultés
                importantes pour s’alimenter ou boire pendant plus de 24h apparaissent.`,
                ` appel 141 `,
            `téléconsultation ou médecin généraliste ou visite à domicile `,
            `Votre situation ne relève probablement pas du Covid-19. N’hésitez pas à contacter
             votre médecin en cas de doute.`,
             `Votre situation ne relève probablement pas du Covid-19. N’hésitez pas à contacter votre médecin en cas de doute.
              Vous pouvez refaire le test en cas de nouveau symptôme pour réévaluer la   situation.  
              Pour   toute information concernant   le   Covid-19 allez vers la page d’accueil. `,
              ` Prenez contact avec votre médecin généraliste au moindre doute.
               Cette application n’est pour l’instant pas adaptée aux personnes de moins de 15 ans. En cas d’urgence, appeler le 15. `,

            

          ];