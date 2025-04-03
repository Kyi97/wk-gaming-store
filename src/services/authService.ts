export const mockLogin = (username: string, password: string) => {
  if (username === "admin" && password === "password") {
    const user = { id: 1, name: "Kyi", username: "admin" };
    const token = "fake-jwt-token";
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("token", token);
    return { user, token };
  } else {
    throw new Error("Invalid credentials");
  }
};

export const mockLogout = () => {
  localStorage.removeItem("user");
  localStorage.removeItem("token");
};
