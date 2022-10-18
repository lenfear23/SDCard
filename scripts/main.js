//Adatok egy tömben
const data = [
    {
      "nev": "Maxi Ultra",
      "meret": "128"
    },
    {
      "nev": "Maxi Ultra S",
      "meret": "256"
    },
    {
      "nev": "Maxi Ultra X",
      "meret": "512"
    },
    {
      "nev": "Átlagos SD kártya",
      "meret": "128"
    },
    {
      "nev": "Átlagos SD kártya 2",
      "meret": "256"
    },
    {
      "nev": "Átlagos SD kártya 2.1",
      "meret": "256"
    },
    {
      "nev": "Ólcsó microSD",
      "meret": "32"
    },
    {
      "nev": "Kevésbé olcsó microSD",
      "meret": "64"
    }
  ]

  //Oldal betöltése
  document.addEventListener('DOMContentLoaded',()=>{

    //Feltöltjük a kártyákat az adatokkal a HTML-be
    for(i=0; i<data.length;i++){
            document.getElementById("container").innerHTML += `
            <div class="card">
            <div class="nev">${data[i].nev}</div>
            <div class="meret">${data[i].meret}</div>
        </div>
            `;
       }

       //Text input változás alapján esemény
    document.getElementById("search").addEventListener('input',()=>{

        //input értéke
       let input = document.getElementById("search").value;

       

       //Ha a karakterek hosszúsága nagyobb mint 3 akkor
       if(input.length>3)
       {

        //kiüritjük a containert amibe az adatok voltak hogy csak azt jelenítsük majd meg ami kell nekünk
       document.getElementById("container").innerHTML = ``;

       //végig megyünk az adat tömbünkön
       for(i=0; i<data.length;i++){

        //Ha az inputban szerepel olyan ami a tömbünk.nevében akkor
        if(data[i].nev.match(`${input}`) ){

            //azt az elemet hozzáadjuk a container-hez
            document.getElementById("container").innerHTML += `
            <div class="card">
            <div class="nev">${data[i].nev}</div>
            <div class="meret">${data[i].meret}</div>
        </div>
            `;
        }
       }
    }

    })



    let radioBtns = document.querySelectorAll("input[name='meret']");

    let findSelected = () => {
      let selected = document.querySelector("input[name='meret']:checked").value;
      console.log(selected);
        document.getElementById("container").innerHTML = ``;

        for(i=0; i<data.length;i++){
          if(data[i].meret == selected){
              document.getElementById("container").innerHTML += `
              <div class="card">
              <div class="nev">${data[i].nev}</div>
              <div class="meret">${data[i].meret}</div>
          </div>
              `;
          }
      }
    }

    

    radioBtns.forEach(radioBtn => {
      radioBtn.addEventListener("change", findSelected);
    }

    

    /*
    //gombra kattintásra
    document.querySelector('#Search').addEventListener('click',()=>{

    //A checked radioButtonnak elkérjük az értékét és elmentjük egy változóba
       let size = document.querySelector('input[name="meret"]:checked').value;
       

       //nullázás
        document.getElementById("container").innerHTML = ``;

//feltöltjük a containert a szűrésnek megfelelően
       for(i=0; i<data.length;i++){
        if(data[i].meret == size){
            document.getElementById("container").innerHTML += `
            <div class="card">
            <div class="nev">${data[i].nev}</div>
            <div class="meret">${data[i].meret}</div>
        </div>
            `;
        }

    }})*/
  )})
