import mongoose from "mongoose";

const schema = mongoose.Schema(
    {
    imgs: {
        type:Array,
        // require:true
    },
    price: {
        type:Number,
        // require:true
    },
    name:{
        type:String,
        // require:true
    },
    type:{
        type:Array,
        // require:true
    },
    description:{
        type:String,
        default:'<p><strong>Căn phòng chất lượng với tầm nhìn ra biển </strong></p><p> Luxury Double Room Suite có kích thước nữ hoàng hoặc giường đôi thoải mái, khu vực tiếp khách, bàn làm việc và phòng tắm riêng biệt với vòi hoa sen nhảy đi bộ hoặc bồn tắm và vòi sen cùng nghệ thuật hiện đại và màu sắc trung tính.</p>'
    }
},{timestamps:true})

export const productModel = mongoose.model('ManaBeach_product',schema)