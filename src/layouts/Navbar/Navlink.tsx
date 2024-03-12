import { NavLink } from "react-router-dom";

interface NavlinkProps {
  to: string;
  name: string;
}

export default function Navlink({ to, name }: NavlinkProps) {
  return (
    <li className="flex items-center space-x-2">
      <NavLink className="font-medium hover:underline" to={to}>
        {name}
      </NavLink>
    </li>
  );
}
