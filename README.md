# 📦 Simple Docker + GitHub Actions CI/CD

🚫 _“It works on my machine”_ — not anymore.

This is a mini DevOps project demonstrating how to set up a simple CI/CD pipeline using **Docker** and **GitHub Actions** to build and run a Node.js application automatically on each push.

---

## 🔧 Problem It Solves

- Manual setup of environments  
- Inconsistent behavior across machines  
- Lack of automation in app deployment  

This project automates the development workflow, ensuring that your application builds and runs the same way — every time.

---

## ⚙️ Tech Stack

- **Node.js** – Backend runtime  
- **Docker** – For containerizing the app  
- **GitHub Actions** – For CI/CD pipeline  
- **Ubuntu Runner** – Hosted build environment

---

## 🚀 What the CI/CD Pipeline Does

On every push to the `main` branch:

1. 🔄 Checks out the code  
2. 🔧 Sets up Node.js environment  
3. 📦 Installs project dependencies  
4. 🐳 Builds a Docker image  
5. ▶️ Runs the Docker container  
6. ✅ Verifies the container is running  
