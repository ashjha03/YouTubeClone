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
    "Striver",
    "Take U Forward"
  ];
  return (
    <div>
    <div className="bg-[#08081A] text-[#f4f4f4] px-2 lg:px-5 lg:py-2 flex">
      <ul className="flex mx-auto w-[100vw] overflow-scroll items-center">
        {category.map((data, index) => {
          return (
            <li key={index} className="pr-3">
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
