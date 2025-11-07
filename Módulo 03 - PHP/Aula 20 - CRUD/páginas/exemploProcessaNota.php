<?php

    //Percorrer array
    $nomes = ["Caio", "Marcos", "Diego"];

    foreach ($nomes as $nome) {
        echo $nome . "<br>";
    }

    //Percorrer array associativo
    $notasAtividades = [
        "Caio" => 8,
        "Marcos" => 10,
        "Diego" => 9

    ];

    foreach ($notasAtividades as $nome => $nota) {
        echo $nome . " <strong>Nota</strong> ". $nota . "<br>";
    }


    //Percorrer dois array associativo
    $notasAtividades = [
        "Caio" => 8,
        "Marcos" => 10,
        "Diego" => 9

    ];

    $notasProvas = [
        "Caio" => 9,
        "Marcos" => 8,
        "Diego" => 10

    ];

    foreach ($notasAtividades as $nome => $nota) {
        $prova = $notasProvas[$nome];

        echo $nome . " nota Atividade " . $nota . "<br>";
        echo $nome . " nota Prova " . $prova . "<br>";
    }
?>