<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"] ?? '';
    $email = $_POST["email"] ?? '';
    $date = $_POST["date"] ?? '';
    $address = $_POST["address"] ?? '';
    $message = $_POST["message"] ?? '';

    // En azından bir formdaki temel alanların dolu olup olmadığını kontrol edelim
    if (empty($name) || empty($email)) {
        echo "error";
        exit;
    }

    $to = "info@drmehmetilteberbahadir.net";
    $subject = "Yeni Randevu Talebi";

    // Form hangi sayfadan geldiyse ona göre mesaj oluştur
    if (!empty($date)) {
        $email_message = "Ad: $name\nE-posta: $email\nRandevu Tarihi: $date";
    } else {
        $email_message = "Ad: $name\nE-posta: $email\nAdres: $address\nMesaj: $message";
    }

    $headers = "From: no-reply@seninsiten.com\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

    if (mail($to, $subject, $email_message, $headers)) {
        echo "success";
    } else {
        echo "error";
    }
}
