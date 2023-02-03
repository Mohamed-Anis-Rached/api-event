module.exports=(sequelize,Datatype)=>{
    const Interet = sequelize.define("Interet",{
        interet_id:{
            type:Datatype.INTEGER,
            allowNull:false,
            autoIncrement: true,
            primaryKey: true
        },
        nom:{
            type:Datatype.STRING,
            allowNull:true,
            validate: {
              len:[1,30]
            }           
        },photo:{
            type:Datatype.STRING,
            allowNull:true

        }
    }
    ,{
        timestamps:false
    })
    return Interet
}