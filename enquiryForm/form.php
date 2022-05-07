<?php 
if(isset($_POST['name'], $_POST['email'], $_POST['phone'], $_POST['purpose']))
{
$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$message = $_POST['purpose'];

$subject= "Meeting Request (Message From Website)";
$to = "sq@royal-mac.com";
$body = "";

$body .= "From: ".$name. "\r\n";
$body .= "Email: ".$email. "\r\n";
$body .= "Phone: ".$phone. "\r\n";
$body .= "Message: ".$message. "\r\n";
mail($to,$subject,$body);
header('location:../index.html');
}

if(isset($_POST['Ename'], $_POST['Eemail'], $_POST['EtxtArea']))
{
$Ename = $_POST['Ename'];
$Eemail = $_POST['Eemail'];
$Emessage = $_POST['EtxtArea'];

$subject= "Enquiry Form (Message From Website)";
$to = "sq@royal-mac.com";
$body = "";

$body .= "From: ".$Ename. "\r\n";
$body .= "Email: ".$Eemail. "\r\n";
$body .= "Message: ".$Emessage. "\r\n";

mail($to,$subject,$body);
header('location:../index.html');
}
?>