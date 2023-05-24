<!DOCTYPE html>
<html>

<head>
    <title>Contoh Penggunaan Variable Secrets di HTML</title>
</head>

<body>
    <h1>Contoh Penggunaan Variable Secrets di HTML</h1>

    <?php
    $secretValue = $_ENV['USER_EMAIL']; // Ganti dengan nama variable secrets yang Anda simpan di GitHub

    echo "<p>Nilai rahasia: $secretValue</p>";
    ?>
</body>

</html>