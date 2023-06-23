import { useState } from 'react';
import CategoryForm from './CategoryForm';
import {AiOutlineEdit, AiOutlineDelete} from 'react-icons/ai'


function CategoryItem({ category, onUpdate, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);

  const handleUpdate = (updatedCategory) => {
    setIsEditing(false);
    onUpdate(updatedCategory);
  };
//   
  return (
    <div className=" w-full flex flex-row justify-between space-x-4 items-center my-4 px-[10%] ">
      {isEditing ? (
        <CategoryForm onSubmit={handleUpdate} initialData={category} />
      ) : (
        <>
          <button onClick={() => onDelete(category)} className="p-2 bg-red-500 flex justify-between items-center w-1/4 text-white rounded">
            حذف
            <AiOutlineDelete/>
          </button>
          <button onClick={() => setIsEditing(true)} className="mr-2 w-1/4 p-2 border flex justify-between items-center   border-blue-300 text-blue-300 rounded">
            ویرایش
            <AiOutlineEdit/>
          </button>
          <span className="mr-14 px-4 flex items-center w-2/4 border-b-2 text-gray-200">{category.name}</span>
        </>
      )}
    </div>
  );
}

export default CategoryItem;
