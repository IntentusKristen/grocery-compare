import React, { FunctionComponent } from "react";
import { useAuth } from "../../hooks/useAuth";
import { jwtDecode } from "jwt-decode";

type GroceryListItem = {
  product_id: number;
  name: string;
  price: number;
  store: string;
  quantity: number;
};

type ListProps = {
  listId: number;
};

const List: FunctionComponent<ListProps> = ({ listId }) => {
  const { token } = useAuth();
  const userId = jwtDecode(token ? token : "").iss;
  const baseUrl = process.env.REACT_APP_BASE_URL;

  // const [groceryList, setGroceryList] = useState<

  return <></>;
};

// Use the List component
export default List;
