import pg from "pg"; // Import the pg module for PostgreSQL database interaction

const { Pool } = pg; // Import the Pool class from the pgmodule

const pool = new Pool({
  // Create a new pool instance for managing database connections
  connectionString: process.env.PG_URI, // Use the connection string from environment variables
}); // Create a new pool instance with the connection string from environment variables

// pool.query(); // Export the pool instance for use in other modules #

// Function to execute a query on the database
const query = async (sqlText, param, callBack) => {
  return pool.query(sqlText, param, callBack);
};
export { query }; // Export the pool and query function for use in other modules
// Hilfsfunktion können wir nun überall verwenden, wo wir die Datenbank benötigen
