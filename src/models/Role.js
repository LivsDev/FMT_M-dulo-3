const { DataTypes } = require("sequelize")
const {connection} = require("../database/connection")

const User = require("./User") // relacionamento
const UserRole = require("./UserRole")


const Role = connection.define("role", {
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

User.belongsToMany(Role, {through: UserRole}) //relacionamento
Role.belongsToMany(User, {through: UserRole})

module.exports= Role


