//Início da Calculadora
//Função para calcular pontos da Equipe Amarela
function amarela(){
    let ykits = Number(document.getElementById("kits").value)
    let ysupl = Number(document.getElementById("supl").value)
    let ycolor = document.getElementById("color")
    let yleite = Number(document.getElementById("leite").value)
    let yarroz5 = Number(document.getElementById("arroz5").value)
    let yarroz1 = Number(document.getElementById("arroz1").value)
    let yfeijao2 = Number(document.getElementById("feijao2").value)
    let yfeijao1 = Number(document.getElementById("feijao1").value)
    let ymacarrao = Number(document.getElementById("macarrao").value)
    let yoleo = Number(document.getElementById("oleo").value)
    let ysangue = Number(document.getElementById("sangue").value)
    let yrelat = Number(document.getElementById("relat").value)
    let ymusic = Number(document.getElementById("music").value)
    let ymascote = Number(document.getElementById("mascote").value)
    let yquiz = Number(document.getElementById("quiz").value)
    let yextra = Number(document.getElementById("extra").value)
    let yperdas = Number(document.getElementById("perdas").value)
    let ypontinicial
    let ypontcompl
    let ypontfinal
    let yresultado

    //Verificação de possíveis "erros"
    if(Number.isInteger(ykits) == false || ykits < 0 || Number.isInteger(ysupl) == false || ysupl < 0 || Number.isInteger(yleite) == false || yleite < 0 || Number.isInteger(yarroz5) == false || yarroz5 < 0 || Number.isInteger(yarroz1) == false || yarroz1 < 0 || Number.isInteger(yfeijao2) == false || yfeijao2 < 0 || Number.isInteger(yfeijao1) == false || yfeijao1 < 0 || Number.isInteger(ymacarrao) == false || ymacarrao < 0 || Number.isInteger(yoleo) == false || yoleo < 0 || Number.isInteger(ysangue) == false || ysangue < 0 || Number.isInteger(yrelat) == false || yrelat < 0 || Number.isInteger(ymusic) == false || ymusic < 0 || Number.isInteger(ymascote) == false || ymascote < 0 || Number.isInteger(yquiz) == false || yquiz < 0 || Number.isInteger(yextra) == false || yextra < 0 || Number.isInteger(yperdas) == false || yperdas < 0){
        alert("Por favor, insira apenas números positivos e inteiros.")
        return
    }

    //Verificação e contagem dos Kits e Suplementos de acordo com a escala
    else{
        if(ykits < 18 || ysupl < 9 ){
            ypontinicial = 0
        }
        else if(ykits < 46 || ysupl < 23){
            ypontinicial = 1000
        }
        else if(ykits < 73 || ysupl < 37){
            ypontinicial = 2500
        }
        else if(ykits < 91 || ysupl < 46){
            ypontinicial = 4000
        }
        else{
            ypontinicial = 5000 + ((ykits - 91) * 30) + ((ysupl - 46) * 15)
        }
    }

    //Verificação e soma de pontos pela Caracterização de cor da equipe
    if(ycolor.checked){
        ypontcompl = 1000
    }
    else{
        ypontcompl = 0
    }

    //Soma de pontos por alimentos avulsos
    ypontcompl += ((yleite * 2) + (yarroz5 * 5) + (yarroz1) + (yfeijao2 * 2) + (yfeijao1) + (ymacarrao / 2) + (yoleo))

    //Soma de pontos por Doação de Sangue
    ypontcompl += (ysangue * 20)

    //Erro Relacionado aos limites de pontos das atividades apresentadas na noite de encerramento
    if(yrelat > 2000 || ymusic > 1500 || ymascote > 500 || yquiz > 500 || yextra > 1000){
        alert("Limites de pontos por atividade:\nAção Social - 2000 pontos.\nApresentação - 1500 pontos.\nMascote - 500 pontos.\nQuiz - 500 pontos.\nPontuação extra - 1000 pontos.\nTendo colocado um valor maior do que esse limite, a pontuação será calculada com base nele.")
        if(yrelat > 2000){
            ypontcompl += 2000
        }
        if(yrelat <= 2000){
            ypontcompl += yrelat
        }
        if(ymusic > 1500){
            ypontcompl += 1500
        }
        if(ymusic <= 1500){
            ypontcompl += ymusic
        }
        if(ymascote > 500){
            ypontcompl += 500
        }
        if(ymascote <= 500){
            ypontcompl += ymascote
        }
        if(yquiz > 500){
            ypontcompl += 500
        }
        if(yquiz <= 500){
            ypontcompl += yquiz
        }
        if(yextra > 1000){
            ypontcompl += 1000
        }
        if(yextra <= 1000){
            ypontcompl += yextra
        }
    }
    //Soma de pontos por atividades apresentadas na noite de encerramento (sem erro)
    else{
        ypontcompl += (yrelat + ymusic + ymascote + yquiz + yextra)
    }
    //Retirada de pontos perdidos
    ypontcompl -= (yperdas)

    //Soma final de pontos
    ypontfinal = ypontinicial + ypontcompl

    //Mensagem enviada
    yresultado = `Total de pontos: ${ypontfinal}`

    document.getElementById("yresultado").innerHTML = yresultado
}

