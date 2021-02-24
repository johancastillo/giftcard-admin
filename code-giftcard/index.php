<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>

<h1>Genere Code Giftcard</h1>

<?php

    // Setings
    $settings = [
        "characters" => 14,
        "symbols" => true,
		"numbers" => true,
		"capitalLetters" => true,
		"lowercase" => true
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

        echo $charactersFinished;

    }
    
    
    getCode($settings, $characters)

?>


</body>
</html>






