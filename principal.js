navigator.mediaDevices.getUserMedia({ video: true })
            .then(function(stream) {
                // Asocia el stream de video con el elemento <video>
                var video = document.getElementById('video');
                video.srcObject = stream;
            })
            .catch(function(error) {
                console.log("Error al acceder a la cámara: ", error);
            });