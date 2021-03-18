<?php

    // $character = $_GET['character'];
    if(isset($_GET['file'])){
        $option = $_POST['file'];
        $json = NULL;
        if($option == 'character_stats'){
            $json = file_get_contents('character_stats.json');
        }else{
            $json = file_get_contents('abilities.json');
        }
        if($json!=NULL){
            echo $json;
        }
    }
?>