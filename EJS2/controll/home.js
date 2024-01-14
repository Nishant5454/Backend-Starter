const home=(req,res)=>{ 
    const data={
        'id':256 ,
        
    }
    res.render('index',data)
} 
export{home}