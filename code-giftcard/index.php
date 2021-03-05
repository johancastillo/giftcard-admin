<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>

    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossorigin="anonymous">
</head>
<body>

<h1 class="text-center">Genere Code Giftcard</h1>

<?php

    // Setings
    $settings = [
        "characters" => 14,
        "symbols" => false,
		"numbers" => true,
		"capitalLetters" => true,
		"lowercase" => false
    ];

    // Characters
    $characters = [
        "numbers" => '0123456789',
		"symbols" => '!@#$%^&*()_-+={[}];:<,>.?/',
		"capitalLetters" => 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
		"lowercase" => 'abcdefghijklmnopqrstuvwxyz'
    ];

    // Generate Code
    function getCode($settings, $characters){
        $charactersFinished = "";
        $code = "";

        if($settings["symbols"]){
            $charactersFinished = $charactersFinished.$characters["symbols"];
        }

        if($settings["numbers"]){
            $charactersFinished = $charactersFinished.$characters["numbers"];
        }

        if($settings["capitalLetters"]){
            $charactersFinished = $charactersFinished.$characters["capitalLetters"];
        }

        if($settings["lowercase"]){
            $charactersFinished = $charactersFinished." ".$characters["lowercase"];
        }

        // echo rand(5, 26);
        
        for($i = 1; $i <= $settings["characters"]; $i++ ){
            $num = rand(0, (strlen($charactersFinished) -1));

            $code = $code.$charactersFinished[$num];

        }


        echo '<h3 class="text-center">' . $code . '</h3>';

    }
    
    
    getCode($settings, $characters)

?>


</body>
</html>






