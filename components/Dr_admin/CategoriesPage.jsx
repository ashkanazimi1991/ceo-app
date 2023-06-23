import { useState } from 'react';
import CategoryForm from './CategoryForm';
import CategoryItem from './CategoryItem';

function CategoriesPage() {
  const [categories, setCategories] = useState([]);

  const handleAddCategory = (category) => {
    setCategories([...categories, category]);
  };

  const handleUpdateCategory = (updatedCategory) => {
    setCategories(categories.map((category) => (category.name === updatedCategory.name ? updatedCategory : category)));
  };

  const handleDeleteCategory = (categoryToDelete) => {
    setCategories(categories.filter((category) => category.name !== categoryToDelete.name));
  };

  return (
    <div>
      
      <CategoryForm onSubmit={handleAddCategory} />
      {categories.map((category) => (
        <CategoryItem 
          key={category.name}
          category={category}
          onUpdate={handleUpdateCategory}
          onDelete={handleDeleteCategory}
        />
      ))}
    </div>
  );
}

export default CategoriesPage;
