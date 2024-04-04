var contenedor = document.querySelector(".container2");
var nombre = "Antonio";
var defecto = document.querySelector(".defecto");
var getUrl = window.location;
var base_url = getUrl .protocol + "//" + getUrl.host + "/" + getUrl.pathname.split('/')[1];

defecto.addEventListener(
  "click",
  function () {      
    contenedor.style.backgroundImage =
      "url(http://localhost:8888/technova/wp-content/themes/technovatheme/js/img/defecto.jpg )";
  },
  false
);

function madrid() {   
  contenedor.style.backgroundImage =  
      "url(" + base_url + "/wp-content/themes/technovatheme/js/img/madrid.jpg)";
    //"url(http://localhost:8888/technova/wp-content/themes/technovatheme/js/img/madrid.jpg)";
}

function barcelona() {
  contenedor.style.backgroundImage =
    "url(" + base_url + "/wp-content/themes/technovatheme/js/img/barcelona.jpg)";
}

function andalucia() {
  contenedor.style.backgroundImage =
    "url(" + base_url + "/wp-content/themes/technovatheme/js/img/andalucia.jpg)";
}

function castillayleon() {
  contenedor.style.backgroundImage =
   "url(" + base_url + "/wp-content/themes/technovatheme/js/img/castillayleon.jpg)";
}

function valencia() {
    contenedor.style.backgroundImage =
    "url(" + base_url + "/wp-content/themes/technovatheme/js/img/valencia.jpg)";
    
  }

  function galicia() {
    contenedor.style.backgroundImage =
     "url(" + base_url + "/wp-content/themes/technovatheme/js/img/galicia.jpg)";
  }

  function baleares() {
    contenedor.style.backgroundImage =
     "url(" + base_url + "/wp-content/themes/technovatheme/js/img/baleares.jpg)";
  }

  function asturias() {
    contenedor.style.backgroundImage =
      "url(" + base_url + "/wp-content/themes/technovatheme/js/img/asturias.jpg)";
  }

  function murcia() {
    contenedor.style.backgroundImage =
      "url(" + base_url + "/wp-content/themes/technovatheme/js/img/murcia.jpg)";
  }

  function coamificoa() {
    contenedor.style.backgroundImage =
      "url(" + base_url + "/wp-content/themes/technovatheme/js/img/coamificoa.jpg)";
  }

  function fna() {
    contenedor.style.backgroundImage =
      "url(" + base_url + "/wp-content/themes/technovatheme/js/img/fna.jpg)";
  }

  function acodifna() {
    contenedor.style.backgroundImage =
      "url(" + base_url + "/wp-content/themes/technovatheme/js/img/acodifna.jpg)";
  }

  function elkartu() {
    contenedor.style.backgroundImage =
      "url(" + base_url + "/wp-content/themes/technovatheme/js/img/elkartu.jpg)";
  }

  function coordicanarias() {
    contenedor.style.backgroundImage =
      "url(" + base_url + "/wp-content/themes/technovatheme/js/img/coordicanarias.jpg)";
  }
