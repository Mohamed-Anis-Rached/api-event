module.exports=(sequelize,Datatype)=>{
    const User = sequelize.define("User",{
        user_id:{
            type:Datatype.INTEGER,
            allowNull:false,
            autoIncrement: true,
            primaryKey: true
        },
        nom:{
            type:Datatype.STRING,
            allowNull:true,
            validate: {
              len:[1,50]
            }           
        },
        prenom:{
            type:Datatype.STRING,
            allowNull:true,
            validate: {
              len:[1,50]
            }           
        },
        photo:{
            type:Datatype.STRING,
            allowNull:true

        },
        phone:{
            type:Datatype.STRING,
            allowNull:true,
            validate: {
              len:[1,30]
            }           
        },
        email:{
            type:Datatype.STRING,
            allowNull:true,  
        },
        pwd:{
            type:Datatype.STRING,
            allowNull:true,          
        },
        facebook:{
            type:Datatype.STRING,
            allowNull:true,           
        },
        instagram:{
            type:Datatype.STRING,
            allowNull:true,          
        },
        linkedin:{
            type:Datatype.STRING,
            allowNull:true,         
        },
        google:{
            type:Datatype.STRING,
            allowNull:true,          
        },
        twitter:{
            type:Datatype.STRING,
            allowNull:true,          
        },
        discord:{
            type:Datatype.STRING,
            allowNull:true,          
        },
        reddit:{
            type:Datatype.STRING,
            allowNull:true,        
        },
        rne:{
            type:Datatype.STRING,
            allowNull:true         
        },
    }
    ,{
        timestamps:false
    })
    User.associate=function(models){
        User.hasMany(models.Event,{
            onDelete:"cascade",
        });
        User.hasMany(models.Ticket,{
            onDelete:"cascade"
        });
        User.hasMany(models.Note,{
            onDelete:"cascade"
        });
        User.hasMany(models.Organisateur,{
            onDelete:"cascade"
        });
        User.hasMany(models.Room,{
            onDelete:"cascade"
        })
    }
   /* User.associate=models =>{
        User.hasMany(models.Ticket,{
            onDelete:"cascade"
        });
    }
    User.associate=models =>{
        User.hasMany(models.Note,{
            onDelete:"cascade"
        })
    }
    User.associate=models =>{
        User.hasMany(models.Organisateur,{
            onDelete:"cascade"
        })
    }
    User.associate=models =>{
        User.hasMany(models.Room,{
            onDelete:"cascade"
        })
    }*/
    return User
}