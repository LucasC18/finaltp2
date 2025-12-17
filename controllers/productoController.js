import { ProductoService } from "../services/productoService.js";

const productoService = new ProductoService();

export class ProductoController {

  create = async (req, res) => {
    try {
      const producto = await productoService.createProducto(req.body);
      res.status(201).json(producto);
    } catch (error) {
      res.status(400).json({
        statusCode: 400,
        error: error.message
      });
    }
  };

  getAll = async (req, res) => {
    try {
      const productos = await productoService.getAllProductos();
      res.status(200).json(productos);
    } catch {
      res.status(500).json({
        statusCode: 500,
        error: "Error interno del servidor"
      });
    }
  };

  getById = async (req, res) => {
    try {
      const producto = await productoService.getProductoById(req.params.id);
      res.status(200).json(producto);
    } catch (error) {
      res.status(404).json({
        statusCode: 404,
        error: error.message
      });
    }
  };

  update = async (req, res) => {
    try {
      const producto = await productoService.updateProducto(
        req.params.id,
        req.body
      );
      res.status(200).json(producto);
    } catch (error) {
      res.status(400).json({
        statusCode: 400,
        error: error.message
      });
    }
  };

  delete = async (req, res) => {
    try {
      await productoService.deleteProducto(req.params.id);
      res.status(204).send();
    } catch (error) {
      res.status(404).json({
        statusCode: 404,
        error: error.message
      });
    }
  };

  incrementStock = async (req, res) => {
    try {
      const { incremento } = req.body;

      const producto = await productoService.incrementStock(
        req.params.id,
        incremento
      );

      res.status(200).json(producto);
    } catch (error) {
      res.status(400).json({
        statusCode: 400,
        error: error.message
      });
    }
  };
}
