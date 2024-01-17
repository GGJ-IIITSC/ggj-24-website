import { useEffect, useState } from "react";
import "./Faq.css";
import "./FaqContainer";
import { FaqContainer } from "./FaqContainer";
import "./FaqItem";
import { FaqItem } from "./FaqItem";
import { baseUrl, faqsEndpoint } from "../../api";

export const Faq = () => {
  const [faqData, setFaqData] = useState([]);

  useEffect(() => {
    // Fetch the JSON file from the internet
    console.log(baseUrl + faqsEndpoint);
    fetch(baseUrl + faqsEndpoint)
      .then((response) => response.json())
      .then((data) => setFaqData(data))
      .catch((error) => console.error("Error fetching FAQ data:", error));
  }, []);

  return (
    <FaqContainer>
      {faqData.map((faqItem) => (
        <FaqItem
          key={faqItem.id}
          question={faqItem.question}
          answer={faqItem.answer}
        />
      ))}
    </FaqContainer>
  );
};
