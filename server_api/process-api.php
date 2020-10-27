<?php
    // Allow from any origin
        header("Access-Control-Allow-Origin: *");
        header("Access-Control-Allow-Credentials: true ");
        header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
        header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With");
        header("Content-Type: application/json; charset=utf-8");

    include "library/config.php";

    $lol = file_get_contents('php://input');
    
    $postjson = json_decode(file_get_contents('php://input'), true);
    $lel = $postjson['action'];
    $today = date('Y-m-d');

    //$lastinserted = 0;

    if($postjson['action'] == 'add'){
        $query = mysqli_query($mysqli, "INSERT INTO master_customer SET name_customer = '$postjson[name_customer]', desc_customer = '$postjson[desc_customer]', created_at = '$today'");

        $idcust = mysqli_insert_id($mysqli);

        if($query){
            $result = json_encode(array('success'=>true, 'customer_id'=>$idcust));
        }
        else{
            $result = json_encode(array('success'=>false));
        }

        echo $result;
    }

    elseif($postjson['action'] == 'adduser'){
        $query = mysqli_query($mysqli, "insert into users(username, passwordhash) values('$postjson[username]','$postjson[password]')");

        $id = mysqli_insert_id($mysqli);

        if($query){
            $result = json_encode(array('success'=>true, 'id'=>$id));
        }
        else{
            $result = json_encode(array('success'=>false));
        }

        echo $result;
    }

    elseif($postjson['action'] == 'getusername'){
        $query = mysqli_query($mysqli, "select * from users where username='$postjson[username]'");

        while($row = mysqli_fetch_array($query)){
            $data[] = array(
                'id' => $row['id'],
                'username' => $row['username'],
                'password' => $row['passwordhash'],
                'displayname' => $row['displayname']
            );
        }

        if($query) $result = json_encode(array('success'=>true, 'result'=>$data));
        else $result = json_encode(array('success'=>false));
        
        echo $result;
    }


    elseif($postjson['action'] == 'authenticate'){
        $query = mysqli_query($mysqli, "select * from users where username='$postjson[username]' and passwordhash='$postjson[password]'");

        if ($query->num_rows > 0) {
            while($row = mysqli_fetch_array($query)){
                $data[] = array(
                    'id' => $row['id'],
                    'username' => $row['username'],
                    'password' => $row['passwordhash'],
                    'displayname' => $row['displayname'],
                    'role' => $row['role'],
                    'dateregistered' => $row['dateregistered'],
                    'status' => $row['status']
                );
            }
        }
        else{
            $data[] = array(
                'id' => null,
                'username' => null,
                'password' => null,
                'displayname' => null,
                'role' => null,
                'dateregistered' => null,
                'status' => null
            );
        }
        

        if($query) $result = json_encode(array('success'=>true, 'result'=>$data));
        else $result = json_encode(array('success'=>false));
        
        echo $result;
    }

    elseif($postjson['action'] == 'addfolder'){
        $query = mysqli_query($mysqli, "INSERT INTO folderdata SET name = '$postjson[foldername]', description = '$postjson[description]', users_id = '$postjson[users_id]'");

        $id = mysqli_insert_id($mysqli);

        if($query){
            $result = json_encode(array('success'=>true, 'id'=>$id));
        }
        else{
            $result = json_encode(array('success'=>false));
        }

        echo $result;
    }

    elseif($postjson['action'] == 'addpost'){
        //$kot = $postjson->contoh->id;
        //$postjson = json_decode(file_get_contents('php://input'), true);
        $jsonz = '
                {
                    "id": 1,
                    "text": "lol"
                }';

        $yummy = json_decode($jsonz);
        //$zummy = $postjson['contoh'];

        //$jsond = 'eh';
        $trytest = json_decode("{ 'id': 1, 'text': 'lol' }");

        
        //$eh = $postjson['contoh']['name'];

        $huhu = array (
            'name' => 'John',
        );

        $postjson['textcmt'] = mysqli_real_escape_string($mysqli, $postjson['textcmt']);
        $query_addpost = mysqli_query($mysqli, "INSERT INTO comment SET users_id = '$postjson[users_id]', title = '$postjson[title]', textcmt = '$postjson[textcmt]'");
        

        $id_addpost = mysqli_insert_id($mysqli);
        $addone = mysqli_insert_id($mysqli)+1;

        $query_updatethread = mysqli_query($mysqli, "UPDATE comment SET thread = $id_addpost WHERE id=$id_addpost");

        //$query_addpost = mysqli_query($mysqli, "INSERT INTO comment SET users_id = '$postjson[users_id]', title = '$postjson[title]', textcmt = '$postjson[textcmt]'");
        for($i=0; $i<count($postjson['contoh']); $i++){
            $curr = $postjson['contoh'][$i]['name'];
            $query_addtagcomment = mysqli_query($mysqli, "INSERT INTO tagcomment SET comment_id = $id_addpost, tag_id = $curr");
        }
        
        if($query_addpost){
            /*while($row = mysqli_fetch_array($query)){
                $data[] = array(
                    'commentid' => $row['id']
                );
            }*/
            
            $result = json_encode(array('success'=>true, 'id'=>$id_addpost));
        }
        else{
            $result = json_encode(array('success'=>false));
        }

        echo $result;
    }

    elseif($postjson['action'] == 'updatepost'){
        //$kot = $postjson->contoh->id;
        //$postjson = json_decode(file_get_contents('php://input'), true);
        $jsonz = '
                {
                    "id": 1,
                    "text": "lol"
                }';

        $yummy = json_decode($jsonz);
        //$zummy = $postjson['contoh'];

        //$jsond = 'eh';
        $trytest = json_decode("{ 'id': 1, 'text': 'lol' }");

        
        //$eh = $postjson['contoh']['name'];

        $huhu = array (
            'name' => 'John',
        );

        $postjson['textcmt'] = mysqli_real_escape_string($mysqli, $postjson['textcmt']);
        $query_updatepost = mysqli_query($mysqli, "UPDATE comment SET title = '$postjson[title]', textcmt = '$postjson[textcmt]' WHERE id = '$postjson[commentid]'");
        

        $id_updatepost = mysqli_insert_id($mysqli);
        $addone = mysqli_insert_id($mysqli)+1;

        //$query_updatethread = mysqli_query($mysqli, "UPDATE comment SET thread = $id_addpost WHERE id=$id_addpost");

        //$query_addpost = mysqli_query($mysqli, "INSERT INTO comment SET users_id = '$postjson[users_id]', title = '$postjson[title]', textcmt = '$postjson[textcmt]'");
        
        /*$totalselected = 0;
        for($i=0; $i<count($postjson['contoh']); $i++){
            if($postjson['contoh'][$i]['selected'] == true){
                $totalselected++;
            }
        }

        if($totalselected>0){
            $query_deletetagcomment = mysqli_query($mysqli, "DELETE FROM tagcomment WHERE comment_id = 193");
        }*/
        
        $query_deletetagcomment = mysqli_query($mysqli, "DELETE FROM tagcomment WHERE comment_id = $postjson[commentid]");

        for($i=0; $i<count($postjson['contoh']); $i++){
            $curr = $postjson['contoh'][$i]['tagid'];
            //$query_addtagcomment = mysqli_query($mysqli, "INSERT INTO tagcomment SET comment_id = $id_updatepost, tag_id = $curr");
            if($postjson['contoh'][$i]['selected'] == true){
                $query_addtagcomment = mysqli_query($mysqli, "INSERT INTO tagcomment SET comment_id = $postjson[commentid], tag_id = $curr");
            }
            
        }
        /*for($i=0; $i<count($postjson['contoh']); $i++){
            $query_addtagcomment = mysqli_query($mysqli, "INSERT INTO tagcomment SET comment_id = 193, tag_id = 1");
        }*/
        
        
        
        if($query_updatepost){
            /*while($row = mysqli_fetch_array($query)){
                $data[] = array(
                    'commentid' => $row['id']
                );
            }*/
            
            $result = json_encode(array('success'=>true, 'id'=>$id_updatepost));
        }
        else{
            $result = json_encode(array('success'=>false));
        }

        echo $result;
    }

    elseif($postjson['action'] == 'newaddroompost'){
        $postjson['textcmt'] = mysqli_real_escape_string($mysqli, $postjson['textcmt']);
        //$query_updatepost = mysqli_query($mysqli, "UPDATE comment SET title = '$postjson[title]', textcmt = '$postjson[textcmt]' WHERE id = '$postjson[commentid]'");
        $query_addpost = mysqli_query($mysqli, "INSERT INTO comment SET users_id = '$postjson[users_id]', title = '$postjson[title]', textcmt = '$postjson[textcmt]'");

        $id_addpost = mysqli_insert_id($mysqli);
        $addone = mysqli_insert_id($mysqli)+1;

        $query_updatethread = mysqli_query($mysqli, "UPDATE comment SET thread = $id_addpost WHERE id=$id_addpost");

        /*
        for($i=0; $i<count($postjson['contoh']); $i++){
            $curr = $postjson['contoh'][$i]['tagid'];
            if($postjson['contoh'][$i]['selected'] == true){
                $query_addtagcomment = mysqli_query($mysqli, "INSERT INTO tagcomment SET comment_id = $postjson[commentid], tag_id = $curr");
            }    
        }*/


        /*for($i=0; $i<count($postjson['contoh2']); $i++){
            $curr = $postjson['contoh2'][$i]['tagid'];
            if($postjson['contoh2'][$i]['selected'] == true){
                $query_addtagcomment = mysqli_query($mysqli, "INSERT INTO tagcomment SET comment_id = $id_addpost, tag_id = $curr");
            }
        }*/

        $query_addtagcomment = mysqli_query($mysqli, "INSERT INTO tagcomment SET comment_id = $id_addpost, tag_id = '$postjson[r_tblroom_id]'");

            
        if($query_addpost){
            $result = json_encode(array('success'=>true, 'id'=>$id_addpost));
        }
        else{
            $result = json_encode(array('success'=>false));
        }

        echo $result;
    }

    elseif($postjson['action'] == 'newaddpost'){
        $postjson['textcmt'] = mysqli_real_escape_string($mysqli, $postjson['textcmt']);
        //$query_updatepost = mysqli_query($mysqli, "UPDATE comment SET title = '$postjson[title]', textcmt = '$postjson[textcmt]' WHERE id = '$postjson[commentid]'");
        $query_addpost = mysqli_query($mysqli, "INSERT INTO comment SET users_id = '$postjson[users_id]', title = '$postjson[title]', textcmt = '$postjson[textcmt]'");

        $id_addpost = mysqli_insert_id($mysqli);
        $addone = mysqli_insert_id($mysqli)+1;

        $query_updatethread = mysqli_query($mysqli, "UPDATE comment SET thread = $id_addpost WHERE id=$id_addpost");

        /*
        for($i=0; $i<count($postjson['contoh']); $i++){
            $curr = $postjson['contoh'][$i]['tagid'];
            if($postjson['contoh'][$i]['selected'] == true){
                $query_addtagcomment = mysqli_query($mysqli, "INSERT INTO tagcomment SET comment_id = $postjson[commentid], tag_id = $curr");
            }    
        }*/

        for($i=0; $i<count($postjson['contoh2']); $i++){
            $curr = $postjson['contoh2'][$i]['tagid'];
            if($postjson['contoh2'][$i]['selected'] == true){
                $query_addtagcomment = mysqli_query($mysqli, "INSERT INTO tagcomment SET comment_id = $id_addpost, tag_id = $curr");
            }
        }
            
        if($query_addpost){
            $result = json_encode(array('success'=>true, 'id'=>$id_addpost));
        }
        else{
            $result = json_encode(array('success'=>false));
        }

        echo $result;
    }

    
    elseif($postjson['action'] == 'addtagcomment'){
        $query_addtagcomment = mysqli_query($mysqli, "INSERT INTO tagcomment SET comment_id = 56, tag_id = '$postjson[tag_id]'");

        $id_addtagcomment = mysqli_insert_id($mysqli);

        if($query_addtagcomment){
            $result = json_encode(array('success'=>true, 'tagcommentid'=>$id_addtagcomment));
        }
        else{
            $result = json_encode(array('success'=>false));
        }

        echo $result;
    }

    elseif($postjson['action']=='gettag'){
        $data = array();
        $query = mysqli_query($mysqli, "select * from tag");
    
        while($row = mysqli_fetch_array($query)){
            $data[] = array(
                'tagid' => $row['id'],
                'tagname' => $row['tagname'],
                'tagdesc' => $row['tagdesc']
            );
        }

    if($query) $result = json_encode(array('success'=>true, 'result'=>$data));
    else $result = json_encode(array('success'=>false));
    
    echo $result;
    
    }

    elseif($postjson['action']=='gettagcomment'){
        $data = array();
        $query = mysqli_query($mysqli, "select * from tagcomment inner join (select comment.id, dateuploaded from comment order by dateuploaded desc limit 20 offset 0)d on tagcomment.comment_id = d.id inner join tag on tagcomment.tag_id=tag.id order by dateuploaded asc, tag.tagname");
    
        while($row = mysqli_fetch_array($query)){
            $data[] = array(
                'tagcommentid' => $row['id'],
                'comment_id' => $row['comment_id'],
                'tag_id' => $row['tag_id'],
                'tag_tagname' => $row['tagname']
            );
        }

    if($query) $result = json_encode(array('success'=>true, 'result'=>$data));
    else $result = json_encode(array('success'=>false));
    
    echo $result;
    
    }

    elseif($postjson['action']=='editgettagcomment'){
        $data = array();
        $query = mysqli_query($mysqli, "select * from tagcomment inner join (select comment.id, dateuploaded from comment order by dateuploaded desc limit 200 offset 0)d on tagcomment.comment_id = d.id inner join tag on tagcomment.tag_id=tag.id where tagcomment.comment_id='$postjson[passededitid]' order by dateuploaded asc, tag.tagname");
    
        while($row = mysqli_fetch_array($query)){
            $data[] = array(
                'tagcommentid' => $row['id'],
                'comment_id' => $row['comment_id'],
                'tag_id' => $row['tag_id'],
                'tag_tagname' => $row['tagname']
            );
        }

    if($query) $result = json_encode(array('success'=>true, 'result'=>$data));
    else $result = json_encode(array('success'=>false));
    
    echo $result;
    
    }

    elseif($postjson['action']=='getpost'){
        $data = array();

        if($postjson['topsort']=='today'){
            $query = mysqli_query($mysqli, "select * from ( select comment.id, users_id, title, textcmt, replyto, users.username, dateuploaded, upvote, downvote from comment join users on comment.users_id=users.id where replyto is null and dateuploaded >= now()-INTERVAL 1 DAY order by dateuploaded asc limit 20 offset 0) d order by dateuploaded desc");
        }
        else if($postjson['topsort']=='week'){
            $query = mysqli_query($mysqli, "select * from ( select comment.id, users_id, title, textcmt, replyto, users.username, dateuploaded, upvote, downvote from comment join users on comment.users_id=users.id where replyto is null and dateuploaded >= now()-INTERVAL 1 WEEK order by dateuploaded asc limit 20 offset 0) d order by dateuploaded desc");
        }
        else if($postjson['topsort']=='month'){
            $query = mysqli_query($mysqli, "select * from ( select comment.id, users_id, title, textcmt, replyto, users.username, dateuploaded, upvote, downvote from comment join users on comment.users_id=users.id where replyto is null and dateuploaded >= now()-INTERVAL 1 MONTH order by dateuploaded asc limit 20 offset 0) d order by dateuploaded desc");
        }
        else if($postjson['topsort']=='year'){
            $query = mysqli_query($mysqli, "select * from ( select comment.id, users_id, title, textcmt, replyto, users.username, dateuploaded, upvote, downvote from comment join users on comment.users_id=users.id where replyto is null and dateuploaded >= now()-INTERVAL 1 YEAR order by dateuploaded asc limit 20 offset 0) d order by dateuploaded desc");
        }
        else if($postjson['topsort']=='alltime'){
            $query = mysqli_query($mysqli, "select * from ( select comment.id, users_id, title, textcmt, replyto, users.username, dateuploaded, upvote, downvote from comment join users on comment.users_id=users.id where replyto is null order by dateuploaded asc limit 20 offset 0) d order by dateuploaded desc");
        }
        else if($postjson['topsort'] == 'todaysearch'){
            $query = mysqli_query($mysqli, "select * from ( select comment.id, users_id, title, textcmt, replyto, users.username, dateuploaded, upvote, downvote from comment join users on comment.users_id=users.id where replyto is null and dateuploaded >= now()-INTERVAL 1 DAY AND (MATCH (comment.title) AGAINST ('$postjson[r_searchedtext]' IN NATURAL LANGUAGE MODE) OR MATCH(comment.textcmt) AGAINST ('$postjson[r_searchedtext]' IN NATURAL LANGUAGE MODE) OR MATCH(users.username) AGAINST ('$postjson[r_searchedtext]' IN NATURAL LANGUAGE MODE)) order by dateuploaded asc limit 20 offset 0) d order by dateuploaded desc");
        }
        else if($postjson['topsort'] == 'weeksearch'){
            $query = mysqli_query($mysqli, "select * from ( select comment.id, users_id, title, textcmt, replyto, users.username, dateuploaded, upvote, downvote from comment join users on comment.users_id=users.id where replyto is null and dateuploaded >= now()-INTERVAL 1 WEEK AND (MATCH (comment.title) AGAINST ('$postjson[r_searchedtext]' IN NATURAL LANGUAGE MODE) OR MATCH(comment.textcmt) AGAINST ('$postjson[r_searchedtext]' IN NATURAL LANGUAGE MODE) OR MATCH(users.username) AGAINST ('$postjson[r_searchedtext]' IN NATURAL LANGUAGE MODE)) order by dateuploaded asc limit 20 offset 0) d order by dateuploaded desc");
        }
        else if($postjson['topsort'] == 'monthsearch'){
            $query = mysqli_query($mysqli, "select * from ( select comment.id, users_id, title, textcmt, replyto, users.username, dateuploaded, upvote, downvote from comment join users on comment.users_id=users.id where replyto is null and dateuploaded >= now()-INTERVAL 1 MONTH AND (MATCH (comment.title) AGAINST ('$postjson[r_searchedtext]' IN NATURAL LANGUAGE MODE) OR MATCH(comment.textcmt) AGAINST ('$postjson[r_searchedtext]' IN NATURAL LANGUAGE MODE) OR MATCH(users.username) AGAINST ('$postjson[r_searchedtext]' IN NATURAL LANGUAGE MODE)) order by dateuploaded asc limit 20 offset 0) d order by dateuploaded desc");
        }
        else if($postjson['topsort'] == 'yearsearch'){
            $query = mysqli_query($mysqli, "select * from ( select comment.id, users_id, title, textcmt, replyto, users.username, dateuploaded, upvote, downvote from comment join users on comment.users_id=users.id where replyto is null and dateuploaded >= now()-INTERVAL 1 YEAR AND (MATCH (comment.title) AGAINST ('$postjson[r_searchedtext]' IN NATURAL LANGUAGE MODE) OR MATCH(comment.textcmt) AGAINST ('$postjson[r_searchedtext]' IN NATURAL LANGUAGE MODE) OR MATCH(users.username) AGAINST ('$postjson[r_searchedtext]' IN NATURAL LANGUAGE MODE)) order by dateuploaded asc limit 20 offset 0) d order by dateuploaded desc");
        }
        else if($postjson['topsort'] == 'alltimesearch'){
            $query = mysqli_query($mysqli, "select * from ( select comment.id, users_id, title, textcmt, replyto, users.username, dateuploaded, upvote, downvote from comment join users on comment.users_id=users.id where replyto is null AND (MATCH (comment.title) AGAINST ('$postjson[r_searchedtext]' IN NATURAL LANGUAGE MODE) OR MATCH(comment.textcmt) AGAINST ('$postjson[r_searchedtext]' IN NATURAL LANGUAGE MODE) OR MATCH(users.username) AGAINST ('$postjson[r_searchedtext]' IN NATURAL LANGUAGE MODE)) order by dateuploaded asc limit 20 offset 0) d order by dateuploaded desc");
        }

    
        //$date1 = new DateTime('2016-11-30 03:55:06');//start time
        
        //$diff = $date2->diff($date1);
        //$hours = $diff->h;
        //$hours = $hours + ($diff->days*24);

        
        while($row = mysqli_fetch_array($query)){
            date_default_timezone_set("Asia/Kuala_Lumpur");

            $date = new DateTime();
            $datenow = $date->format('Y-m-d H:i:s');
            
            $start = strtotime($row['dateuploaded']);
            $end = strtotime($datenow);
            $minutes = round(($end - $start) / 60 );

            if($minutes<60){
                $ago = $minutes . " min ago";
            }
            elseif($minutes<1440){
                $hour = floor($minutes / 60);
                $ago = $hour . " hr ago";
            }
            elseif($minutes<10080){
                $day = floor($minutes/1440);
                $ago = $day . " d ago";
            }
            elseif($minutes<43800){
                $week = floor($minutes/(10080));
                $ago = $week . " wk ago";
            }
            elseif($minutes<525600){
                $month = floor($minutes/(43800));
                $ago = $month . " mo ago";
            }
            else{
                $year = floor($minutes/(525600));
                $ago = $year . " y ago";
            }

            $vote = $row['upvote'] - $row['downvote'];

            $data[] = array(
                'commentid' => $row['id'],
                'users_id' => $row['users_id'],
                'title' => $row['title'],
                'textcmt' => $row['textcmt'],
                'replyto' => $row['replyto'],
                'username' => $row['username'],
                'dateuploaded' => $ago,
                'vote' => $vote
            );
        }

    if($query) $result = json_encode(array('success'=>true, 'result'=>$data));
    else $result = json_encode(array('success'=>false));
    
    echo $result;
    
    }

    elseif($postjson['action']=='getroompost'){
        $data = array();

        if($postjson['topsort']=='today'){
            $query = mysqli_query($mysqli, "select * from ( select comment.id, users_id, title, textcmt, replyto, users.username, dateuploaded, upvote, downvote from comment join users on comment.users_id=users.id inner join tagcomment on tagcomment.comment_id=comment.id where tagcomment.tag_id ='$postjson[r_tblroom_id]' and replyto is null and dateuploaded >= now()-INTERVAL 1 DAY order by dateuploaded asc limit 100 offset 0) d order by dateuploaded desc");
        }
        else if($postjson['topsort']=='week'){
            $query = mysqli_query($mysqli, "select * from ( select comment.id, users_id, title, textcmt, replyto, users.username, dateuploaded, upvote, downvote from comment join users on comment.users_id=users.id inner join tagcomment on tagcomment.comment_id=comment.id where tagcomment.tag_id ='$postjson[r_tblroom_id]' and replyto is null and dateuploaded >= now()-INTERVAL 1 WEEK order by dateuploaded asc limit 100 offset 0) d order by dateuploaded desc");
        }
        else if($postjson['topsort']=='month'){
            $query = mysqli_query($mysqli, "select * from ( select comment.id, users_id, title, textcmt, replyto, users.username, dateuploaded, upvote, downvote from comment join users on comment.users_id=users.id inner join tagcomment on tagcomment.comment_id=comment.id where tagcomment.tag_id ='$postjson[r_tblroom_id]' and replyto is null and dateuploaded >= now()-INTERVAL 1 MONTH order by dateuploaded asc limit 100 offset 0) d order by dateuploaded desc");
        }
        else if($postjson['topsort']=='year'){
            $query = mysqli_query($mysqli, "select * from ( select comment.id, users_id, title, textcmt, replyto, users.username, dateuploaded, upvote, downvote from comment join users on comment.users_id=users.id inner join tagcomment on tagcomment.comment_id=comment.id where tagcomment.tag_id ='$postjson[r_tblroom_id]' and replyto is null and dateuploaded >= now()-INTERVAL 1 YEAR order by dateuploaded asc limit 100 offset 0) d order by dateuploaded desc");
        }
        else if($postjson['topsort']=='alltime'){
            $query = mysqli_query($mysqli, "select * from ( select comment.id, users_id, title, textcmt, replyto, users.username, dateuploaded, upvote, downvote from comment join users on comment.users_id=users.id inner join tagcomment on tagcomment.comment_id=comment.id where tagcomment.tag_id ='$postjson[r_tblroom_id]' and replyto is null order by dateuploaded asc limit 20 offset 0) d order by dateuploaded desc");
        }
        else if($postjson['topsort'] == 'todaysearch'){
            $query = mysqli_query($mysqli, "select * from ( select comment.id, users_id, title, textcmt, replyto, users.username, dateuploaded, upvote, downvote from comment join users on comment.users_id=users.id inner join tagcomment on tagcomment.comment_id=comment.id where tagcomment.tag_id ='$postjson[r_tblroom_id]' and replyto is null and dateuploaded >= now()-INTERVAL 1 DAY AND (MATCH (comment.title) AGAINST ('$postjson[r_searchedtext]' IN NATURAL LANGUAGE MODE) OR MATCH(comment.textcmt) AGAINST ('$postjson[r_searchedtext]' IN NATURAL LANGUAGE MODE) OR MATCH(users.username) AGAINST ('$postjson[r_searchedtext]' IN NATURAL LANGUAGE MODE)) order by dateuploaded asc limit 100 offset 0) d order by dateuploaded desc");
        }
        else if($postjson['topsort'] == 'weeksearch'){
            $query = mysqli_query($mysqli, "select * from ( select comment.id, users_id, title, textcmt, replyto, users.username, dateuploaded, upvote, downvote from comment join users on comment.users_id=users.id inner join tagcomment on tagcomment.comment_id=comment.id where tagcomment.tag_id ='$postjson[r_tblroom_id]' and replyto is null and dateuploaded >= now()-INTERVAL 1 WEEK AND (MATCH (comment.title) AGAINST ('$postjson[r_searchedtext]' IN NATURAL LANGUAGE MODE) OR MATCH(comment.textcmt) AGAINST ('$postjson[r_searchedtext]' IN NATURAL LANGUAGE MODE) OR MATCH(users.username) AGAINST ('$postjson[r_searchedtext]' IN NATURAL LANGUAGE MODE)) order by dateuploaded asc limit 100 offset 0) d order by dateuploaded desc");
        }
        else if($postjson['topsort'] == 'monthsearch'){
            $query = mysqli_query($mysqli, "select * from ( select comment.id, users_id, title, textcmt, replyto, users.username, dateuploaded, upvote, downvote from comment join users on comment.users_id=users.id inner join tagcomment on tagcomment.comment_id=comment.id where tagcomment.tag_id ='$postjson[r_tblroom_id]' and replyto is null and dateuploaded >= now()-INTERVAL 1 MONTH AND (MATCH (comment.title) AGAINST ('$postjson[r_searchedtext]' IN NATURAL LANGUAGE MODE) OR MATCH(comment.textcmt) AGAINST ('$postjson[r_searchedtext]' IN NATURAL LANGUAGE MODE) OR MATCH(users.username) AGAINST ('$postjson[r_searchedtext]' IN NATURAL LANGUAGE MODE)) order by dateuploaded asc limit 100 offset 0) d order by dateuploaded desc");
        }
        else if($postjson['topsort'] == 'yearsearch'){
            $query = mysqli_query($mysqli, "select * from ( select comment.id, users_id, title, textcmt, replyto, users.username, dateuploaded, upvote, downvote from comment join users on comment.users_id=users.id inner join tagcomment on tagcomment.comment_id=comment.id where tagcomment.tag_id ='$postjson[r_tblroom_id]' and replyto is null and dateuploaded >= now()-INTERVAL 1 YEAR AND (MATCH (comment.title) AGAINST ('$postjson[r_searchedtext]' IN NATURAL LANGUAGE MODE) OR MATCH(comment.textcmt) AGAINST ('$postjson[r_searchedtext]' IN NATURAL LANGUAGE MODE) OR MATCH(users.username) AGAINST ('$postjson[r_searchedtext]' IN NATURAL LANGUAGE MODE)) order by dateuploaded asc limit 100 offset 0) d order by dateuploaded desc");
        }
        else if($postjson['topsort'] == 'alltimesearch'){
            $query = mysqli_query($mysqli, "select * from ( select comment.id, users_id, title, textcmt, replyto, users.username, dateuploaded, upvote, downvote from comment join users on comment.users_id=users.id inner join tagcomment on tagcomment.comment_id=comment.id where tagcomment.tag_id ='$postjson[r_tblroom_id]' and replyto is null AND (MATCH (comment.title) AGAINST ('$postjson[r_searchedtext]' IN NATURAL LANGUAGE MODE) OR MATCH(comment.textcmt) AGAINST ('$postjson[r_searchedtext]' IN NATURAL LANGUAGE MODE) OR MATCH(users.username) AGAINST ('$postjson[r_searchedtext]' IN NATURAL LANGUAGE MODE)) order by dateuploaded asc limit 100 offset 0) d order by dateuploaded desc");
        }

    
        //$date1 = new DateTime('2016-11-30 03:55:06');//start time
        
        //$diff = $date2->diff($date1);
        //$hours = $diff->h;
        //$hours = $hours + ($diff->days*24);

        
        while($row = mysqli_fetch_array($query)){
            date_default_timezone_set("Asia/Kuala_Lumpur");

            $date = new DateTime();
            $datenow = $date->format('Y-m-d H:i:s');
            
            $start = strtotime($row['dateuploaded']);
            $end = strtotime($datenow);
            $minutes = round(($end - $start) / 60 );

            if($minutes<60){
                $ago = $minutes . " min ago";
            }
            elseif($minutes<1440){
                $hour = floor($minutes / 60);
                $ago = $hour . " hr ago";
            }
            elseif($minutes<10080){
                $day = floor($minutes/1440);
                $ago = $day . " d ago";
            }
            elseif($minutes<43800){
                $week = floor($minutes/(10080));
                $ago = $week . " wk ago";
            }
            elseif($minutes<525600){
                $month = floor($minutes/(43800));
                $ago = $month . " mo ago";
            }
            else{
                $year = floor($minutes/(525600));
                $ago = $year . " y ago";
            }

            $vote = $row['upvote'] - $row['downvote'];

            $data[] = array(
                'commentid' => $row['id'],
                'users_id' => $row['users_id'],
                'title' => $row['title'],
                'textcmt' => $row['textcmt'],
                'replyto' => $row['replyto'],
                'username' => $row['username'],
                'dateuploaded' => $ago,
                'vote' => $vote
            );
        }

    if($query) $result = json_encode(array('success'=>true, 'result'=>$data));
    else $result = json_encode(array('success'=>false));
    
    echo $result;
    
    }

    elseif($postjson['action']=='getfolderfile'){
        $data = array();
        //$query = mysqli_query($mysqli, "select * from folderfile where visibility is null order by field(icon, 'folder') desc");

        if($postjson['folder_id']!=999){
            if($postjson['folder_id']==0){
            $query = mysqli_query($mysqli, "select * from folderfile where visibility is null and room_id is null and folder_id is null order by id asc");
            }
            else{
                $query = mysqli_query($mysqli, "select * from folderfile where visibility is null and room_id is null and folder_id is null order by id asc");
            }
        }
        else{
            $query = mysqli_query($mysqli, "select * from folderfile where visibility is null and room_id is null order by id asc");
        }
        

        //$date1 = new DateTime('2016-11-30 03:55:06');//start time
        
        //$diff = $date2->diff($date1);
        //$hours = $diff->h;
        //$hours = $hours + ($diff->days*24);


        while($row = mysqli_fetch_array($query)){
            $data[] = array(
                'folderfileid' => $row['id'],
                'folderfilename' => $row['name'],
                'filename' => $row['filename'],
                'folderfiletype' => $row['type'],
                'folderfileicon' => $row['icon'],
                'folder_id' => $row['folder_id'],
                'folderfileusers_id' => $row['users_id'],
                'dateuploaded' => $row['dateuploaded'],
                'visibility' => $row['visibility']
            );
        }

    if($query) $result = json_encode(array('success'=>true, 'result'=>$data));
    else $result = json_encode(array('success'=>false));
    
    echo $result;
    
    }
    elseif($postjson['action']=='getroomfolderfile'){
        $data = array();
        $query = mysqli_query($mysqli, "select * from folderfile where visibility is null and room_id = '$postjson[r_tblroom_id]' order by type, name asc");

        while($row = mysqli_fetch_array($query)){
            $data[] = array(
                'folderfileid' => $row['id'],
                'folderfilename' => $row['name'],
                'filename' => $row['filename'],
                'folderfiletype' => $row['type'],
                'folderfileicon' => $row['icon'],
                'folder_id' => $row['folder_id'],
                'folderfileusers_id' => $row['users_id'],
                'dateuploaded' => $row['dateuploaded'],
                'visibility' => $row['visibility']
            );
        }

    if($query) $result = json_encode(array('success'=>true, 'result'=>$data));
    else $result = json_encode(array('success'=>false));
    
    echo $result;
    
    }
    elseif($postjson['action']=='getroomsubfolderfile'){
        $data = array();
        $query = mysqli_query($mysqli, "select * from folderfile where visibility is null and room_id = 1 and folder_id = 194 order by id asc");

        while($row = mysqli_fetch_array($query)){
            $data[] = array(
                'folderfileid' => $row['id'],
                'folderfilename' => $row['name'],
                'filename' => $row['filename'],
                'folderfiletype' => $row['type'],
                'folderfileicon' => $row['icon'],
                'folder_id' => $row['folder_id'],
                'folderfileusers_id' => $row['users_id'],
                'dateuploaded' => $row['dateuploaded'],
                'visibility' => $row['visibility']
            );
        }

    if($query) $result = json_encode(array('success'=>true, 'result'=>$data));
    else $result = json_encode(array('success'=>false));
    
    echo $result;
    
    }

    elseif($postjson['action']=='getbookmark'){
        $data = array();
        //$query = mysqli_query($mysqli, "select * from folderfile where visibility is null order by field(icon, 'folder') desc");
        $query = mysqli_query($mysqli, "select bookmark.id, bookmark.folderfile_id, bookmark.users_id, folderfile.icon as folderfile_icon, folderfile.name as folderfile_name from bookmark inner join folderfile on bookmark.folderfile_id = folderfile.id where bookmark.users_id='$postjson[users_id]'");

        //$date1 = new DateTime('2016-11-30 03:55:06');//start time
        
        //$diff = $date2->diff($date1);
        //$hours = $diff->h;
        //$hours = $hours + ($diff->days*24);


        while($row = mysqli_fetch_array($query)){
            $data[] = array(
                'bookmarkid' => $row['id'],
                'folderfile_id' => $row['folderfile_id'],
                'bookmark_users_id' => $row['users_id'],
                'folderfile_icon' => $row['folderfile_icon'],
                'folderfile_name' => $row['folderfile_name']
                //'folderfile_id' => $row['folderfile_id'],
                //inner join
                /*'folderfileid' => $row['folderfile.id'],
                'folderfilename' => $row['folderfile.name'],
                'filename' => $row['folderfile.filename'],
                'folderfiletype' => $row['folderfile.type'],
                'folderfileicon' => $row['folderfile.icon'],
                'folder_id' => $row['folderfile.folder_id'],
                'folderfileusers_id' => $row['folderfile.users_id'],
                'dateuploaded' => $row['folderfile.dateuploaded'],
                'visibility' => $row['folderfile.visibility']*/
            );
        }

    if($query) $result = json_encode(array('success'=>true, 'result'=>$data));
    else $result = json_encode(array('success'=>false));
    
    echo $result;
    
    }

    elseif($postjson['action']=='gettask'){
        $data = array();
        $query = mysqli_query($mysqli, "select * from task");

        while($row = mysqli_fetch_array($query)){
            $data[] = array(
                'taskid' => $row['id'],
                'taskname' => $row['name'],
                'taskstart' => $row['start'],
                'taskend' => $row['end']
            );
        }

    if($query) $result = json_encode(array('success'=>true, 'result'=>$data));
    else $result = json_encode(array('success'=>false));
    
    echo $result;
    
    }

    elseif($postjson['action']=='addbookmark'){
        $data = array();
        $query = mysqli_query($mysqli, "insert into bookmark set folderfile_id = '$postjson[folderfile_id]', users_id = '$postjson[users_id]'");
    

    if($query) $result = json_encode(array('success'=>true, 'result'=>$data));
    else $result = json_encode(array('success'=>false));
    
    echo $result;
    
    }

    elseif($postjson['action']=='addtask'){
        $data = array();
        $query = mysqli_query($mysqli, "insert into task set name = '$postjson[task_name]'");
    

    if($query) $result = json_encode(array('success'=>true, 'result'=>$data));
    else $result = json_encode(array('success'=>false));
    
    echo $result;
    
    }


    elseif($postjson['action']=='renamefolderfile'){
        $data = array();
        $query = mysqli_query($mysqli, "update folderfile set name = '$postjson[rename]' where id = '$postjson[folderfile_id]'");

    if($query) $result = json_encode(array('success'=>true, 'result'=>$data));
    else $result = json_encode(array('success'=>false));
    
    echo $result;
    
    }

    elseif($postjson['action']=='addfolderfile_folder'){
        $data = array();
        $query = mysqli_query($mysqli, "insert into folderfile set name = '$postjson[name]', icon = 'folder', users_id = 1");

    if($query) $result = json_encode(array('success'=>true, 'result'=>$data));
    else $result = json_encode(array('success'=>false));
    
    echo $result;
    
    }

    elseif($postjson['action']=='addfolderfile_subfolder'){
        $data = array();
        
$query = mysqli_query($mysqli, "insert into folderfile set name = '$postjson[name]', icon = 'folder', folder_id = '$postjson[parent]', users_id = 1");
    if($query) $result = json_encode(array('success'=>true, 'result'=>$data));
    else $result = json_encode(array('success'=>false));
    
    echo $result;
    
    }

    elseif($postjson['action']=='addroomfolderfile_subfolder'){
        $data = array();

        if($postjson['parent']==0){
            $query = mysqli_query($mysqli, "insert into folderfile set name = '$postjson[name]', icon = 'folder', users_id = 1, room_id='$postjson[r_tblroom_id]'");
        }
        else{
            $query = mysqli_query($mysqli, "insert into folderfile set name = '$postjson[name]', icon = 'folder', folder_id = '$postjson[parent]', users_id = 1, room_id='$postjson[r_tblroom_id]'");
        }
        

    if($query) $result = json_encode(array('success'=>true, 'result'=>$data));
    else $result = json_encode(array('success'=>false));
    
    echo $result;
    
    }

    elseif($postjson['action']=='deletefolderfile'){
        $query = mysqli_query($mysqli, "SELECT COUNT(id) FROM folderfile WHERE folder_id = 2");
        $query2 = mysqli_query($mysqli, "SELECT id FROM folderfile WHERE folder_id = 2");
        $query3 = mysqli_query($mysqli, "SELECT id FROM folderfile WHERE folder_id = 3");
        $query4 = mysqli_query($mysqli, "SELECT id FROM folderfile WHERE folder_id = 4");
        
        //$count = mysqli_num_rows($query2);

        $deletelist = array();
        $curr = array();
        

        $querya = mysqli_query($mysqli, "SELECT id FROM folderfile WHERE folder_id = $postjson[folderfileid]");
        while($row = mysqli_fetch_array($querya)){
            array_push($deletelist, $row['id']);
            array_push($curr, $row['id']);
            $data = json_encode($deletelist);
        }
        
        for($i=0; $i<count($curr); $i++){
            $querya = mysqli_query($mysqli, "SELECT id FROM folderfile WHERE folder_id = $curr[$i]");
            while($row = mysqli_fetch_array($querya)){
                array_push($deletelist, $row['id']);
                array_push($curr, $row['id']);
                $data = json_encode($deletelist);
            }
        }

        $reversed = array_reverse($deletelist);
        array_push($reversed, $postjson['folderfileid']);
        $data = json_encode($reversed);

        for($i=0; $i<count($reversed); $i++){
            $querydeletefk = mysqli_query($mysqli, "DELETE FROM bookmark WHERE folderfile_id = $reversed[$i]");
            $querydelete = mysqli_query($mysqli, "DELETE FROM folderfile WHERE id = $reversed[$i]");
        }

        /*
        $querya = mysqli_query($mysqli, "SELECT id FROM folderfile WHERE folder_id = $curr[0]");
        while($row = mysqli_fetch_array($querya)){
            array_push($deletelist, $row['id']);
            $data = json_encode($deletelist);
        }

        $querya = mysqli_query($mysqli, "SELECT id FROM folderfile WHERE folder_id = $curr[1]");
        while($row = mysqli_fetch_array($querya)){
            array_push($deletelist, $row['id']);
            $data = json_encode($deletelist);
        }*/

        

    if($query)
        $result = json_encode(array('success'=>true, 'result'=>$data));
    else $result = json_encode(array('success'=>false));
    
    //echo $result;
    echo $data;
    
    }

    elseif($postjson['action']=='deletebookmark'){
        $data = array();
        $query = mysqli_query($mysqli, "delete from bookmark where folderfile_id = '$postjson[folderfile_id]'");

        if($query) $result = json_encode(array('success'=>true, 'result'=>$data));
        else $result = json_encode(array('success'=>false));
        
        echo $result;
    
    }

    elseif($postjson['action']=='deletetask'){
        $data = array();
        $query = mysqli_query($mysqli, "delete from task where id = '$postjson[taskid]'");

        if($query) $result = json_encode(array('success'=>true, 'result'=>$data));
        else $result = json_encode(array('success'=>false));
        
        echo $result;
    
    }

    elseif($postjson['action']=='getusers'){
        $data = array();
        $query = mysqli_query($mysqli, "select * from users");

        while($row = mysqli_fetch_array($query)){
            $data[] = array(
                'id_users' => $row['id'],
                'username_users' => $row['username'],
                'passwordhash_users' => $row['passwordhash'],
                'displayname_users' => $row['displayname'],
                'role_users' => $row['role'],
                'dateregistered_users' => $row['dateregistered'],
                'status_users' => $row['status']
            );
        }

    if($query) $result = json_encode(array('success'=>true, 'result'=>$data));
    else $result = json_encode(array('success'=>false));
    
    echo $result;
    
    }

    elseif($postjson['action']=='getpostall'){
        $data = array();
        $query = mysqli_query($mysqli, "select * from ( select comment.id, users_id, title, textcmt, replyto, users.username, dateuploaded, upvote, downvote from comment join users on comment.users_id=users.id where replyto is null and comment.id='$postjson[passededitid]' order by dateuploaded desc) d order by dateuploaded desc");
    
        //$date1 = new DateTime('2016-11-30 03:55:06');//start time
        
        //$diff = $date2->diff($date1);
        //$hours = $diff->h;
        //$hours = $hours + ($diff->days*24);

        
        while($row = mysqli_fetch_array($query)){
            date_default_timezone_set("Asia/Kuala_Lumpur");

            $date = new DateTime();
            $datenow = $date->format('Y-m-d H:i:s');
            
            $start = strtotime($row['dateuploaded']);
            $end = strtotime($datenow);
            $minutes = round(($end - $start) / 60 );

            if($minutes<60){
                $ago = $minutes . " minutes ago";
            }
            elseif($minutes<1440){
                $hour = floor($minutes / 60);
                $ago = $hour . " hours ago";
            }
            elseif($minutes<10080){
                $day = floor($minutes/1440);
                $ago = $day . " days ago";
            }
            elseif($minutes<43800){
                $week = floor($minutes/(10080));
                $ago = $week . " weeks ago";
            }
            elseif($minutes<525600){
                $month = floor($minutes/(43800));
                $ago = $month . " months ago";
            }
            else{
                $year = floor($minutes/(525600));
                $ago = $year . " years ago";
            }

            $vote = $row['upvote'] - $row['downvote'];

            $data[] = array(
                'commentid' => $row['id'],
                'users_id' => $row['users_id'],
                'title' => $row['title'],
                'textcmt' => $row['textcmt'],
                'replyto' => $row['replyto'],
                'username' => $row['username'],
                'dateuploaded' => $ago,
                'vote' => $vote
            );
        }

    if($query) $result = json_encode(array('success'=>true, 'result'=>$data));
    else $result = json_encode(array('success'=>false));
    
    echo $result;
    
    }

    elseif($postjson['action']=='deletepost'){
        $data = array();
        $query = mysqli_query($mysqli, "DELETE FROM tagcomment WHERE comment_id = '$postjson[commentid]'");
        $query2 = mysqli_query($mysqli, "DELETE FROM comment WHERE thread = '$postjson[commentid]'");
    
        //$date1 = new DateTime('2016-11-30 03:55:06');//start time
        
        //$diff = $date2->diff($date1);
        //$hours = $diff->h;
        //$hours = $hours + ($diff->days*24);


    if($query) $result = json_encode(array('success'=>true, 'result'=>$data));
    else $result = json_encode(array('success'=>false));
    
    echo $result;
    
    }

    elseif($postjson['action']=='getthread'){
        $data = array();
        $query = mysqli_query($mysqli, "select * from ( select comment.id, users_id, title, textcmt, replyto, thread, users.username, dateuploaded, upvote, downvote from comment join users on comment.users_id=users.id where thread=$postjson[thread] order by dateuploaded desc limit 8 offset 0) d order by dateuploaded desc");
    
        //$date1 = new DateTime('2016-11-30 03:55:06');//start time
        
        //$diff = $date2->diff($date1);
        //$hours = $diff->h;
        //$hours = $hours + ($diff->days*24);

        
        while($row = mysqli_fetch_array($query)){
            date_default_timezone_set("Asia/Kuala_Lumpur");

            $date = new DateTime();
            $datenow = $date->format('Y-m-d H:i:s');
            
            $start = strtotime($row['dateuploaded']);
            $end = strtotime($datenow);
            $minutes = round(($end - $start) / 60 );

            if($minutes<60){
                $ago = $minutes . " minutes ago";
            }
            elseif($minutes<1440){
                $hour = floor($minutes / 60);
                $ago = $hour . " hours ago";
            }
            elseif($minutes<10080){
                $day = floor($minutes/1440);
                $ago = $day . " days ago";
            }
            elseif($minutes<43800){
                $week = floor($minutes/(10080));
                $ago = $week . " weeks ago";
            }
            elseif($minutes<525600){
                $month = floor($minutes/(43800));
                $ago = $month . " months ago";
            }
            else{
                $year = floor($minutes/(525600));
                $ago = $year . " years ago";
            }

            $vote = $row['upvote'] - $row['downvote'];

            $data[] = array(
                'commentid' => $row['id'],
                'users_id' => $row['users_id'],
                'title' => $row['title'],
                'textcmt' => $row['textcmt'],
                'replyto' => $row['replyto'],
                'username' => $row['username'],
                'dateuploaded' => $ago,
                'vote' => $vote,
                'thread' => $row['thread']
            );
        }

    if($query) $result = json_encode(array('success'=>true, 'result'=>$data));
    else $result = json_encode(array('success'=>false));
    
    echo $result;
    
    }

    elseif($postjson['action']=='getreply'){
        $data = array();
        $query = mysqli_query($mysqli, "SELECT comment.id, users_id, title, textcmt, replyto, users.username FROM comment INNER JOIN users ON comment.users_id = users.id WHERE replyto IS NOT NULL");
    
        while($row = mysqli_fetch_array($query)){
            $data[] = array(
                'reply_commentid' => $row['id'],
                'reply_users_id' => $row['users_id'],
                'reply_title' => $row['title'],
                'reply_textcmt' => $row['textcmt'],
                'reply_replyto' => $row['replyto'],
                'reply_username' => $row['username']
            );
        }

    if($query) $result = json_encode(array('success'=>true, 'result'=>$data));
    else $result = json_encode(array('success'=>false));
    
    echo $result;
    
    }


    elseif($postjson['action']=='getdata'){
        $data = array();
        $query = mysqli_query($mysqli, "SELECT * FROM master_customer ORDER BY customer_id DESC LIMIT $postjson[start], $postjson[limit]");
    
        while($row = mysqli_fetch_array($query)){
            $data[] = array(
                'customer_id' => $row['customer_id'],
                'name_customer' => $row['name_customer'],
                'desc_customer' => $row['desc_customer'],
                'created_at' => $row['created_at'],
            );
        }

    if($query) $result = json_encode(array('success'=>true, 'result'=>$data));
    else $result = json_encode(array('success'=>false));
    
    echo $result;
    
    }


    elseif($postjson['action']=='getfile'){
        $data = array();
        $query = mysqli_query($mysqli, "SELECT filedata.id, filedata.name, decoded, type, icon, folderdata_id from filedata inner join folderdata on filedata.folderdata_id = folderdata.id inner join users on folderdata.users_id = users.id where users.username='$postjson[username]' and folderdata.id='$postjson[folderid]'");
    
        while($row = mysqli_fetch_array($query)){
            $data[] = array(
                'id' => $row['id'],
                'name' => $row['name'],
                'decoded' => $row['decoded'],
                'type' => $row['type'],
                'icon' => $row['icon'],
                'folderdata_id' => $row['folderdata_id']
            );
        }

    if($query) $result = json_encode(array('success'=>true, 'result'=>$data));
    else $result = json_encode(array('success'=>false));
    
    echo $result;
    
    }
    elseif($postjson['action']=='getindividualfile'){
        $data = array();
        $query = mysqli_query($mysqli, "SELECT filedata.id, filedata.name, decoded, type, icon, folderdata_id from filedata inner join folderdata on filedata.folderdata_id = folderdata.id inner join users on folderdata.users_id = users.id where users.username='$postjson[username]' and folderdata.id='$postjson[folderid]' and filedata.id='$postjson[fileid]'");
    
        while($row = mysqli_fetch_array($query)){
            $data[] = array(
                'id' => $row['id'],
                'name' => $row['name'],
                'decoded' => $row['decoded'],
                'type' => $row['type'],
                'icon' => $row['icon'],
                'folderdata_id' => $row['folderdata_id']
            );
        }

    if($query) $result = json_encode(array('success'=>true, 'result'=>$data));
    else $result = json_encode(array('success'=>false));
    
    echo $result;
    
    }

    elseif($postjson['action']=='getuser'){
        $data = array();
        $query = mysqli_query($mysqli, "SELECT * FROM users WHERE username = '$postjson[username]'");
    
        while($row = mysqli_fetch_array($query)){
            $data[] = array(
                'id' => $row['id'],
                'username' => $row['username'],
                'passwordhash' => $row['passwordhash'],
                'displayname' => $row['displayname'],
                'role' => $row['role'],
                'dateregistered' => $row['dateregistered'],
                'status' => $row['status']
            );
        }

    if($query) $result = json_encode(array('success'=>true, 'result'=>$data));
    else $result = json_encode(array('success'=>false));
    
    echo $result;
    
    }
    elseif($postjson['action']=='getcurrentuser'){
        $data = array();
        $query = mysqli_query($mysqli, "SELECT * FROM users WHERE username = '$postjson[username]'");
    
        while($row = mysqli_fetch_array($query)){
            $data[] = array(
                'current_userid' => $row['id'],
                'current_username' => $row['username'],
                'current_passwordhash' => $row['passwordhash'],
                'current_displayname' => $row['displayname']
            );
        }

    if($query) $result = json_encode(array('success'=>true, 'result'=>$data));
    else $result = json_encode(array('success'=>false));
    
    echo $result;
    
    }

    elseif($postjson['action']=='getroom'){
        $data = array();
        $query = mysqli_query($mysqli, "SELECT room.id, room.name, room.description FROM roomusers inner join room on roomusers.room_id = room.id inner join users on roomusers.users_id = users.id where users.id = 1");

        while($row = mysqli_fetch_array($query)){
            $data[] = array(
                'tblroom_id' => $row['id'],
                'tblroom_name' => $row['name'],
                'tblroom_description' => $row['description']
            );
        }

    if($query) $result = json_encode(array('success'=>true, 'result'=>$data));
    else $result = json_encode(array('success'=>false));
    
    echo $result;
    }

    elseif($postjson['action']=='addroom'){
        $data = array();
        $query = mysqli_query($mysqli, "INSERT INTO room SET name='$postjson[tblroom_name]', description='$postjson[tblroom_description]'");

        $id_addroom = mysqli_insert_id($mysqli);

        $query2 = mysqli_query($mysqli, "INSERT INTO roomusers(users_id, room_id, role) values(1,$id_addroom,'admin')");

        if($query) $result = json_encode(array('success'=>true, 'result'=>$data));
        else $result = json_encode(array('success'=>false));
        
        echo $result;
    }

    elseif($postjson['action']=='getfolder'){
        $data = array();
        $query = mysqli_query($mysqli, "SELECT folderdata.id, name, description, users_id, users.username, users.passwordhash, users.displayname FROM folderdata INNER JOIN users ON folderdata.users_id = users.id WHERE users.username='$postjson[username]'");

        while($row = mysqli_fetch_array($query)){
            $data[] = array(
                'folderid' => $row['id'],
                'foldername' => $row['name'],
                'description' => $row['description'],
                'users_id' => $row['users_id']
            );
        }

    if($query) $result = json_encode(array('success'=>true, 'result'=>$data));
    else $result = json_encode(array('success'=>false));
    
    echo $result;
    
    }
    elseif($postjson['action']=='update'){
        $query = mysqli_query($mysqli, "UPDATE master_customer SET
        name_customer='$postjson[name_customer]',
        desc_customer='$postjson[desc_customer]' WHERE customer_id='$postjson[customer_id]'");

        if($query) $result = json_encode(array('success'=>true, 'result'=>'success'));
        else $result = json_encode(array('success'=>false, 'result'=>'error'));
        
        echo $result;
    
    }
    elseif($postjson['action']=='delete'){
        $query = mysqli_query($mysqli, "DELETE FROM master_customer WHERE customer_id='$postjson[customer_id]'");

        if($query) $result = json_encode(array('success'=>true, 'result'=>'success'));
        else $result = json_encode(array('success'=>false, 'result'=>'error'));
        
        echo $result;
    
    }
?>