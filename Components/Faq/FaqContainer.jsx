import "./Faq.css";

export const FaqContainer = ({ children }) => {
  return (
    <div className="my-16">
      <div className="flex justify-center">
        <div className="space-y-4 max-w-4xl rounded-lg py-4 w-full FaqContainer shadow-2xl">
          {children}
        </div>
      </div>
    </div>
  );
};
