<?php
require_once "Models/Database.php";

$db = new Database();
$conn = $db->getConnection();

if ($conn) {
    echo "🎉 Conectado correctamente a la BD LabIntranet.";
} else {
    echo "❌ No se pudo conectar.";
}