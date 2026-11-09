
import { useState, useEffect } from "react";

const App = () => {

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    username: ""
  });

  const [users, setUsers] = useState([]);

  const [error, setError] = useState("");

  useEffect(() => {

    const fetchUsers = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );

        const data = await response.json();

        setUsers(data);
      } catch (err) {
        setError("Failed to fetch users");
      }
    };

    fetchUsers();

  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm({
      ...form,
      [name]: value
    });
  };

  const handleSubmit = async (event) => {

    event.preventDefault();

    if (
      !form.name.trim() ||
      !form.email.trim() ||
      !form.phone.trim() ||
      !form.username.trim()
    ) {
      setError("All fields are required");
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(form.email)) {
      setError("Enter a valid email address");
      return;
    }

    const phoneDigits = form.phone.replace(/\D/g, "");

    if (phoneDigits.length < 10 || phoneDigits.length > 15) {
      setError("Enter a valid phone number");
      return;
    }

    setError("");

    try {

      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json"
          },

          body: JSON.stringify(form)
        }
      );

      if (!response.ok) {
        throw new Error("Registration failed");
      }

      const newUser = await response.json();


      setUsers((prevUsers) => [...prevUsers, newUser]);

      setForm({
        name: "",
        email: "",
        phone: "",
        username: ""
      });

    } catch (err) {
      setError("Something went wrong. Please try again.");
    }
  };

  return (
    <div>

      <h2>User Registration</h2>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          value={form.name}
          onChange={handleChange}
        />

        <br /><br />

        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          value={form.email}
          onChange={handleChange}
        />

        <br /><br />

        <input
          type="text"
          name="phone"
          placeholder="Enter Phone Number"
          value={form.phone}
          onChange={handleChange}
        />

        <br /><br />

        <input
          type="text"
          name="username"
          placeholder="Enter Username"
          value={form.username}
          onChange={handleChange}
        />

        <br /><br />

        <button type="submit">Register</button>

      </form>

      {error && <p>{error}</p>}

      <h2>Registered Users</h2>

      <table border="1">

        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Username</th>
          </tr>
        </thead>

        <tbody>

          {users.map((user, index) => (

            <tr key={`${user.id}${index}`}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>{user.username}</td>
            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
};

export default App;
