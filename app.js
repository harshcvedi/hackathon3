const qwertyuiop = document.getElementById("harsh2");
/* ******************************************************** */
const harsh55 = document.getElementById("harsh60");




/* ******************************************************** */
const asdfghjk = document.getElementById("harsh70");




/* ******************************************************** */
const zxcvbnmasdfghjwertyui = document.getElementById("harsh50");




/* ******************************************************** */

const jjjjjjjjjjjjjjjjjjjjjj = [



  /* ******************************************************** */
  { author: "Harsh", quote: "I am the best" },




  /* ******************************************************** */
  
  { author: "Dhruv", quote: "Apna time aayega" }


  /* ******************************************************** */
]; 



/* ******************************************************** */
const plmoknjihbhdvvghvhd = () => {



  /* ******************************************************** */
  qwertyuiop.innerHTML = "";


  /* ******************************************************** */

  jjjjjjjjjjjjjjjjjjjjjj.forEach((q) => {


    /* ******************************************************** */
    const fghjrtyucvbn = document.createElement("div");


    /* ******************************************************** */
    fghjrtyucvbn.classList.add("harsh3");



    /* ******************************************************** */
    fghjrtyucvbn.innerHTML = `


    
      <p class="quote-text">${q.quote}</p>
      <p class="quote-author">- ${q.author}</p>
      <button class="view-full" onclick="harsh600('${q.author}', '${q.quote}')">View Full Quote</button>
    `;

    /* ******************************************************** */
    qwertyuiop.appendChild(fghjrtyucvbn);


    /* ******************************************************** */
  });
};

const harsh600 = (author, quote) => {


  /* ******************************************************** */
    
      document.querySelector("h1").style.display = "none";


      /* ******************************************************** */
  
      const bhuvgycftxdrseasedrtgyh = document.createElement("div");

      /* ******************************************************** */
      bhuvgycftxdrseasedrtgyh.classList.add("full-quote");


      /* ******************************************************** */
      bhuvgycftxdrseasedrtgyh.innerHTML = `
         <h3>${author}</h3>
      
        <p>${quote}</p>
        <button onclick="goBack()">Go Back</button>
      `;




      /* ******************************************************** */
  
      qwertyuiop.innerHTML = "";



      /* ******************************************************** */
      qwertyuiop.appendChild(bhuvgycftxdrseasedrtgyh);
};





/* ******************************************************** */

const goBack = () => {


  /* ******************************************************** */
    plmoknjihbhdvvghvhd();






    /* ******************************************************** */
    document.querySelector("h1").style.display = "block";




    /* ******************************************************** */
};





/* ******************************************************** */
harsh55.addEventListener("click", () => {



  /* ******************************************************** */
  plmoknjihbhdvvghvhd();




  /* ******************************************************** */
  zxcvbnmasdfghjwertyui.style.display = "none";





  /* ******************************************************** */
  qwertyuiop.style.display = "block";




  /* ******************************************************** */
});



/* ******************************************************** */
asdfghjk.addEventListener("click", () => {

  /* ******************************************************** */
  zxcvbnmasdfghjwertyui.style.display = "block";


  /* ******************************************************** */
  qwertyuiop.style.display = "none";



  /* ******************************************************** */
});



/* ******************************************************** */
zxcvbnmasdfghjwertyui.addEventListener("submit", (event) => {


  /* ******************************************************** */
  event.preventDefault();



  /* ******************************************************** */

  const ghghghghghghghghghgh = document.getElementById("author");



  /* ******************************************************** */
  const bhbvgvcfcxdxzszasa = document.getElementById("quote");



  /* ******************************************************** */

  const author = ghghghghghghghghghgh.value;


  /* ******************************************************** */
  const quote = bhbvgvcfcxdxzszasa.value;


  /* ******************************************************** */
  if (author && quote) {



    /* ******************************************************** */
    jjjjjjjjjjjjjjjjjjjjjj.push({ author, quote });



    /* ******************************************************** */

    ghghghghghghghghghgh.value = "";


    /* ******************************************************** */
    bhbvgvcfcxdxzszasa.value = "";



    /* ******************************************************** */
    zxcvbnmasdfghjwertyui.style.display = "none";


    /* ******************************************************** */
    qwertyuiop.style.display = "block";



    /* ******************************************************** */
    plmoknjihbhdvvghvhd();



    /* ******************************************************** */
  }

  /* ******************************************************** */
});


plmoknjihbhdvvghvhd();

/* ******************************************************** */
asdfghjk.addEventListener("click", () => {

  /* ******************************************************** */

  zxcvbnmasdfghjwertyui.style.display = "block";

  /* ******************************************************** */
  qwertyuiop.style.display = "none";


  /* ******************************************************** */

  
  document.querySelector("h1").style.display = "none";


  /* ******************************************************** */
});
