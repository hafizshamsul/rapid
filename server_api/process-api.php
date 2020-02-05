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

    elseif($postjson['action']=='getpost'){
        $data = array();
        $query = mysqli_query($mysqli, "SELECT comment.id, users_id, title, textcmt, replyto, users.username FROM comment INNER JOIN users ON comment.users_id = users.id WHERE replyto IS NULL");
    
        while($row = mysqli_fetch_array($query)){
            $data[] = array(
                'commentid' => $row['id'],
                'users_id' => $row['users_id'],
                'title' => $row['title'],
                'textcmt' => $row['textcmt'],
                'replyto' => $row['replyto'],
                'username' => $row['username']
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
        $query = mysqli_query($mysqli, "SELECT * from filedata inner join folderdata on filedata.folderdata_id = folderdata.id inner join users on folderdata.users_id = users.id where users.username='$postjson[username]' and folderdata.id='$postjson[folderid]'");
    
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