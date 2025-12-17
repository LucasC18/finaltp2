import { ProductoModel } from "../models/producto.js";

export class ProductoRepositoryMongo {

  constructor(productModel = ProductoModel) {
    this.ProductModel = productModel;
  }

  getAll = async () => {
    try {
      return await this.ProductModel.find({});
    } catch (error) {
      console.error("Error obteniendo productos:", error);
      throw new Error("No se pudieron obtener los productos");
    }
  };

  getOne = async (id) => {
    try {
      const producto = await this.ProductModel.findById(id);
      if (!producto) {
        throw new Error(`Producto con id ${id} no encontrado`);
      }
      return producto;
    } catch (error) {
      console.error(`Error obteniendo producto ${id}:`, error);
      throw error;
    }
  };

  createOne = async ({ producto, stockAmount }) => {
    try {
      return await this.ProductModel.create({
        producto,
        stockAmount
      });
    } catch (error) {
      console.error("Error creando producto:", error);
      throw new Error("No se pudo crear el producto");
    }
  };

  updateOne = async (id, data) => {
    try {
      const productoActualizado =
        await this.ProductModel.findByIdAndUpdate(
          id,
          data,
          { new: true }
        );

      if (!productoActualizado) {
        throw new Error(`Producto con id ${id} no encontrado`);
      }

      return productoActualizado;
    } catch (error) {
      console.error(`Error actualizando producto ${id}:`, error);
      throw error;
    }
  };

  deleteOne = async (id) => {
    try {
      const productoEliminado =
        await this.ProductModel.findByIdAndDelete(id);

      if (!productoEliminado) {
        throw new Error(`Producto con id ${id} no encontrado`);
      }

      return productoEliminado;
    } catch (error) {
      console.error(`Error eliminando producto ${id}:`, error);
      throw error;
    }
  };
}
