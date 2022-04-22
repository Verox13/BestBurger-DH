const Usuario = (sequelize, DataTypes) => {
    const Usuario = sequelize.define(
        'Usuario', {
            nome: DataTypes.STRING,
            sobrenome: DataTypes.STRING,
            cpf: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true
            },
            telefone: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true
            },
            email: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true
            },
            genero: DataTypes.STRING,
            data_de_nascimento: {
                type: DataTypes.DATE,
                allowNull: false,
            },
            avata: {
                type: DataTypes.STRING,
                allowNull: true,
            },
        }, {
            tableName: "usuario",
            timestamps: false
        }
    )
    return Usuario
}

module.exports = Usuario