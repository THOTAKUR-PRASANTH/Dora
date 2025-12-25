function registerUser(data: any) {
  return fetch('/api/listofusres', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
}