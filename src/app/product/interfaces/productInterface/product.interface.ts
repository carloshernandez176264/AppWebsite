import { Id } from "./attributtes/Id.interface";
import { Brand } from "./attributtes/brand.interface";
import { Code } from "./attributtes/code.interface";
import { DateRegistry } from "./attributtes/dateRegistry.interface";
import { Description } from "./attributtes/description.interface";
import { Model } from "./attributtes/model.interface";
import { Name } from "./attributtes/name.interface";
import { Photo } from "./attributtes/photo.interface";
import { Price } from "./attributtes/price.interface";
import { Stock } from "./attributtes/stock.interface";



export interface Product {


  id:Id;
  name:Name;
  price:Price;
  brand: Brand;
  model:Model;
  code:Code;
  description: Description;
  dateRegistry: DateRegistry
  stock:Stock;
  photo:Photo;
  amount: number;
  cantidadSeleccionada: number;



}
