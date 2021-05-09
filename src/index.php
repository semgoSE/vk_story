<?php
header("Access-Control-Allow-Origin:*");
$db = mysqli_connect('localhost', 'id12832875_admin_semgo', '*~@rT\HwF%uR>5X$', 'id12832875_text_quest');

$f = json_decode(file_get_contents("php://input"), true);

switch ($f['event']) {

    case 'create_project':
        $arr = log_in($f['url']);
        if($arr['status'] == true) {
	    $name = $f['name'];
	    $vk_id = $arr['vk_id'];
      @$description = $f['description'];
      $type = $f['type'];
      @$fandom = $f['fandom'];
      @$file = $f['img'];
      $sql = mysqli_query($db, "INSERT INTO projects SET name='$name', description='$description', fandom='$fandom', type='$type', img='$file', vk_id='$vk_id'") or die(mysqli_error($db));
      echo mysqli_insert_id($db);
        }
    break;

    case 'set_project':
      $arr = log_in($f['url']);
      if($arr['status'] == true) {
        $project_id = $f['project_id'];
        $qw = mysqli_fetch_assoc(mysqli_query($db, "SELECT * FROM projects WHERE project_id = '$project_id'"));
        if($arr['vk_id'] == $qw['vk_id']) {
          $img = $f['img'];
          $type = $f['type'];
          $fandom = $f['fandom'];
          $name = $f['name'];
          $description = $f['description'];
          $sql = mysqli_query($db, "UPDATE projects SET name='$name', description='$description', img='$img', type='$type', fandom='$fandom' WHERE project_id = '$project_id'") or die(mysqli_error($db));
        }
      }
    break;  

    case 'create_route':
      $arr = log_in($f['url']);
      if($arr['status'] == true) {
          $project_id = $f['project_id'];
          $qw = mysqli_fetch_assoc(mysqli_query($db, "SELECT * FROM projects WHERE project_id = '$project_id'"));
          if($arr['vk_id'] == $qw['vk_id']) {
              $text = $f['text'];
              $count = $f['count'];
              if($f['img'] == null) $img = 0; else $img = 1;
              $ids = mysqli_query($db, "SELECT id FROM route WHERE project_id='$project_id' ORDER BY id DESC");
                if(mysqli_num_rows($ids) != 0) {
                  $n = mysqli_fetch_assoc($ids)['id']+1;
                }else{
                  $n = 1;
                }
              if($count >= 1) $answer_1 = $f['answer_1']; else $answer_1 = null;
              if($count >= 2) $answer_2 = $f['answer_2']; else $answer_2 = null;
              if($count >= 3) $answer_3 = $f['answer_3']; else $answer_3 = null;
              $sql = mysqli_query($db, "INSERT INTO route SET id='$n', project_id='$project_id', text='$text', answer_1='$answer_1', answer_2='$answer_2', answer_3='$answer_3', count='$count', img='$img'") or die(mysqli_error($db));
               echo $n;
               if($f['img'] !== null) {
               $data = explode( ',', $f['img']);
               $bin = base64_decode($data[1]);
               $im = imageCreateFromString($bin);
               if (!$im) {
                  die('Base64 value is not a valid image');
               }
               $img_file = "../{$project_id}_{$n}.png";
               $o =imagepng($im, $img_file, 0);
               imagedestroy($im);
              }
          }
      }
	break;   
	
	case 'get_routes':
	  $arr = log_in($f['url']);
	  if($arr['status'] == true) {
		  $project_id = $f['project_id'];
		  $qw = mysqli_fetch_assoc(mysqli_query($db, "SELECT * FROM projects WHERE project_id = '$project_id'"));
		  if($arr['vk_id'] == $qw['vk_id']) {
        $offset = $f['offset']*15;
        $sql = mysqli_query($db, "SELECT * FROM route WHERE project_id='$project_id' ORDER BY id DESC LIMIT 15 OFFSET {$offset}");
        $offset += 15;
        $n = mysqli_num_rows(mysqli_query($db, "SELECT * FROM route WHERE project_id='$project_id' ORDER BY id DESC LIMIT 15 OFFSET {$offset}"));
        if($n !== 0) $bool=true; else $bool=false;
			  $res = [];
			  while($row = mysqli_fetch_assoc($sql)){
                array_push($res, $row);
        }
        $response['data'] = $res;
        $response['more'] = $bool;
			  echo json_encode($response, JSON_UNESCAPED_UNICODE);
		  }
	  }
  break;	

  case 'get_projects_search':
    $arr = log_in($f['url']);
   if($arr['status'] == true) {

    $offset = $f['offset']*20;
    $q = $f['q'];
    $type = $f['type'];
    $fandom =$f['fandom'];
    $arr =[];
    $sql = mysqli_query($db, "SELECT * FROM projects WHERE (name LIKE '%{$q}%' OR description LIKE '%$q%') AND type LIKE '%$type%' AND fandom LIKE '%$fandom%' AND watch=1  LIMIT 20 OFFSET {$offset}") or die(mysqli_error($db));
    $offset += 20;
    $n = mysqli_num_rows(mysqli_query($db,"SELECT * FROM projects WHERE (name LIKE '%{$q}%' OR description LIKE '%$q%') AND type LIKE '%$type%' AND fandom LIKE '%$fandom%' AND watch=1 ORDER BY rating DESC LIMIT 20 OFFSET {$offset}"));
    if($n !== 0) $bool=true; else $bool=false;
     while($row = mysqli_fetch_assoc($sql)) {
       $response = json_decode(file_get_contents("https://api.vk.com/method/users.get?user_ids={$row['vk_id']}&fields=screen_name,photo_200&v=5.103&access_token=9dd753b59dd753b59dd753b5dd9da65f2b99dd79dd753b5c343ec792ccbada3c969b2e4&lang=ru"), true);
       $row['url'] = "https://vk.com/{$response['response'][0]['screen_name']}";
       $row['photo_200'] = $response['response'][0]['photo_200'];
       $row['user'] = "{$response['response'][0]['first_name']} {$response['response'][0]['last_name']}";
       array_push($arr, $row);
     }
     $res['data'] = $arr;
     $res['more'] = $bool;
     echo json_encode($res, JSON_UNESCAPED_UNICODE);
}
  break;  
  
  case 'search':
    $arr = log_in($f['url']);
    if($arr['status'] == true) {

    $page = $f['page']*20;
    $q = $f['q'];
    $arr =[];
    $sql = mysqli_query($db, "SELECT * FROM fandoms WHERE name LIKE '%{$q}%' ORDER BY name DESC LIMIT 20 OFFSET {$page}") or die(mysqli_error($db));
    $page += 20;
    $n = mysqli_num_rows(mysqli_query($db, "SELECT * FROM fandoms WHERE name LIKE '%{$q}%' LIMIT 20 OFFSET {$page}"));
    if($n !== 0) $bool=true; else $bool=false;
     while($row = mysqli_fetch_assoc($sql)) {
       array_push($arr, $row);
     }
     $res['data'] = $arr;
     $res['more'] = $bool;
     echo json_encode($res, JSON_UNESCAPED_UNICODE);

  }
  break;  
    
    case 'set_route':
     $arr = log_in($f['url']);
     if($arr['status'] == true) {
         $project_id = $f['project_id'];
         $qw = mysqli_fetch_assoc(mysqli_query($db, "SELECT * FROM projects WHERE project_id = '$project_id'"));
         if($arr['vk_id'] == $qw['vk_id']) {
            $text = $f['text'];
            $n = $f['id'];
            $count = $f['count'];
            $img = $f['img'];
            if($count >= 1){ $answer_1 = $f['answer_1']; $next_1=$f['next_1']; }else {$answer_1 = null; $next_1=null;}
            if($count >= 2){ $answer_2 = $f['answer_2']; $next_2=$f['next_2']; }else {$answer_2 = null; $next_2=null;}
            if($count >= 3){ $answer_3 = $f['answer_3']; $next_3=$f['next_3']; }else {$answer_3 = null; $next_3=null;}
            $sql = mysqli_query($db, "UPDATE route SET text='$text', count='$count', answer_1='$answer_1', answer_2='$answer_2',answer_3='$answer_3', next_1='$next_1', next_2='$next_2', next_3='$next_3', img='$img' WHERE project_id= '$project_id' AND id='$n'") or die(mysqli_error($db));
            if($img == 1) {
              if($f['new_img'] != null) {
                $data = explode( ',', $f['new_img']);
                $bin = base64_decode($data[1]);
                $im = imageCreateFromString($bin);
                if (!$im) {
                        die('Base64 value is not a valid image');
                }
                $img_file = "../{$project_id}_{$n}.png";
                $o =imagepng($im, $img_file, 0);
                imagedestroy($im);
              }  
            }
         }
     }
    break;  
    
   case 'delete_route':
       $arr = log_in($f['url']);
       if($arr['status'] == true) {
         $project_id = $f['project_id'];
         $qw = mysqli_fetch_assoc(mysqli_query($db, "SELECT * FROM projects WHERE project_id = '$project_id'"));
         if($arr['vk_id'] == $qw['vk_id']) {
           $id = $f['id'];
           $sql = mysqli_query($db, "DELETE FROM route WHERE id = '$id' AND project_id = '$project_id'") or die(mysqli_error($db)); 
         }
       }
   break; 

    case 'setNext':
      $arr = log_in($f['url']);
      if($arr['status'] == true) {
        $project_id = $f['project_id'];
        $qw = mysqli_fetch_assoc(mysqli_query($db, "SELECT * FROM projects WHERE project_id = '$project_id'"));
        if($arr['vk_id'] == $qw['vk_id']) {
          $id = $f['id'];
          $next_route = $f['next_route'];
          switch($f['next']) {
              case 1:
                $sql = mysqli_query($db,"UPDATE route SET next_1='$next_route' WHERE id='$id' AND project_id='$project_id'");
              break;  

              case 2:
                $sql = mysqli_query($db,"UPDATE route SET next_2='$next_route' WHERE id='$id' AND project_id='$project_id'");
              break;

              case 3:
                $sql = mysqli_query($db,"UPDATE route SET next_1='$next_route' WHERE id='$id' AND project_id='$project_id'");
              break;
          }
        }
      }
    break; 
    
    case 'delete_project':
      $arr = log_in($f['url']);
      if($arr['status'] == true) {
      
        $project_id = $f['project_id'];
        $qw = mysqli_fetch_assoc(mysqli_query($db, "SELECT * FROM projects WHERE project_id = '$project_id'"));
        if($qw['vk_id'] == $arr['vk_id']) {
          $sql = mysqli_query($db, "DELETE FROM projects WHERE project_id = '$project_id'") or die(mysqli_error($db));
          if($sql) {
            echo 'ok';
          }else{
            echo 'error';
          }
        }
      }
    break;  

    case 'get_my_create_projects':
        $arr = log_in($f['url']);
        if($arr['status'] == true) {
            $vk_id = $arr['vk_id'];
            $offset = $f['offset']*15;
            $sql = mysqli_query($db, "SELECT * FROM projects WHERE vk_id = '$vk_id' LIMIT 15 OFFSET {$offset}");
            $res = [];
            while($row = mysqli_fetch_assoc($sql)) {
                array_push($res, $row);
            }
            $offset += 15;
            $n = mysqli_num_rows(mysqli_query($db, "SELECT * FROM projects WHERE vk_id = '$vk_id' LIMIT 15 OFFSET {$offset}"));
            if($n != 0) $bool=true; else $bool=false;
            $response['data'] = $res;
            $response['more'] = $bool;
            echo json_encode($response, JSON_UNESCAPED_UNICODE);
        }
    break;    

    case 'get_projects':
      $arr = log_in($f['url']);
      if($arr['status'] == true) {
        $sql = mysqli_query($db, "SELECT * FROM projects WHERE watch=1");
        $res = [];
        while ($row = mysqli_fetch_assoc($sql)) {
          array_push($res, $row);
        }
        echo json_encode($res, JSON_UNESCAPED_UNICODE);
      }
    break;   


    case 'set_view':
     $arr = log_in($f['url']);
     if($arr['status'] == true) {
       $project_id = $f['project_id'];
       $qw = mysqli_fetch_assoc(mysqli_query($db, "SELECT * FROM projects WHERE project_id = '$project_id'"));
       if($arr['vk_id'] == $qw['vk_id']) {
         $view = $f['view'];
         $sql = mysqli_query($db, "UPDATE projects SET watch='$view' WHERE project_id = '$project_id'");
         echo $view;
       }
     }
    break;  
}


   function log_in($url) {
    $client_secret = 'XFrm0PijFndFGEHUpm4i'; //Защищённый ключ из настроек вашего приложения

    $query_params = [];
    parse_str(parse_url($url, PHP_URL_QUERY), $query_params); // Получаем query-параметры из URL
    
    $sign_params = [];
    foreach ($query_params as $name => $value) {
        if (strpos($name, 'vk_') !== 0) { // Получаем только vk параметры из query
          continue;
        }
    
    $sign_params[$name] = $value;
    }
    
    ksort($sign_params); // Сортируем массив по ключам
    $sign_params_query = http_build_query($sign_params); // Формируем строку вида "param_name1=value&param_name2=value"
    $sign = rtrim(strtr(base64_encode(hash_hmac('sha256', $sign_params_query, $client_secret, true)), '+/', '-_'), '='); // Получаем хеш-код от строки, используя защищеный ключ приложения. Генерация на основе метода HMAC.
    
    @$status = $sign === $query_params['sign']; 
    $arr['vk_id'] = $query_params['vk_user_id'];
    $arr['status'] = $status;
    return $arr;
   }

   ?>