<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <link rel="stylesheet" href="./style/style_i.css" />
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
    <link rel="stylesheet" href="./style/style_d.css" />
    <link rel="icon" href= "./pictures/logo.png" />
</head>
<body>
    <div id="center_nav">
        <header id="nav" class="unselectable">
            <img src="./pictures/logo.png" alt="logo" id="logo" />
            <div id="navbuttons">
                <button><a href="index.html">Główna</a></button>
                <button><a href="zadania.php">Zadania</a></button>
            </div>
        </header>
    </div>

    <section id="main_pg">
        <div id="fiszka">
            <textarea id="tekst"></textarea>
            <button id="flip" onclick="flip()">
                <span class="material-symbols-rounded">switch_access_shortcut</span>
            </button>
        </div>
                    <div id="plus" onclick="fadd()" class="unselectable">dodaj</div>
    </section>

    <form id="submit" method="POST">
        <div id="created"></div>
        <input type="text" id="name" name="name" onkeyup="check()" placeholder="nazwa"/>
        <button type="submit" name="send" id="send" disabled="true">Gotowe</button>
        <textarea class="invisible" id="s1" name="s1"></textarea>
        <textarea class="invisible" id="s2" name="s2"></textarea>
    </form>
    <footer>Jakub Markowski</footer>
    <script src="./script/script_d.js"></script>
</body>
<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "fiszki";

// Create a connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check the connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Check if the form is submitted
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Retrieve data from the form
    $name = $_POST["name"];
    $side1 = $_POST["s1"];
    $side2 = $_POST["s2"];

    // Insert data into the "fiszki" table
    $stmt = $conn->prepare("INSERT INTO fiszki (name, side1, side2) VALUES (?, ?, ?)");
    $stmt->bind_param("sss", $name, $side1, $side2);
    $stmt->execute();

}

// Close the connection
$conn->close();
?>
</html>
