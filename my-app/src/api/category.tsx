import { CategoryType } from "../types/category";
import instance from "./instance";
export const listCategory = () => {
  const url = '/category';
  return instance.get(url);
};
export const deleteCategory = (_id: string) => {
  const url = `/category/${_id}`;
  return instance.delete(url);
};
export const addC = (category: CategoryType) => {
  const url = `/category`;
  return instance.post(url, category);
};
export const updateC = (category: CategoryType) => {
    const url = `/category/${category._id}`;
    return instance.put(url, category);
}
export const readC = (id:string | undefined) => {
  const url = `/category/${id}`;
  return instance.get(url);
}