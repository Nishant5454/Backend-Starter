const express=require('express'); 
const app=express(); 
app.use(express.json());  //-> Midlleware
app.listen(3000);
let user=[ 
    {
        'id':3,
        'Name':"Nishant"
    },
    {
        'id':4, 
        'Name':"SS008"
    },
    {
        'id':7,
        'Name':"Nawaz"
    }
]; 
//app.get('/user')
//app.get('/user',(req,res)=>{

//}); 
//app.post('/user',(req,res)=>{

//});
//app.patch('/user',(req,res)=>{

//}); 
//app.get('/user/:id',(req,res)=>{

//}); 
const userouter=express.Router(); 
app.use('/',userouter); 

userouter
.route('/') 
.get(getUser)
.post(postUser)
.delete(DeleteUser);
userouter.route("/:id").get(getUserbyId);




function getUser(req,res){
    res.send(user);

};
function postUser(req,res){ 
    console.log(req.body); 
    user=req.body; 
    res.json({
        message:"Data Recived Succesfully", 
        user:req.body
    });

};

function updateUser(req,res){
    console.log('req.body->',req.body);
    let dataupdated=req.body; 
    for(key in dataupdated){
        user[key]=dataupdated[key];
    }
    res.json({
        message:"data Recived SucessFully"
    })
}; 
function DeleteUser(req,res){
    user={}; 
    res.json({
        message:"Data Deleted Sucsessfuly"
    })
}; 
function getUserbyId(req,res){
    console.log(req.params.id); 
    let paramsId=req.params.id; 
    let obj={}; 
    for(let i=0;i<user.length;i++){
        if(user[i]['id']==paramId){
            obj=user[i];
        }
    }
    req.json({
        message:"req Recived Sucsessfully", 
        data:obj
    });

}
