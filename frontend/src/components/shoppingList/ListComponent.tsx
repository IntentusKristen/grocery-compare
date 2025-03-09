import React, { FunctionComponent, useEffect, useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import { jwtDecode } from "jwt-decode";
import "../../style/ListComponent.css";

type Product = {
  product_id: number;
  name: string;
};

type List = {
  name: string;
  products: Product[];
};

type ListProps = {
  listId: number;
};

const ListComponent: FunctionComponent<ListProps> = ({ listId }) => {
  const { token } = useAuth();
  const userId = jwtDecode(token ? token : "").iss;
  const baseUrl = process.env.REACT_APP_BASE_URL;

  const [list, setList] = useState<List | null>(null);

  useEffect(() => {
    const fetchList = async () => {
      try {
        const response = await fetch(`${baseUrl}/products-in-list/${listId}`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch list.");
        }

        const list: List = await response.json();
        setList(list);
      } catch (error) {
        console.error("Error fetching list:", error);
        alert("Could not fetch list.");
      }
    };
    if (listId !== -1) fetchList();
  }, [token, userId, baseUrl, listId]);

  return (
    <>
      <div className="list-container">
        <h2>List One</h2>
      </div>
    </>
  );
};

// Use the List component
export default ListComponent;
