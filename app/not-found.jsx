import Link from "next/link";

const NotFound = () => {
  return (
    <>
        <h1>This page does not exist!</h1>
        <Link href='/'>Go Back</Link>
    </>
  )
}

export default NotFound