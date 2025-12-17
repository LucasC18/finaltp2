import { AlbumsService } from "../services/albumsService.js";

const service = new AlbumsService();

export class AlbumsController {

  getCsv = async (req, res) => {
    try {
      const csv = await service.generateCsv();

      res.header("Content-Type", "text/csv");
      res.header("Content-Disposition", "attachment; filename=albums_15.csv");
      res.status(200).send(csv);

    } catch (error) {
      res.status(500).json({
        statusCode: 500,
        error: "Error generando CSV"
      });
    }
  };
}
