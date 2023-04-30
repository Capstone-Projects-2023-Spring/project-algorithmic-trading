import { API_ENDPOINT } from "./api-endpoints";

export async function setAndGetInvestment(value) {
  let save_investment_url = `${API_ENDPOINT}/tradester/save_investment/`;
  if (value !== undefined && typeof value === 'number')
    save_investment_url += `?amount=${value}`
  let response = await fetch(save_investment_url, {
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${localStorage.getItem("access_token")}`,
    },
  })
  return await response.json();
}

export async function getInvestment() {
  return await setAndGetInvestment();
}