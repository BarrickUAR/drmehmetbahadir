<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $date = $_POST["date"];

    $to = "info@drmehmetilteberbahadir.net"; // Alıcı mail adresi
    $subject = "Yeni Randevu Talebi";
    $message = "Ad: $name\nE-posta: $email\nRandevu Tarihi: $date";
    $headers = "From: $email" . "\r\n" . "Reply-To: $email";

    if (mail($to, $subject, $message, $headers)) {
        echo "success";
    } else {
        echo "error";
    }
}
?>


<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $address = $_POST["address"];
    $message = $_POST["message"];

    $to = "info@drmehmetilteberbahadir.net";
    $subject = "Yeni Randevu Talebi";
    $body = "İsim: $name\nE-posta: $email\nAdres: $address\nMesaj: $message";
    $headers = "From: $email";

    if (mail($to, $subject, $body, $headers)) {
        echo "success";
    } else {
        echo "error";
    }
}
?>a