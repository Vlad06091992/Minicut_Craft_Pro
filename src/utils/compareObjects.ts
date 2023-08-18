import {SearchDataType} from "../../src/store";


export function compareObjects(obj1:any, obj2:any) {


  // Получаем ключи (поля) из объектов
  const keys1 = Object.keys(obj1);
  const keys2= Object.keys(obj2);
  // Перебираем ключи и сравниваем значения
  for (const key of keys1) {

    if (obj1[key] != obj2[key]) {
      return false;
    }
  }
  return true;
}
