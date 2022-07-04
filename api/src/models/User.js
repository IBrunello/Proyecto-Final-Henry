const {DataTypes} = require('sequelize')

module.exports = (sequelize) =>{
    sequelize.define('user',{
        id:{
            primaryKey:true,
            type:DataTypes.UUID,
            defaultValue:DataTypes.UUIDV4,
            allowNull:false
        },
        username:{
            type:DataTypes.CHAR(20),
            allowNull:false
        },
        password:{
            type:DataTypes.CHAR(20),
            allowNull:false
        },
        role:{
            type:DataTypes.INTEGER,
            allowNull:false
        },
        sale:{
            foreignKey:true,
            type:DataTypes.INTEGER,
            allowNull:false
        }
    },{timestamps:false})
}