<?php
header("Access-Control-Allow-Origin: https://sifu-project.vercel.app");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
require 'config.php';
require 'vendor/autoload.php';
$data = json_decode(file_get_contents('php://input'), true);
$name = $data['name'] ?? '';
$email = $data['email'] ?? '';
$agreed = $data['agreed'] ?? false;
if (!$name || !$email || !$agreed) {
    echo json_encode(['success' => false, 'message' => 'Invalid input']);
    exit;
}
$mail = new PHPMailer(true);
try {
    $mail->isSMTP();
    $mail->Host = 'smtp.sendgrid.net';
    $mail->SMTPAuth = true;
    $mail->Username = 'apikey';
    $mail->Password = SENDGRID_API_KEY;
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port = 587;
    $mail->setFrom('avramidi.yaroslav@gmail.com', 'Yaroslav');
    $mail->addAddress($email, $name);
    $mail->isHTML(true);
    $mail->Subject = 'Thanks for subscribing!';
    $mail->Body    = "<h1>Hi, $name!</h1><p>Thank you for subscribing to our newsletter.</p>";
    $mail->AltBody = 'Hi, thanks for subscribing to our newsletter!';
    $mail->send();
    echo json_encode(['success' => true, 'message' => 'Email sent']);
} catch (Exception $e) {
    echo json_encode(['success' => false, 'message' => 'Mailer Error: ' . $mail->ErrorInfo]);
}
?>