const { DataTypes } = require("sequelize")
const {connection} = require("../database/connection")
const Role = require("./Role") //relacionamento
const PermissionRole = require("./PermissionRole") //relacionamento

const Permission = connection.define("permission", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },

    description: {
        type: DataTypes.STRING,
        unique: true
    },
    createdAt: {
        type: DataTypes.DATE,
        defaultValue: Date.now()
    },
    updatedAt: {
         type: DataTypes.DATE
}
})

Role.belongsToMany(Permission,  {through: PermissionRole}) //relacionamento
Permission.belongsToMany(Role, {through: PermissionRole})

module.exports= Permission
