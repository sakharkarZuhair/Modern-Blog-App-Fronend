import React, { useContext } from "react";
import Link from "next/link";

const categories = [
  { name: "React", slug: "react" },
  { name: "Web Development", slug: "web-dev" },
];

const Header = () => {
  return (
    <div className="container mx-auto px-10 mb-8 bg-[#000]">
      <div className=" border-b w-full inline-block border-black py-8">
        <div className="md:float-left block">
          <Link href={"/"}>
            <span className="cursor-pointer font-bold text-4xl text-[#f76236]">
              Graph <span className="text-white">CMS</span>
            </span>
          </Link>
        </div>
        <div className="hidden md:float-left md:contents">
          {categories.map((category, index) => {
            return (
              <>
                <Link key={category.slug} href={`/category/${category.slug}`}>
                  <span className="md:float-right mt-2 align-middle text-[#f76236] ,l-4 font-semibold cursor-pointer">
                    {category.name}
                  </span>
                </Link>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Header;
