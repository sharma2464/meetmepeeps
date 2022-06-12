import { Link } from "react-router-dom";

export default function Header(props) {
  return (
    <>
      Header
      <Link to="/">home</Link>
      <Link to="/signin">signin</Link>
    </>
  );
}
