// Fonction Alerte
        function saluer() {
            alert("Salut ! Merci Simplon pour cette opportunité");
        }


// Fonction Mode Sombre
        function changerMode() {
            let corps = document.body;
            // On vérifie la couleur actuelle
            if (corps.style.backgroundColor === "rgb(34, 34, 34)") {
                corps.style.backgroundColor = "white";
                corps.style.color = "black";
            } else {
                corps.style.backgroundColor = "#222";
                corps.style.color = "black";
            }
        }
