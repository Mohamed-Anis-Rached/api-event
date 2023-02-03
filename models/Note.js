module.exports=(sequelize,Datatype)=>{
    const Note = sequelize.define("Note",{
        note_id:{
            type:Datatype.INTEGER,
            allowNull:false,
            autoIncrement: true,
            primaryKey: true
        },
        rate:{
            type:Datatype.INTEGER,
            allowNull:true
        },
        note:{
            type:Datatype.STRING,
            allowNull:true,          
        }
    }
    ,{
        timestamps:false
    })
    Note.associate=models =>{
        Note.belongsTo(models.User,{ 
            onDelete:"cascade",
        })
    },
    Note.associate=models =>{
        Note.belongsTo(models.Event,{ 
            onDelete:"cascade"
            
        })
    }
    return Note
}