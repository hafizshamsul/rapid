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
    elseif($postjson['action']=='getit'){
        $data = array();
        $query = mysqli_query($mysqli, "SELECT * FROM filedata WHERE folderdata_id=$postjson[folder] ORDER BY id DESC");
    
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
        $query = mysqli_query($mysqli, "SELECT * FROM users WHERE id = $postjson[id]");
    
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
    elseif($postjson['action']=='getfolder'){
        $data = array();
        $query = mysqli_query($mysqli, "SELECT * FROM folderdata INNER JOIN users ON folderdata.users_id = users.id WHERE users.username='$postjson[username]'");
    
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