import "./Faq.css";

export const FaqContainer = ({ children }) => {
  return (
    <div className="my-16">
      <div className="flex justify-center py-4">
        <div className="space-y-4 md:max-w-4xl rounded-lg py-4 w-full FaqContainer shadow-2xl max-w-screen-sm mx-4 mr-4">
          {children}
        </div>
      </div>
    </div>
  );
};
