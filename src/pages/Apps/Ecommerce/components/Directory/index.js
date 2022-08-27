import Category from "../Category";
import './styles.css';

const Directory = ({ categories }) => {
  return (
    <div className="directory-container">
      {categories.map((category) => (
        <Category category={category} key={category.id} />
      ))}
    </div>
  );
};

export default Directory;
