import Navbar from "@/components/navbar";
import {Open_Sans} from  "next/font/google";
export const metadata = {
  title: "Home - SimpleBlog",
  description: "Generated by Next.js",
};

const openSans = Open_Sans({
  styles: ['light','regular', 'italic'],
  subsets:['latin']
})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={openSans.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
