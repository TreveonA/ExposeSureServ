module.exports = function(sequelize, DataTypes){
    return sequelize.define('adlogreadonly',{

        location: DataTypes.STRING,
        size: DataTypes.STRING,
        duration: DataTypes.STRING,
        contact: DataTypes.STRING,
        cost: DataTypes.STRING,
        owner: DataTypes.INTEGER
    })
}
