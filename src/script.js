
    var mes_ext = new Array();
    mes_ext[0] =  "Janeiro";
    mes_ext[1] =  "Fevereiro";
    mes_ext[2] =  "Março";
    mes_ext[3] =  "Abril";
    mes_ext[4] =  "Maio";
    mes_ext[5] =  "Junho";
    mes_ext[6] =  "Julho";
    mes_ext[7] =  "Agosto";
    mes_ext[8] =  "Setembro";
    mes_ext[9] =  "Outubro";
    mes_ext[10] =  "Novembro";
    mes_ext[11] =  "Dezembro";

    var sema = new Array();
    sema[0] = "Domingo";
    sema[1] = "Segunda-Feira";
    sema[2] = "Terça-Feira";
    sema[3] = "Quarta-Feira";
    sema[4] = "Quinta-Feira";
    sema[5] = "Sexta-Feira";
    sema[6] = "Sábado";

function exibirRelogio() {
     rep = setInterval(Repetir, 1000);
}

function Repetir() {
    var hoje = new Date()
    var dia = hoje.getDate();
    if (dia < 10)
        dia = "0" + dia;

    var mes = hoje.getMonth();

    mes = mes + 1;
    if (mes < 10)
        mes = "0" + mes;

    var ano = hoje.getFullYear();

    var hora = hoje.getHours();
    if (hora < 10)
        hora = "0" + hora;

    var minu = hoje.getMinutes();
    if (minu < 10)
    minu = "0" + minu;

    var segu = hoje.getSeconds();
    if (segu < 10)
        segu = "0" + segu;

    var sm = hoje.getDay();

    document.getElementById("dia").value = dia;
    document.getElementById("mesNum").value = mes;
    document.getElementById("ano").value = ano;
    document.getElementById("mes").value = mes_ext[mes-1];
    document.getElementById("hora").value = hora;
    document.getElementById("minuto").value = minu;
    document.getElementById("segundo").value = segu;
    document.getElementById("semana").value = sema[sm];
}

function pararRelogio() {
    clearInterval(rep);
}

function Limpar() {
    clearInterval(rep);
    document.getElementById("dia").value = "";
    document.getElementById("mesNum").value = "";
    document.getElementById("ano").value = "";
    document.getElementById("mes").value = "";
    document.getElementById("hora").value = "";
    document.getElementById("minuto").value = "";
    document.getElementById("segundo").value = "";
    document.getElementById("semana").value = "";
  }