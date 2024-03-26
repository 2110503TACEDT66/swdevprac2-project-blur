export default async function userRegister(userName:string, userTel:string, userEmail:string, userPassword:string){

  const response = await fetch("http://localhost:5000/api/v1/auth/register", {
      method: "POST",
      headers: {
          "Content-Type": "application/json",
      },
      body: JSON.stringify({
          name: userName,
          tel: userTel,
          email: userEmail,
          password: userPassword,
          role: "user" 
      }),
  })
  if(!response.ok) {
    throw new Error("Failed to Register")
  }
  return await response.json()
}