
export function getStockList() {
  return fetch('/api/stock/?page=1&page_size=20&order_by=%E4%BB%A3%E7%A0%81&order=asc')
}