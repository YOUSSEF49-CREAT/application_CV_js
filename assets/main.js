
let cv_data_opjet_globale = {
    image : null ,
    frstname : null ,
    lastname : null ,
    emaile : null ,
    telephone : null   ,
    adresse : null  ,
    ville :  null  ,
    dtnaisan : null   ,
    lienais :   null ,
    nationale :  null  ,
    deswork :  null ,
    arrscole : [],
    arrwork : [],
}

let frstname = document.getElementById('first-name')
let lastname = document.getElementById('last-name')
let emaile = document.getElementById('email')
let telephone = document.getElementById('telephone')
let adresse = document.getElementById('adresse')
let ville = document.getElementById('ville')
let dtnaisan = document.getElementById('date_nais')
let lienais = document.getElementById('lieu_nais')
let nationale = document.getElementById('nationalite')
let permis = document.getElementById('Permis')

let nomWORK = document.getElementById('nomWORK')
let villework = document.getElementById('villework')
let departwork = document.getElementById('departwork')
let finalework = document.getElementById('finalework')
let contrat = document.getElementById('contrat')
let deswork = document.getElementById('deswork')

let deplome = document.getElementById('deplome')
let ecole = document.getElementById('ecole')
let anneScool = document.getElementById('anneScool')
let villescool = document.getElementById('villescool')

// ***************************************************work**************************************************
let skl = document.getElementById('skl')
let inputskl1 = document.getElementById('inputskl1')
let inputskl2 = document.getElementById('inputskl2')
let inputskl3 = document.getElementById('inputskl3')
let inputskl4 = document.getElementById('inputskl4')
let compt = 0 ;
let new__skl = document.getElementById('new__skl')
let nextbtn = document.getElementById('nextbtn')

nextbtn.addEventListener('click' , () => {
    
    // if(frstname.value.trim('') != '' && lastname.value.trim('') != '' && emaile.value.trim('') != '' && telephone.value.trim('') != '' &&
    // adresse.value.trim('') != '' && ville.value.trim('') != '' && dtnaisan.value.trim('') != '' && lienais.value.trim('') != '' &&
    // nationale.value.trim('') != '' ){
        cv_data_opjet_globale.frstname = frstname.value;
        cv_data_opjet_globale.lastname = lastname.value;
        cv_data_opjet_globale.emaile = emaile.value;
        cv_data_opjet_globale.telephone = telephone.value;
        cv_data_opjet_globale.adresse = adresse.value;
        cv_data_opjet_globale.ville = ville.value;
        cv_data_opjet_globale.dtnaisan = dtnaisan.value;
        cv_data_opjet_globale.lienais = lienais.value;
        cv_data_opjet_globale.nationale = nationale.value;
        cv_data_opjet_globale.permis = permis.value;

        if(idx < khatwa.length - 1){
        idx++;
        steperform()
       }
       if(idxe < step.length - 1){
        idxe++;
        progresbar()
       }

    //    }
    //    else{
        
          if(frstname.value == ''){
            frstname.classList.add("foult")
        }
        else{
            frstname.classList.remove("foult")
        } 
        
        if(lastname.value == ''){
             lastname.classList.add("foult")
        }else{
            lastname.classList.remove("foult")
        }
        
        if(emaile.value == ''){
            emaile.classList.add("foult")
        }else{
            emaile.classList.remove("foult")
        }
        
        if(adresse.value == ''){
            adresse.classList.add("foult")
        }else{
            adresse.classList.remove("foult")
        }
        
        if(telephone.value == ''){
            telephone.classList.add("foult")
        }else{
            telephone.classList.remove("foult")
        }
        
        if(ville.value == ''){
            ville.classList.add("foult")
        }else{
            ville.classList.add("foult")
        }
        
        if(dtnaisan.value == ''){
            dtnaisan.classList.add("foult")
        }else{
             dtnaisan.classList.remove("foult")
        }
        
        if(lienais.value == ''){
            lienais.classList.add("foult")
        }else{
            lienais.classList.remove("foult")
        }
        
        if(nationale.value == ''){
            nationale.classList.add("foult")
        }else{
            nationale.classList.remove("foult")
        }

        
    //    }
    if(idx === 3){
         localStorage.setItem('cv' , JSON.stringify(cv_data_opjet_globale))
    }
   
    
affiche();

    
})
// **********************************************************************photo***************************************************************
let photo_cv = document.getElementById('photo')
let input_photo = document.getElementById('iput-file')

