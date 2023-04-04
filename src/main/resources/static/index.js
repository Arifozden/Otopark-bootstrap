function kayit() {
    const musteri = {
        tc: $("#tc").val(),
        isim: $("#isim").val(),
        soyisim: $("#soyisim").val(),
        adres: $("#adres").val(),
        plaka: $("#plaka").val(),
        marka: $("#marka").val(),
        model: $("#model").val(),
        yil: $("#yil").val()
    };
    $.post("/kayit", musteri, function () {
        hepsiniGetir();
    });
    $("#tc").val("")
    $("#isim").val("")
    $("#soyisim").val("")
    $("#adres").val("")
    $("#plaka").val("")
    $("#marka").val("")
    $("#model").val("")
    $("#yil").val("")
}
    function hepsiniGetir(){
        $.get("/hepsiniGetir",function (data){
            bilgiDuzen(data);
        });
    }

    function bilgiDuzen(musteriler){
        let yaz="<table><tr><th>TC</th><th>Isim</th>" +
            "<th>Soyisim</th><th>Adres</th>" +
            "<th>Plaka</th><th>Marka</th><th>Model</th><th>Yil</th></tr>";
        for(const musteri of musteriler){
            yaz+="<tr><td>"+musteri.tc+"</td><td>"+musteri.isim+"</td><td>"+musteri.soyisim+
                "</td><td>"+musteri.adres+"</td><td>"+musteri.plaka+"</td><td>"+musteri.marka+
                "</td><td>"+musteri.model+"</td><td>"+musteri.yil+"</td></tr>"
        }
        yaz+="</table>";
        $("#musteriler").html(yaz);
    }

    function hepsiniSil(){
    $.get("/hepsiniSil",function (){
        hepsiniGetir();
    });
    }
