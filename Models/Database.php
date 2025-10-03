<?php
class Database {
    private $host = "localhost";
    private $port = "33065";          // 🔹 Puerto de MySQL en XAMPP
    private $db_name = "labintranel"; // Nombre de la base de datos
    private $username = "root";       // Usuario MySQL
    private $password = "";           // Contraseña MySQL
    public $conn;

    public function getConnection() {
        $this->conn = null;

        try {
            $this->conn = new PDO(
                "mysql:host=" . $this->host . ";port=" . $this->port . ";dbname=" . $this->db_name,
                $this->username,
                $this->password
            );
            $this->conn->exec("set names utf8");
        } catch (PDOException $exception) {
            echo "Error de conexión: " . $exception->getMessage();
        }

        return $this->conn;
    }
}
