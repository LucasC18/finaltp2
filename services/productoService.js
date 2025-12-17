import { ProductoRepositoryMongo } from "../repository/productoRepositoryMongo.js";

export class ProductoService {

  constructor(repository = new ProductoRepositoryMongo()) {
    this.repository = repository;
  }

  createProducto = async ({ producto, stockAmount }) => {

    if (!producto || producto.trim() === "") {
      throw new Error("El nombre del producto es obligatorio");
    }

    if (!Number.isInteger(stockAmount) || stockAmount < 0) {
      throw new Error("El stock debe ser un número entero mayor o igual a 0");
    }

    return await this.repository.createOne({
      producto,
      stockAmount
    });
  };

  getAllProductos = async () => {
    return await this.repository.getAll();
  };
  getProductoById = async (id) => {
    return await this.repository.getOne(id);
  };

  updateProducto = async (id, data) => {

    if (data.stockAmount !== undefined) {
      if (!Number.isInteger(data.stockAmount) || data.stockAmount < 0) {
        throw new Error("El stock no puede ser negativo");
      }
    }

    return await this.repository.updateOne(id, data);
  };

  incrementStock = async (id, incremento) => {

    if (!Number.isInteger(incremento) || incremento < 1) {
      throw new Error("El incremento mínimo de stock es 1");
    }

    const producto = await this.repository.getOne(id);

    producto.stockAmount += incremento;

    return await this.repository.updateOne(id, {
      stockAmount: producto.stockAmount
    });
  };

  deleteProducto = async (id) => {
    return await this.repository.deleteOne(id);
  };
}
