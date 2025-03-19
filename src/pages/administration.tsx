import '@/styles/globals.css'
import Header from "@/components/header";

export default function Administration(){
    
    return (
        <>
            <Header navItems={[]}/>
            <div className='mx-auto my-4 text-lg w-max'>CRUD of Products.</div>
        </>
    );
}