module.exports=(sequelize,Datatype)=>{
    const Event = sequelize.define("Event",{
        event_id:{
            type:Datatype.INTEGER,
            allowNull:false,
            autoIncrement: true,
            primaryKey: true
        },
        libelle:{
            type:Datatype.STRING,
            allowNull:true,
            validate: {
              len:[0,50]
            }           
        },
        lattitude:{
            type:Datatype.FLOAT,
            allowNull:true

        },
        longitude:{
            type:Datatype.FLOAT,
            allowNull:true
        },
        photo:{
            type:Datatype.STRING,
            allowNull:true

        },
        prix:{
            type:Datatype.INTEGER,
            allowNull:true
        },
        date_debut:{
            type:Datatype.DATEONLY,
            allowNull:true,
            validate: {
                isDate:true
              } 
        },
        date_fin:{
            type:Datatype.DATEONLY,
            allowNull:true,
            validate: {
                isDate:true
              } 
        },
        date_inscri:{
            type:Datatype.DATEONLY,
            allowNull:true,
            validate: {
                isDate:true
              } 
        },
        date_cloture:{
            type:Datatype.DATEONLY,
            allowNull:true,
            validate: {
                isDate:true
              } 
        },
        heure_debut:{
            type:Datatype.TIME,
            allowNull:true
        },
        heure_fin:{
            type:Datatype.TIME,
            allowNull:true
        },
        heure_inscri:{
            type:Datatype.TIME,
            allowNull:true
        },
        heure_cloture:{
            type:Datatype.TIME,
            allowNull:true
        },
        statut:{
            type:Datatype.STRING,
            allowNull:true
        },
        nb_places:{
            type:Datatype.INTEGER,
            allowNull:true
        },
        qr_code:{
            type:Datatype.STRING,
            allowNull:true
        }      
    }
    ,{
        timestamps:false
    })
   
    Event.associate=models =>{
        Event.belongsTo(models.Organisateur,{
            onDelete:"cascade"
        })
    },
    Event.associate = models =>{
        Event.belongsTo(models.User,{ 
            onDelete:"cascade"
        })
    }
    Event.associate = models =>{
        Event.hasMany(models.Ticket,{
            onDelete:"cascade"
        })
    }
    Event.associate=models =>{
        Event.hasMany(models.Note,{
            onDelete:"cascade"
        })
    }
    Event.associate=models =>{
        Event.hasMany(models.Gallery,{
            onDelete:"cascade",
            
        })
    }
    Event.associate=models =>{
        Event.hasMany(models.Room,{
            onDelete:"cascade",
            
        })
    }
    return Event
}