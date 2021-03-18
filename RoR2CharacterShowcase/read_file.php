<?php

    $character = $_GET['character'];
    $file = $_GET['file'];
    
    $json = file_get_contents($file);
    
    $data = json_decode($json, TRUE); 

    // Get the character by the name given
    //NULL if no value matches.
    $result = NULL;
    foreach ($data as $character_info) {
        $character_name = array_pop(array_keys($character_info));
        if (strtolower($character_name) === strtolower($character)) {
            foreach($character_info as $key => $value)
                $result = $value;
            break;
        }
    }

    if ($result !== NULL) {
      echo json_encode($result);
    } else {
      echo json_encode('Character not found');
    }

?>