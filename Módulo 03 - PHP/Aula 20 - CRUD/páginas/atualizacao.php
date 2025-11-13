<?php

    include("../conexao/conexao.php");

    if (isset($_POST["nome"]) && isset($_POST["sobrenome"]) && isset($_POST["curso"])) {

        foreach($_POST["nome"] as $id => $nome) {           
            $sobrenome = $_POST["sobrenome"][$id];
            $curso = $_POST["curso"][$id];

            //Preparar a consulta no banco de dados
            $sql = "UPDATE usuários 
                SET nome = ?, 
                sobrenome = ?, 
                curso = ?
                WHERE id = ?";

            $stmt = $conn->prepare($sql);
            $stmt->bind_param("sssi", $nome, $sobrenome, $curso, $id);
            $stmt->execute();
        }

        header("Location: atualizarCadastro.php");

    }


?>