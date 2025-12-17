import fs from "fs/promises";
import path from "path";

export class AlbumsService {

  async generateCsv() {
    const response = await fetch("https://jsonplaceholder.typicode.com/albums");
    const albums = await response.json();

    const first15 = albums.slice(0, 15);

    const headers = "userId,id,title\n";
    const rows = first15
      .map(a => `${a.userId},${a.id},"${a.title}"`)
      .join("\n");

    const csvContent = headers + rows;

    // 📁 ruta ./albums/albums_15.csv
    const filePath = path.join("albums", "albums_15.csv");

    // asegurarse que exista la carpeta
    await fs.mkdir("albums", { recursive: true });

    await fs.writeFile(filePath, csvContent);

    return csvContent;
  }
}
