<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Atualizar o Cadastro</title>
    <link rel="stylesheet" href="../estilos/styleAtualizar.css">
</head>
<body>

    <header>
        <nav>

            <ul>
                <li><a href="../index.html">Home</a></li>
                <li><a href="cadastro.php">Cadastrar Usuário</a></li>
                <li><a href="verificarUsuário.php">Procucar Usuário</a></li>
            </ul>
        </nav>
    </header>

    <main>
        <section id="containerSection">
                <form action="atualizarCadastro.php" method="post">
                    <input type="email" name="email" id="email" placeholder="Informe seu email">
                    <input type="submit" value="Buscar">
                </form>
        </section>
        <section>
            <?php
                if (isset($_POST['email'])) {
                    include("../conexao/conexao.php");
                    $email = $_POST['email'];

                    $sql = "SELECT * FROM usuários WHERE email = ?";
                    $stmt = $conn->prepare($sql);

                        if ($stmt) {
                            $stmt -> bind_param("s", $email);
                            $stmt -> execute();
                            $resultado = $stmt->get_result();
                        

                            if ($resultado->num_rows > 0) {
                                echo "<form action='atualizacao.php' method='post' id='form-nota'>
                                <table>
                                        <thead>
                                            <tr>
                                                <th>ID</th>
                                                <th>Nome</th>
                                                <th>Sobrenome</th>
                                                <th>Curso</th>
                                            </tr>
                                        </thead>";
                                
                                while ($row = $resultado->fetch_assoc()) {
                                    echo "<tbody>
                                    <tr>
                                        <td>{$row['id']}</td>
                                        <td>{$row['nome']}</td>
                                        <td>{$row['sobrenome']}</td>
                                        <td>{$row['curso']}</td>
                                    </tr> <br>";

                                     echo "<tr class='tabela'>
                                            <h2>Atualizar Cadastro</h2>  
                                            <td>{$row['id']}</td>
                                            <td><input type='text' name='nome[{$row['id']}]' required></td>
                                            <td><input type='text' name='sobrenome[{$row['id']}]' required></td>
                                            <td><select name='curso[{$row['id']}]'' id='curso'>
                                                <option value='ads'>Análise e Desenvolvimento de Sistemas</option>
                                                <option value='es'>Engenharia de Software</option>
                                                <option value='si'>Sistema de Informação</option>
                                                <option value='cc'>Ciências da Computação</option>
                                        </select></td>
                                </tr>";
                                }

                                echo "</tbody>
                                </table>
                                <input type='submit' value='Atualizar'>
                                </form>";

                            } else {
                                echo "<div class='mensagem erro'>Cadastro Não Encontrado </div>";
                            }

                        }

                }


            ?>
        </section>
    </main>

</body>
</html>