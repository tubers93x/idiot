/* ========================================================================
   Versión 100% INOFENSIVA de youareanidiot (you.js)
   Segura para ejecutar en cualquier navegador. No abre ventanas ni bloquea.
   ======================================================================== */

var audioOriginal = null;

window.addEventListener('load', iniciarScript);

function iniciarScript() {
    // Buscar el audio en el HTML
    audioOriginal = document.getElementById('youare-audio');
    
    // Si no existe, lo crea automáticamente de forma segura
    if (!audioOriginal) {
        audioOriginal = new Audio('youare.mp3');
        audioOriginal.loop = true;
    }

    var micon = document.getElementById('youare-micon');
    
    // Configuración segura del botón del parlante
    if (micon) {
        micon.addEventListener('click', function(e) {
            e.stopPropagation(); // Evita conflictos con el clic de la pantalla
            toggleAudio(micon);
        });
    }
    
    // Clic en cualquier parte de la pantalla para activar el sonido desde cero
    document.addEventListener('click', function reproducirPorClic() {
        if (audioOriginal) {
            audioOriginal.muted = false;
            audioOriginal.currentTime = 0; // Reinicia al inicio
            audioOriginal.play()
                .then(function() {
                    if (micon) micon.src = "images/speaker.png";
                    document.removeEventListener('click', reproducirPorClic);
                })
                .catch(function(error) {
                    console.log("Audio en espera de interacción.");
                });
        }
    });
}

// Control seguro del audio: se pausa y se resetea al segundo 0
function toggleAudio(micon) {
    if (!audioOriginal) return;
    
    if (audioOriginal.paused) {
        audioOriginal.muted = false;
        audioOriginal.currentTime = 0; // Inicia desde el principio al encender
        audioOriginal.play();
        if (micon) micon.src = "images/speaker.png";
    } else {
        audioOriginal.pause();
        audioOriginal.currentTime = 0; // Se reinicia por completo al apagar
        if (micon) micon.src = "images/speakerm.png";
    }
}

/* ========================================================================
   BLOQUE DE SEGURIDAD ABSOLUTA - Todo lo dañino ha sido borrado
   ======================================================================= */

function changeTitle(title) {
    document.title = title;
}

function proCreate() {	
    // Eliminado: Ya no clona ventanas ni abre pop-ups
}

function playBall() {
    // Eliminado: La ventana del navegador ya no se moverá loca por la pantalla
}

window.oncontextmenu = function() {
    return true; // Permitir usar el botón derecho del mouse con normalidad
}

window.onmouseout = function () {
    return null; // El mouse puede salir de la ventana sin consecuencias
};

window.onkeydown = function() {	
    return null; // Permitir usar Ctrl, Alt, F4 y cualquier tecla sin alertas molestas
}

window.onbeforeunload = function() {
    return null; // Te permite cerrar la pestaña al instante sin trabar el navegador
};
