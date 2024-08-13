const { Sequelize, DataTypes } = require("sequelize");

module.exports = (Sequelize, DataTypes)=>{
    return Sequelize.define('Usuario', {
        cedula: {
            type: DataTypes.STRING,
            primaryKey: true,
            allowNull: false,
            unique: 'cedula'
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: 'email'
        },
        nombre: {
            Type: DataTypes.STRING,
            allowNull: false
        },
        edad: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    
    },{
        tableName: 'usuario',
        timestamps: true
    });
};