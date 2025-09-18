
        function getHoras(){
            inputHoras = document.getElementById("HoraInicial")
            inputHorasFim = document.getElementById("HoraFinal")
            inputMinutos = document.getElementById("MinutoInicial")
            inputMinutosFim = document.getElementById("MinutoFinal")

            totalInicial = (inputHoras.value * 60) + parseInt(inputMinutos.value)

            totalFinal = ((inputHorasFim.value * 60) + parseInt(inputMinutosFim.value))

            if (totalFinal < totalInicial) {
                totalFinal += 24 * 60; 
            }
            
            totalDeMinutos = totalFinal - totalInicial

            restoMinutos = totalDeMinutos % 60

            totalHoras = (totalDeMinutos - restoMinutos) / 60
            console.log(`As horas são ${totalHoras} e os minutos são ${restoMinutos}`)

            tempoTotal = document.getElementById("tempoTotal")

            if (totalHoras < 0){
                totalHoras = totalHoras * -1
            }
            if (restoMinutos < 0){
                restoMinutos = restoMinutos * -1
            }
            if (totalHoras < 10){
                console.log(totalHoras)
                totalHoras = "0" + totalHoras
            }

            if (restoMinutos < 10){
                restoMinutos = "0" + restoMinutos
            }
            tempoTotal.innerText = `Duracao: ${totalHoras}:${restoMinutos}`

            console.log("ULTIMO PRINT", totalHoras, restoMinutos)
        }
