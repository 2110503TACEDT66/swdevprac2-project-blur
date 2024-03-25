import Link from 'next/link';
import styles from './topmenu.module.css'

export default function TopMenuItem ({ title, pageRef}:{title:string, pageRef:string}){
  return (
    <Link className="w-32 text-center mx-2 my-2 font-mono text-sm" href={pageRef}>
      {title}
    </Link>
  ); 
}