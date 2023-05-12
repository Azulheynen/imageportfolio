import Head from "next/head";
import Link from "next/link";
import { Tab } from "@headlessui/react";



const tabs = [
  {
    key:'all',
    display: 'All'
  },
  {
    key:'digital',
    display:'Digital'
  },

  {
    key:'byhand',
    display:'Byhand'
  },
]

export default function Home() {
  return (
    <div className=" flex flex-col h-full bg-[url('/fotodos.avif')] bg-cover ">
      <Head>
        <title>my portfolio </title>
        <meta></meta>
        <link></link>
      </Head>
      <header className="flex justify-between items-center h-[70px] px-6">
        <div className="text transparent">hm</div>
        <div>Portfolio</div>
        <Link
          href="#"
          className="rounded-3xl bg-white text-stone-700 px-3 py-2 hover:bg-opacity-90"
        >
          <button>Get in touch</button>
        </Link>
      </header>

      <main className="grow">
        <div className="flex flex-col items-center">
          <Tab.Group>
            <Tab.List className="flex items center gap-24">

            {tabs.map(tab => (
                <Tab key={tab.key}>
                {({ selected }) => (
                  <span className={selected ? 'text-white' : 'text-stone-600'}>
                    {tab.display}
                  </span>
                )}
              </Tab>

            ))}
            </Tab.List>
            <Tab.Panels>
              <Tab.Panel>All Images</Tab.Panel>
              <Tab.Panel>Digital</Tab.Panel>
              <Tab.Panel>By hand </Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </div>
      </main>
      <footer className="h-[60px]">
        <p>footer</p>
      </footer>
    </div>
  );
}
