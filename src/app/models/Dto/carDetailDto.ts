import { CarImage } from "../carImage";


export interface CarDetailDto{
    carId:number
    colorId:number
    brandId:number
    carName:string
    brandName:string
    colorName:string
    dailyPrice:number
    imagePath:string
    carImages:CarImage[]
}