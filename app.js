$(document).ready(function() {
    $("#calcular").on("submit", function(e) {
        e.preventDefault();

        var altura = parseFloat($("input[name='altura']").val());
        var largura = parseFloat($("input[name='largura']").val());
        var comprimento = parseFloat($("input[name='comprimento']").val());
        var larguraTotal, alturaTotal;

        larguraTotal = (altura * 2) + comprimento;
        alturaTotal = (altura * 3) + (largura * 2);

        $("#resultado").show();
        $(".altura").html(altura);
        $(".largura").html(largura)
        $(".comprimento").html(comprimento)

        $("tr:first-child .altura").css("width", altura + "cm")
        $("tr:first-child .comprimento").css("width", comprimento + "cm")

        $(".table").css("width", larguraTotal + "cm");
        $(".altura").css("height", altura + "cm")
        $(".largura").css("height", largura + "cm")

        $("#area").html(`Área total: ${larguraTotal}cm x ${alturaTotal}cm`);
        $("#corte").html(`
            x = ${altura} - ${altura + comprimento} - ${altura * 2 + comprimento} <br>
            y = ${altura} - ${altura + largura} - ${(altura * 2) + largura} - ${(altura * 2) + (largura * 2)} - ${(altura * 3) + (largura * 2)} <br>
        `);
    });
});