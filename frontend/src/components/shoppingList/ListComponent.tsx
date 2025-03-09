import React, {
  ChangeEvent,
  FunctionComponent,
  useEffect,
  useState,
} from "react";
import { useAuth } from "../../hooks/useAuth";
import { jwtDecode } from "jwt-decode";
import "../../style/ListComponent.css";

type ListProps = {
  listId: number;
};

type Store = {
  id: number;
  name: string;
};

type Product = {
  id: number;
  name: string;
};

type List = {
  name: string;
  products: Product[];
};

type Item = {
  productId: number;
  quantity: number;
  price: number;
};

type StoreList = {
  listId: number;
  storeId: number;
  groceryItems: Item[];
};

const ListComponent: FunctionComponent<ListProps> = ({ listId }) => {
  const { token } = useAuth();
  const userId = jwtDecode(token ? token : "").iss;
  const baseUrl = process.env.REACT_APP_BASE_URL;

  const [stores, setStores] = useState<Store[]>([]);

  const [list, setList] = useState<List | null>(null);

  const [store1, setStore1] = useState<number>(-1);
  const [store2, setStore2] = useState<number>(-1);
  const [store3, setStore3] = useState<number>(-1);
  const [storeList1, setStoreList1] = useState<StoreList | null>(null);
  const [storeList2, setStoreList2] = useState<StoreList | null>(null);
  const [storeList3, setStoreList3] = useState<StoreList | null>(null);

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

    const fetchStores = async () => {
      try {
        const response = await fetch(`${baseUrl}/grocery-stores`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch stores.");
        }

        const stores: Store[] = await response.json();
        setStores(stores);
      } catch (error) {
        console.error("Error fetching stores:", error);
        alert("Could not fetch stores.");
      }
    };

    if (listId !== -1) {
      fetchList();
    }
    fetchStores();
  }, [token, userId, baseUrl, listId]);

  const handleSetStore = async (
    e: ChangeEvent<HTMLSelectElement>,
    storeNumber: number
  ) => {
    try {
      const response = await fetch(
        `${baseUrl}/grocery-store-list-price/${listId}/${store1}`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to fetch store prices.");
      }

      const storeList: StoreList = await response.json();
      setStoreList1(storeList);

      const response2 = await fetch(
        `${baseUrl}/grocery-store-list-price/${listId}/${store2}`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!response2.ok) {
        throw new Error("Failed to fetch store prices.");
      }

      const storeList2: StoreList = await response2.json();
      setStoreList2(storeList2);

      const response3 = await fetch(
        `${baseUrl}/grocery-store-list-price/${listId}/${store3}`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!response3.ok) {
        throw new Error("Failed to fetch store prices.");
      }

      const storeList3: StoreList = await response3.json();
      setStoreList3(storeList3);
    } catch (error) {
      console.error("Error fetching store prices:", error);
      alert("Could not fetch store prices.");
    }
  };

  return (
    <>
      <div className="list-container">
        <h2>List One</h2>
        <table className="list-table">
          <thead>
            <tr>
              <th>Item</th>
              <th>Quantity</th>
              <th>
                Store 1
                <select>
                  <option value="-1">Select Store</option>
                  {stores.map((store) => (
                    <option key={store.id} value={store.id}>
                      {store.name}
                    </option>
                  ))}
                </select>
              </th>
              <th>
                Store 2
                <select>
                  <option value="-1">Select Store</option>
                  {stores.map((store) => (
                    <option key={store.id} value={store.id}>
                      {store.name}
                    </option>
                  ))}
                </select>
              </th>
              <th>
                Store 3
                <select>
                  <option value="-1">Select Store</option>
                  {stores.map((store) => (
                    <option key={store.id} value={store.id}>
                      {store.name}
                    </option>
                  ))}
                </select>
              </th>
            </tr>
          </thead>
          <tbody>
            {list?.products.map((product) => (
              <tr key={product.id}>
                <td>{product.name}</td>
                <td>1</td>
                <td>
                  <input type="checkbox" />
                </td>
                <td>
                  <input type="checkbox" />
                </td>
                <td>
                  <input type="checkbox" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

// Use the List component
export default ListComponent;
