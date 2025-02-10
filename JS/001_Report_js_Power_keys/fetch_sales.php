<?php
// Database connection settings
$serverName = "192.168.5.200,1433"; // Ensure port 1433 is correct
$database = "HOLive";
$username = "sa";
$password = "Pass@123";

// Connect to SQL Server
$connectionOptions = array(
    "Database" => $database,
    "UID" => $username,
    "PWD" => $password,
    "TrustServerCertificate" => true
);

// Establish connection
$conn = sqlsrv_connect($serverName, $connectionOptions);

if (!$conn) {
    die(json_encode(["error" => "Database connection failed"]));
}

// Query to get today's total sales
$sql = "SELECT SUM([Amount to Account]) AS TotalSale 
        FROM [MithaasLive$Transaction Header] 
        WHERE CAST([Original Date] AS DATE) = CAST(GETDATE() AS DATE)";

$stmt = sqlsrv_query($conn, $sql);

if ($stmt === false) {
    die(json_encode(["error" => "Query execution failed"]));
}

// Fetch result
$row = sqlsrv_fetch_array($stmt, SQLSRV_FETCH_ASSOC);
$totalSales = $row['TotalSale'] ?? 0;

// Return JSON response
echo json_encode(["total_sales" => $totalSales]);

// Close connection
sqlsrv_close($conn);
?>
