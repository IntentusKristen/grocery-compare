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
  const [priceMap, setPriceMap] = useState<Map<string, number>>(new Map());

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

        const map: Map<string, number> = new Map();
        list.products.forEach((product) => {
          for (let i = 0; i < 3; i++) {
            map.set(serializeTuple([product.id, i]), 0);
          }
        });
        setPriceMap(map);
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
      if (storeNumber === 1) {
        setStore1(Number(e.target.value));
      } else if (storeNumber === 2) {
        setStore2(Number(e.target.value));
      } else if (storeNumber === 3) {
        setStore3(Number(e.target.value));
      }

      if (listId === -1) return;
      const apiEndpoint = `${baseUrl}/grocery-store-list-price/${listId}/${Number(
        e.target.value
      )}`;
      const response = await fetch(apiEndpoint, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch store prices.");
      }

      const storeList: StoreList = await response.json();
      storeList.groceryItems.forEach((item) => {
        setPriceMap((prevMap) =>
          new Map(prevMap).set(
            serializeTuple([item.productId, storeNumber - 1]),
            item.price
          )
        );
      });
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
                <select onChange={(e) => handleSetStore(e, 1)} value={store1}>
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
                <select onChange={(e) => handleSetStore(e, 2)} value={store2}>
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
                <select onChange={(e) => handleSetStore(e, 3)} value={store3}>
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

// Helper function(s)
const serializeTuple = (tuple: [number, number]): string => {
  return tuple.join(",");
};
