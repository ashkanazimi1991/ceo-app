import { useState } from 'react';

function CategoryForm({ onSubmit, initialData = {} }) {
  const [name, setName] = useState(initialData.name || '');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name });
    setName('');
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col w-full px-4">
      <label className="mb-2 text-right text-gray-500 whitespace-nowrap "> نام دسته بندی را وارد کنید</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="mb-4 p-2 border w-full border-gray-300 rounded"
        style={{direction:'rtl'}}
      />
      <button type="submit" className="p-2 whitespace-nowrap w-full bg-blue-500 text-white rounded">
        ثبت دسته بندی
      </button>
    </form>
  );
}

export default CategoryForm;
