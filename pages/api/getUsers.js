import axios from "axios"

export default async function(req,res){
    const {data}=await axios.get("https://hub.dummyapis.com/employee");
    res.status(200).json({
        users:data
    });
}