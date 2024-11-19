<?php
$servername = "localhost";
$username = "root";
$password = "root";
$dbname = "07_PHP_Banking_Application";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Get form data
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $name = $_POST["name"];
    $type = $_POST["type"];
    $balance = $_POST["balance"];
    $acc_no = $_POST["acc_no"];

    // Prepare and bind
    $stmt = $conn->prepare("INSERT INTO account (name, type, balance, acc_no) VALUES (?, ?, ?, ?)");
    $stmt->bind_param("ssdi", $name, $type, $balance, $acc_no);

    // Execute the query
    if ($stmt->execute()) {
        echo "<p>New account created successfully</p>";
    } else {
        echo "Error: " . $stmt->error;
    }

    // Close statement and connection
    $stmt->close();
} else {
    echo "Invalid request method.";
}

$conn->close();
?>
