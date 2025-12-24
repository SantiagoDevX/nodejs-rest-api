import app from "./app.js";

function main() {
  try {
    app.listen(app.get("port"), () => {
      console.log(`Server is running on http://localhost:${app.get("port")}`);
    });
  } catch (err) {
    console.error("Error starting the server:", err);
    process.exit(1);
  }
}

main();
