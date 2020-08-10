//return actual date
export const getActualDate = () => {
  const date = new Date();
  return date.toISOString().split('T')[0];
};

export const confirmAndPay = (id, payload, cb) => {
  const url = `https://mc-api-pi.vercel.app/api/listings/${id}/confirm-reservation`;
  const body = JSON.stringify(payload);
  const headers = { 'Content-Type': 'application/json' };

  fetch(url, {
    method: 'POST',
    body,
    headers,
  })
    .then((res) => res.json())
    .then((res) => cb(res.message))
    .catch((e) => console.log(e));
};
