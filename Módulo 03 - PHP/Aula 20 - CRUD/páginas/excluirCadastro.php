<?php
    //Valida se o $_POST["id"] está vazio
    if(isset($_POST["id"])) {

        //Conexão com o banco de dados
        include("../conexao/conexao.php");

        //Criar a variável
        $id = $_POST["id"];

        //Prepara a consulta SQL para excluir cadastro
        $sql = "DELETE FROM usuários WHERE id = ?";
        $stmt = $conn->prepare($sql);

        if ($stmt) {
            $stmt->bind_param("i" , $id);
            //Executa a query
            $stmt->execute();
            //Direciona você apara página específica
            header("Location:verificarUsuario.php");
            //Encerra a consulta
            $stmt->close();
        } else {
            echo "<div class='mensagem erro'>Erro na consulta</div>";
        }
        //Encerra a conexão com o banco de dados
        $conn = close();


    }


?>