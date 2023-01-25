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

        var larguraFolha = 21;
        var alturaFolha = 29.7;

        var corteX = "", corteY = "";
        var y = 0, x = 0;
        var loopY = 0, loopX = 0;

        while (x <= larguraFolha && (x + (altura*2) + comprimento) <= larguraFolha) {

            loopX++;

            x += altura;

            corteX += x + " - ";

            x += comprimento;

            corteX += x + " - ";

            x += altura;

            corteX += x + "<br>";
        }

        while (y <= alturaFolha && (y + (altura*3) + (comprimento * 2)) <= alturaFolha) {

            loopY++;

            y += altura;

            corteY += y + " - ";

            y += comprimento;

            corteY += y + " - ";

            y += altura;

            corteY += y + " - ";

            y += comprimento;

            corteY += y + " - ";

            y += altura;

            corteY += y + "<br>";
        }

        $("#area").html(`
            Área total: ${x}cm x ${y}cm
            <br>
            Área por caixa: ${larguraTotal}cm x ${alturaTotal}cm
            <br>
            Quantidade de caixas por folha: ${loopX * loopY} ${ (loopX * loopY) >= 2 ? `unidades` : `unidade` }.
        `);
        $("#corte").html(`
            X <br> ${corteX} <br>
            Y <br> ${corteY} <br>
        `);
    });
});