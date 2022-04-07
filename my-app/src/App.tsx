import { useEffect, useState } from "react";
import axios from "axios";
import logo from "./logo.svg";
import "./App.css";
import ShowInfo from "./components/Showinfo";
import type { ProductType } from "./types/product";
import { add, list, remove, update } from "./api/product";
import { Navigate, NavLink, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Dashboard from "./pages/Dashboard";
import ManagerProduct from "./pages/product/ManagerProduct";
import WebsiteLayout from "./pages/layouts/WebsiteLayout";
import AdminLayout from "./pages/layouts/AdminLayout";
import AdminProduct from "./pages/layouts/AdminProduct"
import Contact from "./pages/Contact"

import "bootstrap/dist/css/bootstrap.min.css";
import ProductAdd from "./pages/product/ProductAdd";
import ProductEdit from "./pages/product/ProductEdit"
import PivateRoute from "./components/PrivateRoute"
import Signup from "./pages/Signup";
import Signin from "./pages/Signin"
import Blog from "./pages/Blog";
import { CategoryType } from "./types/category";
import AdminCategory from "./pages/layouts/AdminCategory";
import ManagerCategory from "./pages/category/ManagerCategory";
import CategoryAdd from "./pages/category/CategoryAdd";
import CategoryEdit from "./pages/category/CategoryEdit";
import { addC, deleteCategory, listCategory, updateC } from "./api/category";
import Cart from "./pages/cart";
function App() {
  const [products, setProducts] = useState<ProductType[]>([]); // 1
  // const [count, setCount] = useState<number>(0);
  const [category, setCategory] = useState<CategoryType[]>([]);
  useEffect(() => {
    // 3
    const getProducts = async () => {
      const { data } = await list();
      setProducts(data);
    };
    getProducts();
  }, []);

  useEffect(() => {
    // 3
    const getCategory = async () => {
      const { data } = await listCategory();
      setCategory(data);
    };
    getCategory();
  }, []);

  const onHandleRemove = async (_id: string) => {
    // xoa tren API
    await remove(_id);
    // reRender
    setProducts(products.filter((item) => item._id !== _id));
  };
  const onHandleAdd = async (product: ProductType) => {
    // call api
    const { data} = await add(product);
    setProducts([...products, data])
  }
  const onHandleUpdate = async (product:ProductType) => {
    // console.log(product);
    await update(product)
}



const onHandleDelete = async (_id: string) => {
  // xoa tren APy
  await deleteCategory(_id);
  // reRender
  setCategory(category.filter((item) => item._id !== _id));
};
const onHandleAddC = async (category: CategoryType) => {
  // call api
  const { data} = await addC(category);
  setCategory([...category, data])
}
const onHandleUpdateC = async (category:CategoryType) => {
  // console.log(product);
  await updateC(category)
}
  return (
    <Routes>
      <Route path="/" element={<WebsiteLayout />}>
        <Route index element={<Home data={products}/>} />
        <Route path="product" element={<Product data={products} />} />
        <Route path="contact" element={<Contact />} />
        <Route path="blog" element={<Blog />} />
        <Route path="cart" element={<Cart />} />
        <Route path="signup" element={<Signup/>}/>
        <Route path="signin" element={<Signin />}/>
      </Route>
      <Route path="admin" element={<PivateRoute><AdminLayout /></PivateRoute>}>
        <Route index element={<Navigate to="dashboard" />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="product"  element={<PivateRoute><AdminProduct/></PivateRoute>}>
          <Route index element={<ManagerProduct data={products} onRemove={onHandleRemove}/>}/>
          <Route path="add" element={<ProductAdd onAdd={onHandleAdd}/>} />
          <Route path=":id/edit" element={<ProductEdit onUpdate={onHandleUpdate}/>} />
        </Route>
        <Route path="category"  element={<PivateRoute><AdminCategory/></PivateRoute>}>
          <Route index element={<ManagerCategory data={category} onDelete={onHandleDelete}/>}/>
          <Route path="add" element={<CategoryAdd onAddC={onHandleAddC}/>} />
          <Route path=":id/edit" element={<CategoryEdit onUpdateC={onHandleUpdateC} />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
//B1: npm i react-router-dom
//B2: sử dụng component <BrowserRouter> để wrapper <App /> trong file main.tsx
//B3: Khai báo và sử dụng <Routes> trong app
//B4: Khai báo sử dụng <Route> để định nghĩa các đường đẫn
