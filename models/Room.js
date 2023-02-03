module.exports=(sequelize,Datatype)=>{
    const Room = sequelize.define("Room",{
        room_id:{
            type:Datatype.INTEGER,
            allowNull:false,
            autoIncrement: true,
            primaryKey: true
        },
        msg:{
            type:Datatype.STRING,
            allowNull:true,          
        }
    }
    ,{
        timestamps:false
    })
    Room.associate=models =>{
        Room.belongsTo(models.User,{ 
            onDelete:"cascade",
        });
        Room.belongsTo(models.Event,{ 
            onDelete:"cascade"   
        });
        Room.belongsTo(models.Organisateur,{ 
            onDelete:"cascade"   
        })
    }
    
    return Room
}