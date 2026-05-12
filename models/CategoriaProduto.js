import { DataTypes } from "sequelize";
import connectDB from "../config/dbTestSequelize.js";

const CategoriaProduto = connectDB.define("categoriaProduto", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    }
});

export default CategoriaProduto;