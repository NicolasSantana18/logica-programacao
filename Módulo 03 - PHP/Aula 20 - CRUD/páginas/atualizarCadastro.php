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
    </main>

</body>
</html>