<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <link rel="stylesheet" href="../style/style_i.css" />
    <link rel="stylesheet" href="../style/style_z.css" />
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
    />
    <link rel="icon" href= "../pictures/logo.png" />

  </head>
  <body>
    <div id="center_nav">
      <header id="nav" class="unselectable">
        <img src="../pictures/logo.png" alt="logo" id="logo" />
        <div id="navbuttons">
          <button><a href="../index.html">Główna</a></button>
        </div>
        <button id="crt_task">
          <a href="../subpages/dodaj.php" id="crt_href"><b>+ZADANIE</b></a>
        </button>
      </header>
    </div>

    <section id="main_pg">
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

// Retrieve data from the database table
$sql = "SELECT id, name, side1, side2 FROM fiszki";
$result = $conn->query($sql);

if ($result->num_rows > 0) {

    while ($row = $result->fetch_assoc()) {
    echo '<div id="task'.$row["id"].'" class="task" class="unselectable" onclick="valchange('.$row["id"].'); load();">';
    echo $row["name"];
    echo '<p class="side1">'.$row["side1"].'</p>';
    echo '<p class="side2">'.$row["side2"].'</p>';
    echo '</div>';   
    }
  }
// Close the connection
$conn->close();
?>
    </section>

    <footer>Jakub Markowski</footer>
    <script src="script/script_f.js"></script>
  </body>
 

</html>