//Função para calcular pontos da Equipe Laranja
function laranja(){
    let okits = Number(document.getElementById("kits").value)
    let osupl = Number(document.getElementById("supl").value)
    let ocolor = document.getElementById("color")
    let oleite = Number(document.getElementById("leite").value)
    let oarroz5 = Number(document.getElementById("arroz5").value)
    let oarroz1 = Number(document.getElementById("arroz1").value)
    let ofeijao2 = Number(document.getElementById("feijao2").value)
    let ofeijao1 = Number(document.getElementById("feijao1").value)
    let omacarrao = Number(document.getElementById("macarrao").value)
    let ooleo = Number(document.getElementById("oleo").value)
    let osangue = Number(document.getElementById("sangue").value)
    let orelat = Number(document.getElementById("relat").value)
    let omusic = Number(document.getElementById("music").value)
    let omascote = Number(document.getElementById("mascote").value)
    let oquiz = Number(document.getElementById("quiz").value)
    let oextra = Number(document.getElementById("extra").value)
    let operdas = Number(document.getElementById("perdas").value)
    let opontinicial
    let opontcompl
    let opontfinal
    let oresultado

    //Verificação de possíveis "erros"
    if(Number.isInteger(okits) == false || okits < 0 || Number.isInteger(osupl) == false || osupl < 0 || Number.isInteger(oleite) == false || oleite < 0 || Number.isInteger(oarroz5) == false || oarroz5 < 0 || Number.isInteger(oarroz1) == false || oarroz1 < 0 || Number.isInteger(ofeijao2) == false || ofeijao2 < 0 || Number.isInteger(ofeijao1) == false || ofeijao1 < 0 || Number.isInteger(omacarrao) == false || omacarrao < 0 || Number.isInteger(ooleo) == false || ooleo < 0 || Number.isInteger(osangue) == false || osangue < 0 || Number.isInteger(orelat) == false || orelat < 0 || Number.isInteger(omusic) == false || omusic < 0 || Number.isInteger(omascote) == false || omascote < 0 || Number.isInteger(oquiz) == false || oquiz < 0 || Number.isInteger(oextra) == false || oextra < 0 || Number.isInteger(operdas) == false || operdas < 0){
        alert("Por favor, insira apenas números positivos e inteiros.")
        return
    }

    //Verificação e contagem dos Kits e Suplementos de acordo com a escala
    else{
        if(okits < 17 || osupl < 8 ){
            opontinicial = 0
        }
        else if(okits < 42 || osupl < 21){
            opontinicial = 1000
        }
        else if(okits < 67 || osupl < 34){
            opontinicial = 2500
        }
        else if(okits < 84 || osupl < 42){
            opontinicial = 4000
        }
        else{
            opontinicial = 5000 + ((okits - 84) * 30) + ((osupl - 42) * 15)
        }
    }

    //Verificação e soma de pontos pela Caracterização de cor da equipe
    if(ocolor.checked){
        opontcompl = 1000
    }
    else{
        opontcompl = 0
    }
    
    //Soma de pontos por alimentos avulsos
    opontcompl += ((oleite * 2) + (oarroz5 * 5) + (oarroz1) + (ofeijao2 * 2) + (ofeijao1) + (omacarrao / 2) + (ooleo))

    //Soma de pontos por Doação de Sangue
    opontcompl += (osangue * 20)

    //Erro Relacionado aos limites de pontos das atividades apresentadas na noite de encerramento
    if(orelat > 2000 || omusic > 1500 || omascote > 500 || oquiz > 500 || oextra > 1000){
        alert("Limites de pontos por atividade:\nAção Social - 2000 pontos.\nApresentação - 1500 pontos.\nMascote - 500 pontos.\nQuiz - 500 pontos.\nPontuação extra - 1000 pontos.\nTendo colocado um valor maior do que esse limite, a pontuação será calculada com base nele.")
        if(orelat > 2000){
            opontcompl += 2000
        }
        if(orelat <= 2000){
            opontcompl += orelat
        }
        if(omusic > 1500){
            opontcompl += 1500
        }
        if(omusic <= 1500){
            opontcompl += omusic
        }
        if(omascote > 500){
            opontcompl += 500
        }
        if(omascote <= 500){
            opontcompl += omascote
        }
        if(oquiz > 500){
            opontcompl += 500
        }
        if(oquiz <= 500){
            opontcompl += oquiz
        }
        if(oextra > 1000){
            opontcompl += 1000
        }
        if(oextra <= 1000){
            opontcompl += oextra
        }
    }
    //Soma de pontos por atividades apresentadas na noite de encerramento (sem erro)
    else{
        opontcompl += (orelat + omusic + omascote + oquiz + oextra)
    }

    //Retirada de pontos perdidos
    opontcompl -= (operdas)

    //Soma final de pontos
    opontfinal = opontinicial + opontcompl

    //Mensagem enviada
    oresultado = `Total de pontos: ${opontfinal}`

    document.getElementById("oresultado").innerHTML = oresultado
}

