$(document).ready(function(){
    $("div span").css("background-color", "yellow") // Descendentes
    $("li > ul").css("color", "red") // Filhos
    $("#item1_1 + li").css("color", "blue") //Irmão
    $("#item1_1 ~ li").css("color", "blue") // Irmãos
});

/*
    Seletores de Filtro
        (Ordem no Index)
        :first
        :last
        :not()
        :even
        :odd
        :eg()
        :gt()
        :lt()

    Seletores de conteúdo
        :contains() // Procura todos os elementos que tenham determinado texto dentro deles;
        :has() // Busca os elementos com uma determinada tag;
        :empty // Procura todos os elementos sem texto;
        :parent // Busca elementos que são pais.

        Ex.

        $("td:contains(carandiru)").css()
        $("td:empty").css()
        $("td:not(td:empty)").css()
        $("td:has(strong)").css()

        Seletores de atributos

        exemplos:

        $("a[name=menu]").css() // Valor igual
        $("a[name!=menu]").css() // Valor diferente
        $("a[name|="value"]").css() // Prefixo, começa com determinado valor
        $("a[name*="value"]").css() // Se contem determinado valor
        $("a[name$="value"]").css() // Termina com determinado valor
        $("a[name^="value"]").css() // Atributo que comece com determinado valor
*/
