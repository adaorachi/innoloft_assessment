import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Title } from "components";
import { truncate } from "utils";

const productList = [
  {
    id: 1,
    productId: "6781",
    title: "Leveraging AI for Enhanced Customer Engagement",
    content:
      "Discover how AI-powered solutions can revolutionize customer engagement strategies, enabling B2B tech companies to achieve unprecedented business growth and customer satisfaction.",
  },
  {
    id: 2,
    productId: "6781",
    title: "The Role of Blockchain Technology",
    content:
      "Explore the transformative potential of blockchain technology in optimizing supply chain operations, ensuring transparency, traceability, and efficiency for B2B tech ecosystem stakeholders.",
  },
  {
    id: 3,
    productId: "6781",
    title: "Safeguarding B2B Data in the Digital Era",
    content:
      "Learn about the latest advancements in cybersecurity, including AI-driven threat detection and proactive defense mechanisms, to protect sensitive data and fortify the B2B tech ecosystem against cyber threats.",
  },
  {
    id: 4,
    productId: "6781",
    title: "Empowering Remote Teams with Cloud-Based Solutions",
    content:
      "Dive into the world of cloud-based collaboration tools that enable seamless remote teamwork, fostering productivity, innovation, and effective communication within the B2B tech ecosystem.",
  },
];

const imageUrl =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIs1HjhdbKyBv89vkUwkMoWO7ZqmBpKpsYiA&usqp=CAU";

export default function Dashboard() {
  const navigate = useNavigate();
  return (
    <div className="m-6">
      <Title title="Products Page" />
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
        {productList.map((item) => (
          <div className="col-span-1" key={item.id}>
            <div className="bg-gray-100 shadow-sm rounded overflow-hidden text-left hover:bg-gray-200 duration-200 ease-in">
              <div className="w-full h-[150px] md:h-[120px]">
                <img
                  src={imageUrl}
                  alt="cover"
                  className="object-fit h-full w-full"
                />
              </div>
              <div className="p-3">
                <div className="mb-4">
                  <h2 className="text-gray-800 mb-2">{item.title}</h2>
                  <div className="text-sm text-gray-500">
                    {truncate(item.content, 100)}
                  </div>
                </div>
                <div className="text-right">
                  <Button
                    label="View product"
                    onClick={() => navigate(`/product/${item.productId}`)}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