//Função para calcular pontos da Equipe Roxa
function roxa(){
    let pkits = Number(document.getElementById("kits").value)
    let psupl = Number(document.getElementById("supl").value)
    let pcolor = document.getElementById("color")
    let pleite = Number(document.getElementById("leite").value)
    let parroz5 = Number(document.getElementById("arroz5").value)
    let parroz1 = Number(document.getElementById("arroz1").value)
    let pfeijao2 = Number(document.getElementById("feijao2").value)
    let pfeijao1 = Number(document.getElementById("feijao1").value)
    let pmacarrao = Number(document.getElementById("macarrao").value)
    let poleo = Number(document.getElementById("oleo").value)
    let psangue = Number(document.getElementById("sangue").value)
    let prelat = Number(document.getElementById("relat").value)
    let pmusic = Number(document.getElementById("music").value)
    let pmascote = Number(document.getElementById("mascote").value)
    let pquiz = Number(document.getElementById("quiz").value)
    let pextra = Number(document.getElementById("extra").value)
    let pperdas = Number(document.getElementById("perdas").value)
    let ppontinicial
    let ppontcompl
    let ppontfinal
    let presultado

    //Verificação de possíveis "erros"
    if(Number.isInteger(pkits) == false || pkits < 0 || Number.isInteger(psupl) == false || psupl < 0 || Number.isInteger(pleite) == false || pleite < 0 || Number.isInteger(parroz5) == false || parroz5 < 0 || Number.isInteger(parroz1) == false || parroz1 < 0 || Number.isInteger(pfeijao2) == false || pfeijao2 < 0 || Number.isInteger(pfeijao1) == false || pfeijao1 < 0 || Number.isInteger(pmacarrao) == false || pmacarrao < 0 || Number.isInteger(poleo) == false || poleo < 0 || Number.isInteger(psangue) == false || psangue < 0 || Number.isInteger(prelat) == false || prelat < 0 || Number.isInteger(pmusic) == false || pmusic < 0 || Number.isInteger(pmascote) == false || pmascote < 0 || Number.isInteger(pquiz) == false || pquiz < 0 || Number.isInteger(pextra) == false || pextra < 0 || Number.isInteger(pperdas) == false || pperdas < 0){
        alert("Por favor, insira apenas números positivos e inteiros.")
        return
    }

    //Verificação e contagem dos Kits e Suplementos de acordo com a escala
    else{
        if(pkits < 17 || psupl < 9 ){
            ppontinicial = 0
        }
        else if(pkits < 42 || psupl < 21){
            ppontinicial = 1000
        }
        else if(pkits < 68 || psupl < 34){
            ppontinicial = 2500
        }
        else if(pkits < 84 || psupl < 42){
            ppontinicial = 4000
        }
        else{
            ppontinicial = 5000 + ((pkits - 84) * 30) + ((psupl - 42) * 15)
        }
    }

    //Verificação e soma de pontos pela Caracterização de cor da equipe
    if(pcolor.checked){
        ppontcompl = 1000
    }
    else{
        ppontcompl = 0
    }
    
    //Soma de pontos por alimentos avulsos
    ppontcompl += ((pleite * 2) + (parroz5 * 5) + (parroz1) + (pfeijao2 * 2) + (pfeijao1) + (pmacarrao / 2) + (poleo))

    //Soma de pontos por Doação de Sangue
    ppontcompl += (psangue * 20)

    //Erro Relacionado aos limites de pontos das atividades apresentadas na noite de encerramento
    if(prelat > 2000 || pmusic > 1500 || pmascote > 500 || pquiz > 500 || pextra > 1000){
        alert("Limites de pontos por atividade:\nAção Social - 2000 pontos.\nApresentação - 1500 pontos.\nMascote - 500 pontos.\nQuiz - 500 pontos.\nPontuação extra - 1000 pontos.\nTendo colocado um valor maior do que esse limite, a pontuação será calculada com base nele.")
        if(prelat > 2000){
            ppontcompl += 2000
        }
        if(prelat <= 2000){
            ppontcompl += prelat
        }
        if(pmusic > 1500){
            ppontcompl += 1500
        }
        if(pmusic <= 1500){
            ppontcompl += pmusic
        }
        if(pmascote > 500){
            ppontcompl += 500
        }
        if(pmascote <= 500){
            ppontcompl += pmascote
        }
        if(pquiz > 500){
            ppontcompl += 500
        }
        if(pquiz <= 500){
            ppontcompl += pquiz
        }
        if(pextra > 1000){
            ppontcompl += 1000
        }
        if(pextra <= 1000){
            ppontcompl += pextra
        }
    }
    //Soma de pontos por atividades apresentadas na noite de encerramento (sem erro)
    else{
        ppontcompl += (prelat + pmusic + pmascote + pquiz + pextra)
    }

    //Retirada de pontos perdidos
    ppontcompl -= (pperdas)

    //Soma final de pontos
    ppontfinal = ppontinicial + ppontcompl

    //Mensagem enviada
    presultado = `Total de pontos: ${ppontfinal}`

    document.getElementById("presultado").innerHTML = presultado
}

