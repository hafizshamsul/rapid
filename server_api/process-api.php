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


    elseif($postjson['action'] == 'getuser'){
        $query = mysqli_query($mysqli, "select * from users where username='$postjson[username]' and passwordhash='$postjson[password]'");

        if ($query->num_rows > 0) {
            while($row = mysqli_fetch_array($query)){
                $data[] = array(
                    'id' => $row['id'],
                    'username' => $row['username'],
                    'password' => $row['passwordhash'],
                    'displayname' => 'hehe'
                );
            }
        }
        else{
            $data[] = array(
                'id' => null,
                'username' => null,
                'password' => null,
                'displayname' => null
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

        $query_addpost = mysqli_query($mysqli, "INSERT INTO comment SET users_id = '$postjson[users_id]', title = '$postjson[title]', textcmt = '$postjson[textcmt]'");
        
        $id_addpost = mysqli_insert_id($mysqli);
        $addone = mysqli_insert_id($mysqli)+1;

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
        $query = mysqli_query($mysqli, "select * from tagcomment inner join (select comment.id, dateuploaded from comment order by dateuploaded desc limit 8 offset 0)d on tagcomment.comment_id = d.id inner join tag on tagcomment.tag_id=tag.id order by dateuploaded desc, tag.tagname");
    
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
        $query = mysqli_query($mysqli, "select * from ( select comment.id, users_id, title, textcmt, replyto, users.username, dateuploaded, upvote, downvote from comment join users on comment.users_id=users.id where replyto is null order by dateuploaded desc limit 8 offset 0) d order by dateuploaded desc");
    
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
                'displayname' => $row['displayname']
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