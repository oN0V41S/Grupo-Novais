import Header from "@/components/header";

interface navItemsProps {
  label: string;
  href: string
}

export default function Home() {
  const dataNavItems = [
    { label:'Home', href: '/'},
    { label:'Administration', href: '/'}
  ];

  return (
    <main>
      <Header navItems={dataNavItems}/>
    </main>
  );
}