//Função para calcular pontos da Equipe Verde
function verde(){
    let gkits = Number(document.getElementById("kits").value)
    let gsupl = Number(document.getElementById("supl").value)
    let gcolor = document.getElementById("color")
    let gleite = Number(document.getElementById("leite").value)
    let garroz5 = Number(document.getElementById("arroz5").value)
    let garroz1 = Number(document.getElementById("arroz1").value)
    let gfeijao2 = Number(document.getElementById("feijao2").value)
    let gfeijao1 = Number(document.getElementById("feijao1").value)
    let gmacarrao = Number(document.getElementById("macarrao").value)
    let goleo = Number(document.getElementById("oleo").value)
    let gsangue = Number(document.getElementById("sangue").value)
    let grelat = Number(document.getElementById("relat").value)
    let gmusic = Number(document.getElementById("music").value)
    let gmascote = Number(document.getElementById("mascote").value)
    let gquiz = Number(document.getElementById("quiz").value)
    let gextra = Number(document.getElementById("extra").value)
    let gperdas = Number(document.getElementById("perdas").value)
    let gpontinicial
    let gpontcompl
    let gpontfinal
    let gresultado

    //Verificação de possíveis "erros"
    if(Number.isInteger(gkits) == false || gkits < 0 || Number.isInteger(gsupl) == false || gsupl < 0 || Number.isInteger(gleite) == false || gleite < 0 || Number.isInteger(garroz5) == false || garroz5 < 0 || Number.isInteger(garroz1) == false || garroz1 < 0 || Number.isInteger(gfeijao2) == false || gfeijao2 < 0 || Number.isInteger(gfeijao1) == false || gfeijao1 < 0 || Number.isInteger(gmacarrao) == false || gmacarrao < 0 || Number.isInteger(goleo) == false || goleo < 0 || Number.isInteger(gsangue) == false || gsangue < 0 || Number.isInteger(grelat) == false || grelat < 0 || Number.isInteger(gmusic) == false || gmusic < 0 || Number.isInteger(gmascote) == false || gmascote < 0 || Number.isInteger(gquiz) == false || gquiz < 0 || Number.isInteger(gextra) == false || gextra < 0 || Number.isInteger(gperdas) == false || gperdas < 0){
        alert("Por favor, insira apenas números positivos e inteiros.")
        return
    }

    //Verificação e contagem dos Kits e Suplementos de acordo com a escala
    else{
        if(gkits < 16 || gsupl < 8 ){
            gpontinicial = 0
        }
        else if(gkits < 41 || gsupl < 21){
            gpontinicial = 1000
        }
        else if(gkits < 65 || gsupl < 33){
            gpontinicial = 2500
        }
        else if(gkits < 81 || gsupl < 41){
            gpontinicial = 4000
        }
        else{
            gpontinicial = 5000 + ((gkits - 81) * 30) + ((gsupl - 41) * 15)
        }
    }

    //Verificação e soma de pontos pela Caracterização de cor da equipe
    if(gcolor.checked){
        gpontcompl = 1000
    }
    else{
        gpontcompl = 0
    }
    
    //Soma de pontos por alimentos avulsos
    gpontcompl += ((gleite * 2) + (garroz5 * 5) + (garroz1) + (gfeijao2 * 2) + (gfeijao1) + (gmacarrao / 2) + (goleo))

    //Soma de pontos por Doação de Sangue
    gpontcompl += (gsangue * 20)

    //Erro Relacionado aos limites de pontos das atividades apresentadas na noite de encerramento
    if(grelat > 2000 || gmusic > 1500 || gmascote > 500 || gquiz > 500 || gextra > 1000){
        alert("Limites de pontos por atividade:\nAção Social - 2000 pontos.\nApresentação - 1500 pontos.\nMascote - 500 pontos.\nQuiz - 500 pontos.\nPontuação extra - 1000 pontos.\nTendo colocado um valor maior do que esse limite, a pontuação será calculada com base nele.")
        if(grelat > 2000){
            gpontcompl += 2000
        }
        if(grelat <= 2000){
            gpontcompl += grelat
        }
        if(gmusic > 1500){
            gpontcompl += 1500
        }
        if(gmusic <= 1500){
            gpontcompl += gmusic
        }
        if(gmascote > 500){
            gpontcompl += 500
        }
        if(gmascote <= 500){
            gpontcompl += gmascote
        }
        if(gquiz > 500){
            gpontcompl += 500
        }
        if(gquiz <= 500){
            gpontcompl += gquiz
        }
        if(gextra > 1000){
            gpontcompl += 1000
        }
        if(gextra <= 1000){
            gpontcompl += gextra
        }
    }
    //Soma de pontos por atividades apresentadas na noite de encerramento (sem erro)
    else{
        gpontcompl += (grelat + gmusic + gmascote + gquiz + gextra)
    }

    //Retirada de pontos perdidos
    gpontcompl -= (gperdas)

    //Soma final de pontos
    gpontfinal = gpontinicial + gpontcompl

    //Mensagem enviada
    gresultado = `Total de pontos: ${gpontfinal}`

    document.getElementById("gresultado").innerHTML = gresultado
}

