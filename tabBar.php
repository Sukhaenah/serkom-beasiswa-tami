<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="assets/css/tab.css" />
    <title>Tab Bar</title>
</head>

<body>
    <!-- Start Header Section -->
    <header id="header" class="header fixed-top d-flex align-items-center justify-content-between">
        <div class="container-fluid d-flex align-items-center justify-content-between">
            <!-- Logo Section -->
            <div class="d-flex align-items-center">
                <img src="assets/img/logo.png" alt="Logo" style="height: 40px; margin-right: 15px;">
            </div>

            <!-- Tab Menu -->
            <?php
            $current_page = basename($_SERVER['PHP_SELF']); // get current file name
            ?>
            <ul class="nav nav-tabs ml-auto" id="myTab" role="tablist">
                <li class="nav-item" role="presentation">
                    <a class="nav-link <?php echo ($current_page == 'index.php') ? 'active' : ''; ?>" id="home-tab" href="index.php" role="tab" aria-controls="home" aria-selected="<?php echo ($current_page == 'index.php') ? 'true' : 'false'; ?>">Pilihan Beasiswa</a>
                </li>
                <li class="nav-item" role="presentation">
                    <a class="nav-link <?php echo ($current_page == 'process.php') ? 'active' : ''; ?>" id="daftar-tab" href="process.php" role="tab" aria-controls="daftar" aria-selected="<?php echo ($current_page == 'daftar.php') ? 'true' : 'false'; ?>">Daftar</a>
                </li>
                <li class="nav-item" role="presentation">
                    <a class="nav-link <?php echo ($current_page == 'result.php') ? 'active' : ''; ?>" id="hasil-tab" href="result.php" role="tab" aria-controls="hasil" aria-selected="<?php echo ($current_page == 'hasil.php') ? 'true' : 'false'; ?>">Hasil</a>
                </li>
            </ul>
        </div>
    </header>

    <div class="tab-container">
        <!-- Tab content will go here -->
    </div>
</body>

</html>
