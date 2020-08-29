<?php
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Content-Range, Content-Disposition, Content-Description, Authorization, X-Requested-With');

header("Access-Control-Allow-Credentials: true ");
header("Content-Type: application/json; charset=utf-8");


   // Retrieve and decode the posted JSON data
   $posted        = file_get_contents("php://input");
   $obj           =  json_decode($posted);
   
   $postjson = json_decode(file_get_contents('php://input'), true);
   $today = date('Y-m-d');
   
   //$ok = $postjson['action'];
   //$ok = json_decode(file_get_contents('action'), true);

   // Separate out the supplied keys/values
   $fileName      =  strip_tags($obj->name);
   $fileData      =  strip_tags($obj->file);
   $fileRename = strip_tags($obj->rename);
   $action = strip_tags($obj->action);


   // Format the supplied base64 data URI so that we remove the initial base64 identifier
   $uri           =  substr($fileData,strpos($fileData,",")+1);


   // Replace any spaces in the formatted base64 URI string with pluses to avoid corrupted file data
   $encodedData   = str_replace(' ','+',$uri);


   // Decode the formatted base64 URI string
   $decodedData   = base64_decode($encodedData);
   //include "http://192.168.0.137/rapidkl/upload_api/uploads";

   include "library/config.php";

   //include "../uploads";
   //$ok = $postjson['action'];
   //fopen("http://192.168.0.137/rapidkl/upload_api/uploads")

   try {

      // Write the base64 URI data to a file in a sub-directory named uploads
      if(!file_put_contents("uploads/" . $fileName, $decodedData))
      {
         // Uh-oh! Something went wrong - inform the user
         echo json_encode(array('message' => 'Error! The supplied data was NOT written '));
      }

      /*if($postjson['action'] == 'add'){
      }*/

      // Everything went well - inform the user :)
      if($postjson['action'] == 'add'){
         $query = mysqli_query($mysqli, "INSERT INTO filedata SET name = '$postjson[name]', decoded = '$postjson[file]'");
      
      }
      
      /*if($postjson['action']=='added'){
         $data = array();
         $query = mysqli_query($mysqli, "SELECT * FROM filedata");
      
         while($row = mysqli_fetch_array($query)){
               $data[] = array(
                  'name' => $row['name'],
                  'decoded' => $row['decoded']
               );
         }
         if($query) $result = json_encode(array('success'=>true, 'result'=>$data));
         else $result = json_encode(array('success'=>false));
         
         echo $result;
      }*/
      /*if($postjson['action'] == 'add'){
         $query = mysqli_query($mysqli, "INSERT INTO master_customer SET name_customer = '$postjson[name_customer]', desc_customer = '$postjson[desc_customer]', created_at = '$today'");
 
         $idcust = mysqli_insert_id($mysqli);
 
         if($query){
             $result = json_encode(array('success'=>true, 'customer_id'=>$idcust));
         }
         else{
             $result = json_encode(array('success'=>false));
         }
 
         echo $result;
     }*/
      echo json_encode(array('message' => 'The file was successfully uploaded'));

   }
   catch(Exception $e)
   {
      // Uh-oh! Something went wrong - inform the user
      echo json_encode(array('message' => 'Fail!'));
   }

?>