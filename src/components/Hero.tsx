
import Image from "next/image"
import { Select } from "./Select"
import ArrowSelectWhite from "@/images/arrow_select_white.png"
import HeroImage from '@/images/hero_image.png'
import Link from "next/link"
import Button from "./Button"

const Hero = () => {
    return (
        <section className="flex justify-center items-center">
            <Image src={HeroImage} alt='' className="min-h-[500px] max-h-[500px] w-full object-cover"/>
            <div className="flex flex-col items-center justify-center absolute text-white">
                <p className="font-semibold text-[15px] drop-shadow-[4px_4px_10px_rgba(0,0,0,0.50)]">ABRA A PORTA DA SUA NOVA CASA</p>
                <h1 className="font-semibold text-[40px] max-mobile:text-[30px] drop-shadow-[4px_4px_10px_rgba(0,0,0,0.50)]">O SEU IMÓVEL IDEAL</h1>
                {/* <Select.Root>
                    <Select.Button 
                        text="TIPO DE IMÓVEL" 
                        icon={ArrowSelectWhite}
                        className="bg-[#085942] w-[209px] h-[30px] text-[20px] text-white mt-2"
                    />
                </Select.Root> */}
                <Link href={"/Empreendimentos"}>
                    <Button text={"Comprar"} className="w-[180px] h-[40px] text-[30px]"/>
                </Link>
            </div>
        </section>
    )
}

export default Hero