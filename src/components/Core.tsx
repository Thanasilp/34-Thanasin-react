import { Link } from "react-router-dom";
interface CoreProps {
  header: string;
}

export const Core = ({ header }: CoreProps) => {
  return (
    <div>
      <h1>{header}</h1>
      <div>
        <Link to={"/user"}>
          <button type="button">user</button>
        </Link>
        <Link to={"/admin"}>
          <button type="button">admin</button>
        </Link>
      </div>
    </div>
  );
};
