import { Inter } from 'next/font/google'
import {Layout} from '@/components'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })
const navitems:Array<string> =['"software developer"','"react fanatic"','"next.js warrior"','"Open source contributer']

export default function Home() {
  return (
    <Layout >
      <div className='text-white flex flex-col justify-center min-h-full'>
        <div>
        <span className='h text-[#e1e1ff]'>{'//'}Hi, my name is</span>
        <h1 className='text-[2.5rem]'>praveen kumar potturi</h1>
        <br />
        <div>
          <h1>$tl_dr <span className='text-[#F29E74]'>=</span>{' {'}</h1>
          <ul className='ml-6'>
          {navitems.map((i,index)=>(
            <li key={index}>[<span className="text-[#FFC85C]">{index}</span>] <span className="text-[#F29E74]">=&gt;</span> <span className="text-[#BAE67E]">{i}</span>,</li>
          ))}
          </ul>
          <h1>{'}'}</h1>
        </div>
        <button className='border border-blue-600  px-3 py-1 mt-4 ' type='button'>More About Me</button>
        </div>
      </div>
    </Layout>
  )
}
