Good question 👍 I’ll explain **small simple steps** for doing validation using **React Hook Form + Zod**.

---

# Small Steps for Form Validation

## 1️⃣ Install libraries

First install required packages.

```bash
npm install react-hook-form zod @hookform/resolvers
```

---

# 2️⃣ Import libraries

In your component file:

```ts
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
```

---

# 3️⃣ Create validation schema

Define validation rules using Zod.

```ts
const schema = z.object({
  name: z.string().min(3, "Name must be 3 characters"),
  email: z.string().email("Invalid email")
})
```

---

# 4️⃣ Create TypeScript type

Generate type from schema.

```ts
type FormData = z.infer<typeof schema>
```

---

# 5️⃣ Setup useForm

Connect schema with React Hook Form.

```ts
const { register, handleSubmit, formState:{errors} } =
useForm<FormData>({
  resolver: zodResolver(schema)
})
```

---

# 6️⃣ Register input fields

```tsx
<input {...register("name")} />
<input {...register("email")} />
```

---

# 7️⃣ Show validation errors

```tsx
<p>{errors.name?.message}</p>
<p>{errors.email?.message}</p>
```

---

# 8️⃣ Handle form submit

```ts
const onSubmit = (data: FormData) => {
  console.log(data)
}
```

```tsx
<form onSubmit={handleSubmit(onSubmit)}>
```

---

✅ **Simple flow**

```
Install libraries
↓
Create Zod schema
↓
Connect schema to useForm
↓
Register inputs
↓
Show errors
↓
Submit form
```


``` javascript
// Real Life example 

import React from "react";
import "./App.css";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

/* Zod Schema with many validation types */
const schema = z
  .object({
    name: z
      .string()
      .min(2, "Name must be at least 2 characters")
      .max(20, "Name cannot exceed 20 characters"),

    email: z.string().email("Invalid email address"),

    password: z
      .string()
      .min(6, "Password must be at least 6 characters")
      .regex(/[A-Z]/, "Must contain one uppercase letter")
      .regex(/[0-9]/, "Must contain one number"),

    confirmPassword: z.string(),

    age: z
      .number({ invalid_type_error: "Age must be a number" })
      .min(18, "You must be at least 18"),

    phone: z
      .string()
      .length(10, "Phone must be 10 digits")
      .regex(/^[0-9]+$/, "Only numbers allowed"),

    website: z.string().url("Enter valid URL").optional(),

    gender: z.enum(["male", "female", "other"], {
      errorMap: () => ({ message: "Please select a gender" }),
    }),

    terms: z.boolean().refine((val) => val === true, {
      message: "You must accept terms",
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

type FormData = z.infer<typeof schema>;

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    console.log("Form Data:", data);
  };

  return (
    <div className="container mx-auto p-6 h-screen flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold mb-6">Advanced Form Validation</h1>

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3 w-80">

        <input {...register("name")} placeholder="Name" className="border p-2"/>
        {errors.name && <p className="text-red-500">{errors.name.message}</p>}

        <input {...register("email")} placeholder="Email" className="border p-2"/>
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}

        <input type="password" {...register("password")} placeholder="Password" className="border p-2"/>
        {errors.password && <p className="text-red-500">{errors.password.message}</p>}

        <input type="password" {...register("confirmPassword")} placeholder="Confirm Password" className="border p-2"/>
        {errors.confirmPassword && <p className="text-red-500">{errors.confirmPassword.message}</p>}

        <input
          type="number"
          {...register("age", { valueAsNumber: true })}
          placeholder="Age"
          className="border p-2"
        />
        {errors.age && <p className="text-red-500">{errors.age.message}</p>}

        <input {...register("phone")} placeholder="Phone Number" className="border p-2"/>
        {errors.phone && <p className="text-red-500">{errors.phone.message}</p>}

        <input {...register("website")} placeholder="Website (optional)" className="border p-2"/>
        {errors.website && <p className="text-red-500">{errors.website.message}</p>}

        <select {...register("gender")} className="border p-2">
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
        {errors.gender && <p className="text-red-500">{errors.gender.message}</p>}

        <label className="flex gap-2 items-center">
          <input type="checkbox" {...register("terms")} />
          Accept Terms
        </label>
        {errors.terms && <p className="text-red-500">{errors.terms.message}</p>}

        <button className="bg-blue-500 text-white p-2 rounded">
          Submit
        </button>

      </form>
    </div>
  );
}

export default App;

```