input_photo.onchange = function(){
    let file = input_photo.files[0] ;
    // photo_cv.src = URL.createObjectURL(file)

    if(file){
        let reder = new FileReader();
        reder.onload = () => {
            photo_cv.src = reder.result ;
            cv_data_opjet_globale.image = reder.result ;

        }

        reder.readAsDataURL(file)
    }

}



skl.addEventListener('click', () =>{
    if(inputskl1.value != ''){
       
    let li1 = document.createElement("li");
    let li2 = document.createElement("li");
    let li3 = document.createElement("li");
    let li4 = document.createElement("li");

    li1.textContent = inputskl1.value ;
    li2.textContent = inputskl2.value ;
    li3.textContent = inputskl3.value ;  
    li4.textContent = inputskl4.value ; 

    new__skl.appendChild(li1)
    new__skl.appendChild(li2)
    new__skl.appendChild(li3)
    new__skl.appendChild(li4)
    
    const objscol = {
        name_deplome: li1.innerHTML,
        ecole : li2.innerHTML,
        anee : li3.innerHTML,
        ville : li4.innerHTML,

    }

    cv_data_opjet_globale.arrscole.push(objscol)
    compt++
    
    inputskl1.value= '';
    inputskl2.value= '';
    inputskl3.value= '';
    inputskl4.value= '';
    
    

    }
})
// ******************************************************************work***************************************************
let workbtn = document.getElementById('workbtn')
let inputwork1 = document.getElementById('inputwork1')
let inputwork2 = document.getElementById('inputwork2')
let inputwork3 = document.getElementById('inputwork3')
let inputwork4 = document.getElementById('inputwork4')
let inputwork5 = document.getElementById('inputwork5')
let inputwork6 = document.getElementById('inputwork6')
let new__work = document.getElementById('new__work')


workbtn.addEventListener('click', () => {
    let li5 = document.createElement("li");
    let li6 = document.createElement("li");
    let li7 = document.createElement("li");
    let li8 = document.createElement("li");
    let li9 = document.createElement("li");
    let li10 = document.createElement("li");

    li5.textContent = inputwork1.value ;
    li6.textContent = inputwork2.value ;
    li7.textContent = inputwork3.value ;  
    li8.textContent = inputwork4.value ; 
    li9.textContent = inputwork5.value ; 
    li10.textContent = inputwork6.value ; 
    
    new__work.appendChild(li5)
    new__work.appendChild(li6)
    new__work.appendChild(li7)
    new__work.appendChild(li8)
    new__work.appendChild(li9)
    new__work.appendChild(li10)

     const objwork = {
        socite : li5.innerHTML,
        villesocite : li6.innerHTML,
        aneedepart : li7.innerHTML,
        aneefinale : li8.innerHTML,
        type_contrat : li9.innerHTML,
        descwork : li10.innerHTML
    }
    cv_data_opjet_globale.arrwork.push(objwork)
    


})

// **************************************************sreeper form **************************************************


let prevbtn = document.getElementById('prevbtn')
let khatwa = document.querySelectorAll('.khatwa')
let idx = 0 ;




function steperform(){
    khatwa.forEach((x , index) => {
        x.classList.toggle('marhala', index === idx)
    })
    prevbtn.disabled = idx === 0 ;
    nextbtn.disabled = idx === khatwa.length - 1 ;
}


prevbtn.addEventListener('click', () =>{
    if(idx > 0 ){
        idx--;
        steperform()
    }
});
steperform()
// **********************************************************progress*******************************************************
let idxe = 0 ;
let step = document.querySelectorAll('.step')

