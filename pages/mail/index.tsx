import React from "react";

const Mail: React.FC = ({}) => {
  type MailedInferenceUtilityType<T, Y, B> = {
    name: T;
    status: Y;
    body: B;
  };
  const MailedInferenceData = [{ name: "Nothing", status: 400 }];
  return (
    <main>
      <div></div>
    </main>
  );
};

export default Mail;
