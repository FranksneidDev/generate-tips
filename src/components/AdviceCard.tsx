'use client';
import Image from "next/image";
import {useState} from "react";

interface SlipModel {
    id: number;
    advice: string;
}

interface AdviceModel {
    slip: SlipModel;
}

export default function AdviceCard() {
    const [advice, setAdvice] = useState<SlipModel | null>(null);

    async function handleAdvice() {
        try {
            const response = await fetch('https://api.adviceslip.com/advice');
            if (!response.ok) {
                throw new Error('Error al obtener el consejo');
            }
            const data = await response.json();
            console.log(data)
            setAdvice(data.slip);
        } catch (error) {
            console.log(error)
            setAdvice(null);
        }
    }


    return(
        <div className=" lg:w-70 w-80 bg-neutral-dark-grayish-blue p-6 lg:p-10 rounded-xl text-center text-primary-light-cyan relative">
            {advice &&
                <span className="text-primary-neon-green uppercase tracking-widest mb-4 text-md md:text-sm font-medium block">
                    Advice #{advice.id}
                </span>
            }

            <div className=" lg:max-w-xl mb-4 mt-4">
                {!advice &&
                    <blockquote className="text-2xl  font-semibold">
                        Click the button to receive your first advice
                    </blockquote>
                }
                {advice &&
                    <blockquote className="text-2xl  font-semibold">
                        {advice.advice}
                    </blockquote>
                }


            </div>
            <div className=" hidden lg:flex justify-center items-center mt-5 mb-4">
                <Image src="/images/pattern-divider-desktop.svg" alt="pattern-divider" width={350} height={16} className="w-full" />
            </div>
            <div className=" lg:hidden flex justify-center items-center mt-8 mb-8">
                <Image src="/images/pattern-divider-mobile.svg" alt="pattern-divider" width={350} height={16} className="w-full" />
            </div>
            <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 translate-y-1/2">
                <button
                    onClick={handleAdvice}
                    className="bg-primary-neon-green p-4 rounded-full hover:bg-primary-neon-green hover:shadow-[0_0_15px_5px_rgba(127,255,0,0.7)] active:shadow-[0_0_25px_10px_rgba(127,255,0,1)] transition-shadow duration-300 ease-in-out"
                >
                    <Image src="/images/icon-dice.svg" alt="icon-dice" width={24} height={24} />
                </button>
            </div>
        </div>
    );
}