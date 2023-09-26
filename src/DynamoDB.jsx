import { API, GRAPHQL_AUTH_MODE } from "@aws-amplify/api";
import { useEffect, useState } from "react";

import { createHome } from "../graphql/mutations";
import { listHomes } from "../graphql/queries";

export function DynamoDB() {
  const [homes, setHomes] = useState([]);
  const [address, setAddress] = useState("");
  const [price, setPrice] = useState("");

  useEffect(() => {
    fetchHomes();
  }, []);

  async function fetchHomes() {
    try {
      const response = await API.graphql({
        query: listHomes,
      });
      const HomesData = response.data.listHomes.items;
      setHomes(HomesData);
    } catch (err) {
      console.log("error fetching books...", err);
    }
  }

  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };

  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const HomeDetails = {
        address,
        price,
      };
      const newHome = await API.graphql({
        query: createHome,
        variables: { input: HomeDetails },
        authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
      });
      console.log("投稿しました。", newHome);
      alert("投稿に成功しました。");
      fetchHomes();
    } catch (error) {
      console.error("投稿に失敗しました。", error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          address:
          <input type="text" value={address} onChange={handleAddressChange} />
        </label>
        <br />
        <label>
          price:
          <input
            type="text"
            value={price}
            onChange={handlePriceChange}
          />
        </label>
        <br />
        <button type="submit">Create Post</button>
      </form>
      <ol>
        {homes.map((Home) => (
          <li key={Home.id}>
            <p>
              address={Home.address}, price={Home.price}
            </p>
          </li>
        ))}
      </ol>
    </div>
  );
}