//Função para calcular pontos da Equipe Vermelha
function vermelha(){
    let rkits = Number(document.getElementById("kits").value)
    let rsupl = Number(document.getElementById("supl").value)
    let rcolor = document.getElementById("color")
    let rleite = Number(document.getElementById("leite").value)
    let rarroz5 = Number(document.getElementById("arroz5").value)
    let rarroz1 = Number(document.getElementById("arroz1").value)
    let rfeijao2 = Number(document.getElementById("feijao2").value)
    let rfeijao1 = Number(document.getElementById("feijao1").value)
    let rmacarrao = Number(document.getElementById("macarrao").value)
    let roleo = Number(document.getElementById("oleo").value)
    let rsangue = Number(document.getElementById("sangue").value)
    let rrelat = Number(document.getElementById("relat").value)
    let rmusic = Number(document.getElementById("music").value)
    let rmascote = Number(document.getElementById("mascote").value)
    let rquiz = Number(document.getElementById("quiz").value)
    let rextra = Number(document.getElementById("extra").value)
    let rperdas = Number(document.getElementById("perdas").value)
    let rpontinicial
    let rpontcompl
    let rpontfinal
    let rresultado

    //Verificação de possíveis "erros"
    if(Number.isInteger(rkits) == false || rkits < 0 || Number.isInteger(rsupl) == false || rsupl < 0 || Number.isInteger(rleite) == false || rleite < 0 || Number.isInteger(rarroz5) == false || rarroz5 < 0 || Number.isInteger(rarroz1) == false || rarroz1 < 0 || Number.isInteger(rfeijao2) == false || rfeijao2 < 0 || Number.isInteger(rfeijao1) == false || rfeijao1 < 0 || Number.isInteger(rmacarrao) == false || rmacarrao < 0 || Number.isInteger(roleo) == false || roleo < 0 || Number.isInteger(rsangue) == false || rsangue < 0 || Number.isInteger(rrelat) == false || rrelat < 0 || Number.isInteger(rmusic) == false || rmusic < 0 || Number.isInteger(rmascote) == false || rmascote < 0 || Number.isInteger(rquiz) == false || rquiz < 0 || Number.isInteger(rextra) == false || rextra < 0 || Number.isInteger(rperdas) == false || rperdas < 0){
        alert("Por favor, insira apenas números positivos e inteiros.")
        return
    }

    //Verificação e contagem dos Kits e Suplementos de acordo com a escala
    else{
        if(rkits < 21 || rsupl < 10 ){
            rpontinicial = 0
        }
        else if(rkits < 52 || rsupl < 26){
            rpontinicial = 1000
        }
        else if(rkits < 83 || rsupl < 42){
            rpontinicial = 2500
        }
        else if(rkits < 104 || rsupl < 52){
            rpontinicial = 4000
        }
        else{
            rpontinicial = 5000 + ((rkits - 104) * 30) + ((rsupl - 52) * 15)
        }
    }

    //Verificação e soma de pontos pela Caracterização de cor da equipe
    if(rcolor.checked){
        rpontcompl = 1000
    }
    else{
        rpontcompl = 0
    }
    
    //Soma de pontos por alimentos avulsos
    rpontcompl += ((rleite * 2) + (rarroz5 * 5) + (rarroz1) + (rfeijao2 * 2) + (rfeijao1) + (rmacarrao / 2) + (roleo))

    //Soma de pontos por Doação de Sangue
    rpontcompl += (rsangue * 20)

    //Erro Relacionado aos limites de pontos das atividades apresentadas na noite de encerramento
    if(rrelat > 2000 || rmusic > 1500 || rmascote > 500 || rquiz > 500 || rextra > 1000){
        alert("Limites de pontos por atividade:\nAção Social - 2000 pontos.\nApresentação - 1500 pontos.\nMascote - 500 pontos.\nQuiz - 500 pontos.\nPontuação extra - 1000 pontos.\nTendo colocado um valor maior do que esse limite, a pontuação será calculada com base nele.")
        if(rrelat > 2000){
            rpontcompl += 2000
        }
        if(rrelat <= 2000){
            rpontcompl += rrelat
        }
        if(rmusic > 1500){
            rpontcompl += 1500
        }
        if(rmusic <= 1500){
            rpontcompl += rmusic
        }
        if(rmascote > 500){
            rpontcompl += 500
        }
        if(rmascote <= 500){
            rpontcompl += rmascote
        }
        if(rquiz > 500){
            rpontcompl += 500
        }
        if(rquiz <= 500){
            rpontcompl += rquiz
        }
        if(rextra > 1000){
            rpontcompl += 1000
        }
        if(rextra <= 1000){
            rpontcompl += rextra
        }
    }
    //Soma de pontos por atividades apresentadas na noite de encerramento (sem erro)
    else{
        rpontcompl += (rrelat + rmusic + rmascote + rquiz + rextra)
    }

    //Retirada de pontos perdidos
    rpontcompl -= (rperdas)

    //Soma final de pontos
    rpontfinal = rpontinicial + rpontcompl

    //Mensagem enviada
    rresultado = `Total de pontos: ${rpontfinal}`

    document.getElementById("rresultado").innerHTML = rresultado
}