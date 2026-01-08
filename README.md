# Tote Bags Shop - E-commerce Platform 🇨🇷

A high-performance, mobile-first e-commerce application tailored for the Costa Rican market. Built with a focus on Site Reliability Engineering (SRE) principles: scalability, clean state management, and seamless user experience.

## 🚀 Features
- **Dynamic Product Catalog:** Responsive grid layout with category filtering.
- **Optimized Shopping Cart:** Real-time state management using React Context API.
- **SINPE Móvil Integration:** Custom checkout flow generating unique Order IDs and automated WhatsApp notification strings.
- **Mobile-First Design:** Fully responsive UI built with Tailwind CSS.

## 🛠️ Tech Stack
- **Frontend:** Next.js (App Router), TypeScript, Tailwind CSS.
- **State Management:** React Context API.
- **Deployment (Planned):** Google Cloud Platform (Cloud Run, Firestore, Cloud Build).

## 📈 Architecture & SRE Principles
This project follows a decoupled architecture to allow for future migrations. 
- **Idempotency:** Unique Order IDs (#TB-XXXX) ensure payment reconciliation is error-free.
- **User Experience:** Encoded URI strings for WhatsApp integration to reduce customer friction.
- **Scalability:** Container-ready structure for GCP deployment.

## Home Page:
![Home Page 1](./github_screenshots/home1.png)
![Home Page 2](./github_screenshots/home2.png)
![Home Page 3](./github_screenshots/home3.png)

## Hamburger Menu
![Hamburger Menu](./github_screenshots/hamburger.png)

## Products section
![Products Section](./github_screenshots/products.png)

## Shopping Bag
![Shopping Bag](./github_screenshots/cart.png)

## Checkout
![Checkout](./github_screenshots/checkout.png)

## Thank You
![Thank You](./github_screenshots/thanksforshopping.png)

## FAQ
![FAQ](./github_screenshots/faq.png)

## Contact
![Contact](./github_screenshots/contact.png)