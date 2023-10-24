$(document).ready(function() {
    $("#calcular").on("submit", function(e) {
        e.preventDefault();

        var peso = parseFloat($("input[name='peso']").val());
        var porcentagem = parseFloat($("input[name='porcentagem']").val());

        var pesoEndurecedor = (peso * porcentagem) / (100 + porcentagem);
        var pesoResina = peso - pesoEndurecedor;

        pesoResina = pesoResina.toString();
        pesoEndurecedor = pesoEndurecedor.toString();

        $("#resultado").html(`
            Quantidade de resina: ${pesoResina.substring(0, 5).replace(".", ",")} <br>
            Quantidade de endurecedor : ${pesoEndurecedor.substring(0, 5).replace(".", ",")} <br>
        `);
        $("#resultado").show();
    });
});
