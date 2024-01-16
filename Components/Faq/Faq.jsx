import { useEffect, useState } from "react";
import "./Faq.css";
import "./FaqContainer";
import { FaqContainer } from "./FaqContainer";
import "./FaqItem";
import { FaqItem } from "./FaqItem";

export const Faq = () => {
  const [faqData, setFaqData] = useState([]);

  useEffect(() => {
    // Fetch the JSON file from the internet
    fetch(
      "https://gist.githubusercontent.com/aahnik/e2ecd24ba81742beff177a0c6950a7c9/raw/f707db2ed8912e7bb6413f023d47b1aedbd6677c/ggj-24-faq.json"
    )
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
