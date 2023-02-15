

const getAllProductsStatic=async(req,res)=>{
    
    await res.status(200).json({msg:'products static route test'})
}
const getAllProducts=async(req,res)=>{
    await res.status(200).json({msg:'products route'})
}
module.exports={
    getAllProducts,getAllProductsStatic
}