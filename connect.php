<?php
$username = $_POST['username'];
$email = $_POST['email'];
$password = $_POST['password'];
$password2 = $_POST['password2'];
$conn = new mysqli('localhost','root','','client');
if($conn->connect_error){
  die('connection Failed  :'.$conn->connect_error);
}else{
    $stmt = $conn->prepare("insert into clientelle (username,email,password,password2) values(?,?,?,?)");
    $stmt->bind_param("ssss",$username,$email,$password,$password2);
    $stmt->execute();
    echo " inscription avec succes...";
    $stmt->close();
    $conn->close();
}
?>