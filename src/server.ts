import app from "./app.js";
import { prisma } from "./config/db.js";

async function main() {
  try {
    await prisma.$connect();

    app.listen(app.get("port"), () => {
      console.log(`Server is running on http://localhost:${app.get("port")}`);
    });
  } catch (err) {}
}

main();
