import Image from "next/image";


export default function Rounded({imgPath, href}){

    return (
        <a 
                target="_blank" 
                rel="noreferrer"
                href={href} 
                className="rounded-full bg-center bg-cover bg-no-repeat shadow-md hover:shadow-lg hover:scale-105 transform duration-500 z-20 flex-none h-10 w-10"
            >
        <Image src={imgPath} width="40" height="40" className="rounded-full">
        </Image>
            </a>
    )

}