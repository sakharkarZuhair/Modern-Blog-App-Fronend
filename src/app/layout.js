import "tailwindcss/tailwind.css";
import "./styles/globals.scss";
// import { useState } from "react";
import { Layout } from ".";

export const metadata = {
  title: "Modern Blog NextJS",
  description: "Generated by Zuhair",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
