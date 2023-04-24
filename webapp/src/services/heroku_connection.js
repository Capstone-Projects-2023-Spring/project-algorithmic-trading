import { API_ENDPOINT } from "./api-endpoints";

export async function DisplayStockByTicker(ticker) {
    let response = await fetch(`${API_ENDPOINT}/heroku_connection/display_stock_by_ticker/?ticker=${ticker}`, {
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${localStorage.getItem("access_token")}`,
      },
    })
  
    if (!response.ok) {
      return null;
    }
  
    return await response.json();
  }