import { DataTypes } from "sequelize";
import connectDB from "../config/dbTestSequelize.js";

const Categoria = connectDB.define("categoria", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

export default Categoria;