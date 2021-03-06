<?php
session_start();
?>

<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script type="text/javascript" src="login.js"></script>
    <link href="css/login.css" rel="stylesheet">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js" integrity="sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV" crossorigin="anonymous"></script>
    <title>FAG - Login</title> 
</head>
<body style="background-color:#0B622D";>
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <img src="img/logofag.png" alt="" class="img-logo">
            </div>
        </div>    
    </div>
    <div class="container-menu">
            <?php
            if(isset($_SESSION['nao_autenticado'])):
            ?>
            <div class="mensagemError">
                <p>ERRO!, Usuário ou senha inválidos</p>
            </div>
            <?php
            endif;
            unset($_SESSION['nao_autenticado']);
            ?>
    <form action="login.php" method="POST">
        <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <input name="usuario" type="text" id="usuario" value="" class="form-control form-control-lg" placeholder="Usuario"></input>
                        <input name="senha"type="password" id="senha" value="" class="form-control form-control-lg" placeholder="Senha"></input>                
                    </div>
                </div>  
        </div>
    </div>
    <div class="container">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <button class="btn btn-light btn-lg" type="submit" style="background-color: #FFFFFF; border: 0;">ENTRAR</button>
                </div>
            </div>    
        </div>
    </div>
 </form>
    <div class="container">
        <div class="row esqueceu">
            <div class="col-md-12">
                <a style="color: #ffffff" href="cadastro.html">ESQUECEU A SENHA?</a>
            </div>
        </div>    
    </div>  
</body>
</html>