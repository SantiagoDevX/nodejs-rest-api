import app from "./app.js";
import { prismaClient } from "./config/db.js";

async function main() {
  try {
    console.time('Database connection');
    await prismaClient.$connect();
    console.timeEnd('Database connection');

    console.time('Server startup');
    app.listen(app.get("port"), () => {
      console.timeEnd('Server startup');
      console.log(`Server is running on http://localhost:${app.get("port")}`);
    });
  } catch (err) {
    console.error('Failed to start server:', err);
    process.exit(1);
  }
}

main();
