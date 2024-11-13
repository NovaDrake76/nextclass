import React from "react";

const Page = ({ params }: { params: { id: string } }) => {
  const { id } = params;
  return <div>user {id} detail Page</div>;
};

export default Page;
