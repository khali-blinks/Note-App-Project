import fs from "fs";
const folderName = process.argv[2] || "Project";

fs.mkdirSync(folderName);
