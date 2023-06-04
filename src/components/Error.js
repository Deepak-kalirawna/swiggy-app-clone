import { useRouteError } from "react-router";

const Error = () => {
  const err = useRouteError();

  return (
    <div className="mx-[2rem]">
      <h1>Something went wrong!</h1>
      <h2>{`${err.status}:${err.statusText}`}</h2>
    </div>
  );
};

export default Error;
