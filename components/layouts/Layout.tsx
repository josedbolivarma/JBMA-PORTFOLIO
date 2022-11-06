import Head from "next/head";
import { FC } from "react"
import { Footer, Navbar } from "../ui";

interface Props {
    title?: string;
    children: React.ReactNode;
}

export const Layout: FC<Props> = ({ title = 'My Portfolio', children }) => {
  return (
    <div>
        <Head>
            <title>{title}</title>
        </Head>
        <Navbar />
        <main>
            { children }
        </main>
        <Footer />
    </div>
  )
}
