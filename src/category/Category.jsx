import { Link } from "react-router-dom";

const Category = () => {
  const category = [
    "Sports",
    "Computer",
    "Algorithm",
    "Cricket",
    "IPL",
    "Competitive Programming",
    "DSA",
    "Leetcode",
  ];
  return (
    <div>
    <div className="bg-[#202020] text-[#f4f4f4] px-5 py-2 flex">
      <ul className="flex mx-auto w-[100vw] overflow-scroll items-center">
        {category.map((data, index) => {
          return (
            <li key={index} className="px-2">
              <Link to={`/videos/${data}`}>{data}</Link>
            </li>
          );
        })}
      </ul>
    </div>
    </div>
  );
};

export default Category;
