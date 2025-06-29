# Welcome to Namaste React Repo

> What is CDN ? 

```
CDN ka matlab hai Content Delivery Network.

Short me samjhein to:
CDN ek network hota hai servers ka, jo duniya ke alag-alag jagah par hote hain. Ye servers aapki website ka data (images, videos, CSS, JS, etc.) user ke najdeek wale server se deliver karte hain, taaki website jaldi load ho aur kam latency ho.
👉 Fayda:

Fast loading

Kam bandwidth use

Zyada uptime

Traffic ka better management

```

>What is the difference between Library and Framework ?

```
📚 Library – Definition & Explanation
Definition: Library ek pre-written code ka collection hota hai jo specific task (jaise DOM handling, API calls, UI components) ko asaan banata hai.

Explanation:
Library me aap decide karte ho ki kab aur kaise use karna hai.
Aap apne code me library ke functions ko call karte ho.
Control aapke paas hota hai.

🧩 Example:
React, Lodash, jQuery
👉 React ek library hai jo sirf UI banane me help karti hai.

🧱 Framework – Definition & Explanation
Definition: Framework ek complete structure ya guideline deta hai jisme aapko code likhna padta hai. Wo aapka flow control karta hai.

Explanation:
Framework decide karta hai ki kaunsa code kab chalega.
Aap uske rules ke hisaab se kaam karte ho.
Control framework ke paas hota hai.

🧩 Example:
Angular, Django, Spring
👉 Angular ek full-fledged framework hai jo UI, routing, state sab handle karta hai.

🔁 Key Difference (One-liner):
"Library me control developer ke paas hota hai, framework me control framework ke paas hota hai — isse Inversion of Control kehte hain."

```

> ⚔️ React vs Angular – Difference with Features??

```
| Feature/Aspect        | **React** 🧩                              | **Angular** 🧱                              |
| --------------------- | ----------------------------------------- | ------------------------------------------- |
| **Type**              | Library (sirf UI ke liye)                 | Full-fledged Framework                      |
| **Developed by**      | Facebook                                  | Google                                      |
| **Language Used**     | JavaScript (with JSX)                     | TypeScript (strict superset of JS)          |
| **Architecture**      | Component-based                           | Component-based + MVC structure             |
| **Learning Curve**    | Easy to moderate                          | Steeper (zyada concepts seekhne padte hain) |
| **DOM Handling**      | Virtual DOM (fast & lightweight)          | Real DOM (but optimized)                    |
| **Data Binding**      | One-way binding                           | Two-way binding                             |
| **Routing**           | Through external library (`react-router`) | Built-in (`@angular/router`)                |
| **State Management**  | Via external tools (Redux, Context API)   | Built-in services, RxJS                     |
| **Performance**       | Fast due to virtual DOM                   | Slightly heavy but optimized                |
| **Community Support** | Huge and active                           | Strong and official                         |
| **Flexibility**       | Zyada flexible (choose your own tools)    | Opinionated (follow Angular style)          |
| **Size**              | Light-weight                              | Heavy (more features built-in)              |

🌟 React Features:
Virtual DOM for fast rendering

JSX (HTML + JS syntax)

Component-based architecture

Unidirectional data flow

Easily integrates with other libraries

Large ecosystem (Redux, React Router, etc.)

🌟 Angular Features:
TypeScript-based (error catching at compile time)

Two-way data binding

Dependency Injection

Built-in routing & HTTP client

RxJS for reactive programming

CLI for fast project scaffolding

Form handling (template-driven + reactive)

🧠 Interview Tip (One-liner Summary):
"React ek UI library hai jisme developer ko zyada freedom milti hai, jabki Angular ek complete framework hai jo har cheez built-in provide karta hai."


```

*** ❌ Disadvantages of Angular over React (Hinglish, Short):
Steep Learning Curve
🔹 Angular seekhna mushkil hai — TypeScript, decorators, RxJS, DI sab sikhna padta hai.

Heavy & Complex
🔹 Bohot saare built-in features hain, jo simple project ke liye overkill lagte hain.

Less Flexibility
🔹 Angular ek strict framework hai, aapko uske rules follow karne padte hain.

Performance (initial load)
🔹 Large bundle size ke wajah se first load React se slow ho sakta hai.

Verbose Syntax
🔹 Code likhne me zyada boilerplate hota hai (zyada likhna padta hai).

Slower Updates
🔹 Kabhi-kabhi major updates backward compatible nahi hote.

🧠 Interview Line:
"Angular powerful hai but React ke mukable complex aur heavy hai — especially beginners ke liye."
***
# 🧰 Git vs GitHub – Explained 

## 🔧 Git kya hai?
**Git** ek **version control system** hai jo aapke code ke **history ko track karta hai**.

### 📌 Git ke Use:
- Code ke versions save karne ke liye  
- Changes ko undo/compare karne ke liye  
- Team me collaborate karne ke liye (local ya remote)

🧠 **Offline tool** hai, aapke computer pe run hota hai.

---

## ☁️ GitHub kya hai?
**GitHub** ek **online platform** hai jahan aap apna Git wala code **store, share aur manage** kar sakte ho.

### 📌 GitHub ke Use:
- Git repositories ko cloud me rakhne ke liye  
- Team ke sath milkar kaam karne ke liye  
- Pull requests, issues, reviews handle karne ke liye  
- Open-source projects contribute karne ke liye

🧠 **GitHub = Git + Social + Cloud**

---

## 🔁 Git vs GitHub – Key Differences

| Feature            | Git (🔧 Tool)                        | GitHub (☁️ Platform)                        |
|--------------------|--------------------------------------|---------------------------------------------|
| Type               | Version Control System               | Code Hosting Platform                        |
| Kaam kya karta hai | Code track & manage karta hai        | Code ko online store & collaborate karata hai|
| Internet required? | ❌ Nahi (mostly offline)             | ✅ Haan (cloud-based)                        |
| Maintained by      | Linus Torvalds (originally)          | Microsoft                                    |
| Examples           | `git init`, `git commit`, `git push` | Create repo, pull request, issues, etc.      |

---

## 🧠 Interview Tip:
> "Git ek tool hai jo code ka version manage karta hai, aur GitHub ek platform hai jahan wo Git repos ko online store aur share kiya ja sakta hai."

# 📦 npm kya hai? (Hinglish)

## 🔹 Definition:
**npm** ka full form hai **Node Package Manager**.  
Ye ek **tool** aur **online library (registry)** hai jo **JavaScript packages** ko manage karta hai.

---

## 🔧 npm ka Use:
- Packages (libraries) **install** karna  
- Apne projects me dependencies **manage** karna  
- Custom packages ko **publish** karna  
- Version control for packages

---

## 📌 Common npm Commands:

| Command                  | Description                          |
|--------------------------|--------------------------------------|
| `npm init`               | Project me npm setup karta hai       |
| `npm install <package>`  | Package install karta hai            |
| `npm start`              | Project run karta hai (agar defined ho) |
| `npm install`            | `package.json` ke according sab install karta hai |
| `npm uninstall <package>`| Package remove karta hai             |

---

## 🧠 Interview Tip:
> "npm ek tool hai jo JavaScript packages ko install aur manage karta hai — especially Node.js projects me."

 * Webpack , Vite and parser are the bundlers whicch budles the code and make clean and ready to production.