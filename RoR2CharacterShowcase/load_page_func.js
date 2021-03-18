function grabAbilities(input_character){
    $.getJSON("read_file.php", {
        "character": input_character, 
        "file": "abilities.json"
        }, function(recieved){
            if(recieved!= 'Character not found'){
                // console.log(recieved);
                for(var type in recieved){
                    var abil_arr = recieved[type];
                    for(var ability in abil_arr){
                        var name = ability;
                        var desc = abil_arr[ability].Description;
                        var cd = abil_arr[ability].Cooldown;
                        var note = abil_arr[ability].Note;
                        printAbilities(input_character, type, name, desc, cd, note);    
                    }
                }
            }else{
                console.log(recieved);
            }

    });   
}

function printAbilities(character, type, name, desc, cd, note){
            
    //console.log(type + " " + name + " " + desc + " " + cd + " " + note);
    //console.log(character);
    var trimmed_name = name.replace(/ /g, '');
    trimmed_name_png = trimmed_name + '.png';
    // console.log(trimmed_name_png);
    var video_src = character+"/"+trimmed_name+".mp4";
    // console.log(video_src);
    var table_fill = ("<tr>"
        + "<th colspan='2'>" + name + "</th>"
        +"<td><button id='"+video_src+"' type='button' onclick='addVideoSrc(this.id)'>"
        +"Play Clip</button></td>"
        + "</tr>"
        + "<tr>"
        + "<td class='img_row' rowspan='3'>"
        + "<img src='"+character+"/" + trimmed_name_png + "' alt='" + name + "'>"
        + "</td>"
        + "<td>Description</td>"
        + "<td class='desc_text'>" + desc + "</td>"
        + "</tr>"
        + "<tr>"
        + "<td>Cooldown</td>"
        + "<td class='desc_text'>" + cd + "</td>"
        + "</tr>"
        + "<tr>"
        + "<td>Note</td>"
        + "<td class='desc_text'>" + note + "</td>"
        + "</tr>");
    if(type == "Passive"){
        $("#passive").append(table_fill);
    }

    if(type == "Primary"){
        $("#primary").append(table_fill);

    }else if(type == "Secondary"){
        $("#secondary").append(table_fill);

    }else if(type == "Utility"){
        $("#utility").append(table_fill);

    }else if(type == "Special"){
        $("#special").append(table_fill);   
    }
}

function grabStats(input_character){

    $.getJSON("read_file.php",{"character": input_character, "file": "character_stats.json"}, function(recieved){
        // console.log(recieved);
        if(recieved!="Character not found"){
            var table_stats = ("<tr>"
            +"<th>Health</th>"
            +"<td>"+recieved.max_hp+"  (hp per lvl: "+recieved.hp_plvl+" )</td>"
            +"</tr>"
            +"<tr>"
            +"<th>Regeneration</th>"
            +"<td>"+recieved.regen+"  (regen per lvl: "+recieved.regen_plvl+" )</td>"
            +"</tr>"
            +"<tr>"
            +"<th>Damage</th>"
            +"<td>"+recieved.damage+"  (dmg per lvl: "+recieved.damag_plvl+" )</td>"
            +"</tr>"
            +"<tr>"
            +"<th>Armor</th>"
            +"<td>"+recieved.armor+"</td>"
            +"</tr>"
            +"<tr>"
            +"<th>Speed</th>"
            +"<td>"+recieved.speed+"</td>"
            +"</tr>"
            +"<tr>"
            +"<th>Unlock</th>"
            +"<td>"+recieved.unlock+"</td>"
            +"</tr>"
            +"<tr>"
            +"<th>Unlock Description</th>"
            +"<td class='unlock_desc_text'>"+recieved.unlock_desc+"</td>"
            +"</tr>");

            $("#stat_container").append(table_stats);   
        }
    });
}

function addVideoSrc(recv_src){
    // console.log(recv_src);
    $("#video_box").attr("src", recv_src);
    $("#video_box").get(0).load();
    $("#video_box").get(0).play();
}