function progresbar(){
    step.forEach((x , index) => {
        x.classList.toggle('now', index === idxe)
    })
    prevbtn.disabled = idxe === 0 ;
    nextbtn.disabled = idxe === step.length - 1 ;
}

// nextbtn.addEventListener('click', () =>{
    
// });
prevbtn.addEventListener('click', () =>{
    if(idxe > 0 ){
        idxe--;
        progresbar()
    }
});
progresbar()

// *********************************************************affichage**************************************************

function affiche(){
    let table_cv = '';
    let espace = " " ;
    
        table_cv = 
                    `  <div class="cv__body">
                                              <div class="photoCv">
                                                         <img src="${cv_data_opjet_globale.image}" alt="" id="photo"> 
                                                         <h1>${cv_data_opjet_globale.frstname + espace + cv_data_opjet_globale.lastname }</h1>
                                              </div>

                                              <div class="lighn-separ"></div>
                                              <h3>information personelle</h3>
                                              <div class="donee__personl">
                                                          <div class="key-per">
                                                                 <p>prenom</p>
                                                                 <p>nom</p>
                                                                 <p>email</p>
                                                                 <p>telephone</p>
                                                                 <p>adresse</p>
                                                                 <p>ville</p>
                                                                 <p>date de naissance</p>
                                                                 <p>lieu de naissance</p>
                                                                 <p>nationalite</p>
                                                                 <p>type de permis</p>
                                                          </div>
                                                          <div class="value-per">
                                                                 <p>${cv_data_opjet_globale.frstname}</p>
                                                                 <p>${cv_data_opjet_globale.lastname}</p>
                                                                 <p>${cv_data_opjet_globale.emaile}</p>
                                                                 <p>${cv_data_opjet_globale.telephone}</p>
                                                                 <p>${cv_data_opjet_globale.adresse}</p>
                                                                 <p>${cv_data_opjet_globale.ville}</p>
                                                                 <p>${cv_data_opjet_globale.dtnaisan}</p>
                                                                 <p>${cv_data_opjet_globale.lienais}</p>
                                                                 <p>${cv_data_opjet_globale.nationale}</p>
                                                                 <p>${cv_data_opjet_globale.permis}</p>
                                                          </div>
                                              </div>
                                              <div class="lighn-separ"></div>
                                              <h3>enseignement</h3>
                                               ${cv_data_opjet_globale.arrscole.map((item)=>{
                                                            return `
                                                             <div class="enseignement">
                                                          <div class="ensign-s">
                                                                      <p>nom de lecole</p>
                                                                      <p>anne scolaire</p>
                                                                      <p>deplome</p>
                                                                      <p>la ville</p>
                                                          </div>
                                                          <div class="ensign-s">
                                                                      <p>${item.name_deplome}</p>
                                                                      <p>${item.ecole}</p>
                                                                      <p>${item.anee}</p>
                                                                      <p>${item.ville}</p>
                                                          </div>
                                                         </div>
                                                            
                                                            `
                                               }).join('')}
                                             

                                              <div class="lighn-separ"></div>
                                              <h3>information profetionelle</h3>
                                              ${cv_data_opjet_globale.arrwork.map((x)=>{
                                                return ` <div class="exprswork">
                                                           <div class="ensign-s">
                                                                      <p>la periode</p>
                                                                      <p>nom de societe</p>
                                                                      <p>la ville de societe</p>
                                                                      <p>type de contrat</p>
                                                          </div>
                                                          <div class="ensign-s">
                                                                      <p>${x.aneedepart}  *** ${x.aneefinale} </p>
                                                                      <p>${x.socite}</p>
                                                                      <p>${x.villesocite}</p>
                                                                      <p>${x.type_contrat}</p>
                                                          </div>
                                                        </div>`
                                              }).join('')}
                                             
                                                
                                   </div>
                                   
                                   `
   
   
    document.getElementById('yourcv').innerHTML = table_cv ;
}

affiche();

