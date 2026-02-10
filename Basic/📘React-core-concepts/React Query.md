# 📌 React Query (TanStack Query) – Hinglish Interview Notes

---

## 🔹 React Query kya hai?

**React Query** ek **server-state management library** hai  
jo React apps me **API data fetch, cache, sync aur update** karna easy banata hai.

👉 Simple words:
> React Query API data ko automatically manage karta hai  
> bina Redux ya extra boilerplate ke.

---

## 🔹 React Query kyun use karte hain?

- API data caching
- Automatic refetching
- Loading & error handling
- Background updates
- Less code, better performance

---

## 🔹 Client State vs Server State (Interview Important)

| Type | Example |
|----|-------|
| Client State | Modal open, theme |
| Server State | API data, users list |

👉 React Query **server state** handle karta hai

---

## 🔹 React Query install

```bash
npm install @tanstack/react-query
````

---

## 🔹 QueryClient setup (Mandatory)

```jsx
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Main />
    </QueryClientProvider>
  );
}
```

---

## 🔹 Data fetch using `useQuery`

```jsx
import { useQuery } from "@tanstack/react-query";

const fetchUsers = async () => {
  const res = await fetch("/api/users");
  return res.json();
};

function Users() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;

  return (
    <ul>
      {data.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}
```

---

## 🔹 React Query automatically kya karta hai?

✅ Cache data
✅ Duplicate requests avoid
✅ Refetch on window focus
✅ Background updates
✅ Retry on failure

---

## 🔹 Query Keys (Very Important)

```js
queryKey: ["users", userId]
```

👉 Query key unique honi chahiye
👉 Cache isi key se identify hota hai

---

## 🔹 `useMutation` (POST / PUT / DELETE)

```jsx
import { useMutation, useQueryClient } from "@tanstack/react-query";

const addUser = async (user) => {
  return fetch("/api/users", {
    method: "POST",
    body: JSON.stringify(user),
  });
};

function AddUser() {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: addUser,
    onSuccess: () => {
      queryClient.invalidateQueries(["users"]);
    },
  });

  return (
    <button onClick={() => mutation.mutate({ name: "Rahul" })}>
      Add User
    </button>
  );
}
```

👉 `invalidateQueries` → data auto refetch

---

## 🔹 React Query vs Redux (Interview Favourite)

| Feature        | React Query  | Redux        |
| -------------- | ------------ | ------------ |
| Use for        | Server state | Client state |
| Boilerplate    | Very less    | More         |
| Caching        | Built-in     | Manual       |
| Async handling | Automatic    | Manual       |
| Best for       | API data     | UI state     |

---

## 🔹 React Query vs Redux Toolkit Query (RTK Query)

* React Query → framework independent
* RTK Query → Redux ecosystem

---

## 🔹 Common Options (Interview Tips)

```js
useQuery({
  staleTime: 5000,
  cacheTime: 10000,
  retry: 2,
  refetchOnWindowFocus: false
});
```

---

## 🔹 Advantages

* Less code
* Better performance
* Automatic caching
* Easy error handling

---

## ⚠️ Limitations

* Not for UI state
* Learning curve thoda hai
* SSR setup extra

---

## 🧠 One-Line Summary

> React Query ek powerful library hai jo React apps me server state ko efficiently fetch, cache aur sync karta hai.

---

## ✅ Interview Answer (Short & Perfect)

> React Query ek server-state management library hai jo API data fetching, caching, background refetching aur error handling ko easy bana deti hai bina Redux ke heavy boilerplate ke.

---

## 🔥 Interview Tip

👉 "Server State" term use karna
👉 Cache & background refetch mention karna
👉 Redux se compare karna
