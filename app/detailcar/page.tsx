"use client"
import SecondMain from "../components/SecondMain";
import Link from "next/link";



interface CardzProps {
    name: string;
    type: string;
    src: string;
    capicity: string;
    pplecap: string;
    price: string;
}


const Cardz = (props: CardzProps) => {

    return (
        <div className='w-1/4.1 my-10 bg-[#FFFFFF] flex flex-col justify-center'>
            <div className='flex items-start justify-around p-4 '>
                <div className='flex flex-col'>
                    <h1 className='font-bold text-xl'>{props.name}</h1>
                    <h2 className='text-[#90A3BF]'>{props.type}</h2>
                </div>
                <span>
                    <i className="ri-heart-line text-lg"></i>
                </span>
            </div>
            <div className='p-6 flex justify-center items-center h-[30vh]'>
                <img className="" src={props.src} alt='carimg' width={250} height={250} />
            </div>
            <div className='flex justify-center items-center gap-4'>
                <span className='flex gap-1 text-lg text-[#90A3BF]'>
                    <i className="ri-gas-station-line"></i>
                    {props.capicity}
                </span>
                <span className='flex gap-1 text-lg text-[#90A3BF]'>
                    <i className="ri-steering-line"></i>
                    manual
                </span>
                <span className='flex gap-1 text-lg text-[#90A3BF]'>
                    <i className="ri-user-line"></i>
                    <span>{props.pplecap}</span> people

                </span>
            </div>
            <div className='flex items-center justify-around py-6'>
                <div>
                    <span className='font-bold text-2xl '>$</span>< span className='font-bold text-2xl'>{props.price}</span><span>day</span>
                </div>
                <Link
        href={{
          pathname:  "/rentcar", // The path to rentcar
          query: {  // Passing the query params to rentcar
            name: props.name,
            type: props.type,
            capacity: props.capicity,
            peopleCapacity: props.pplecap,
            price: props.price,
            src: props.src,
          },
        }} >
               <button  className="bg-[#3563E9] text-white rounded-lg p-4 py-2">Rent Now</button>
                </Link>
            </div>

        </div>
    )
}





const DetailCar = () => {
    return (
        <div className="flex ">
            <div className="w-1/5 lg:block hidden h-full ">
                <div className="flex flex-col gap-2 items-start p-10 gap-y-6">
                    <p className="text-[#90A3BF]">
                        TYPE
                    </p>
                    <div ><span><input type="checkbox" /></span> <span>sport</span></div>
                    <div ><span><input type="checkbox" /></span> <span>SUV</span></div>
                    <div ><span><input type="checkbox" /></span> <span>MPV</span></div>
                    <div ><span><input type="checkbox" /></span> <span>Sedan</span></div>
                    <div ><span><input type="checkbox" /></span> <span>Coupe</span></div>
                    <div ><span><input type="checkbox" /></span> <span>Hatchback</span></div>
                </div>
                <div className="flex flex-col gap-2 items-start p-8 gap-y-3">
                    <p className="text-[#90A3BF]">
                        CAPACITY
                    </p>
                    <div ><span><input type="checkbox" /></span> <span>2 persons</span></div>
                    <div ><span><input type="checkbox" /></span> <span>4 persons</span></div>
                    <div ><span><input type="checkbox" /></span> <span>6 persons</span></div>
                    <div ><span><input type="checkbox" /></span> <span>8 persons</span></div>
                </div>
                <div className="flex flex-col justify-center items-start p-10">
                    <p className="py-5 text-[#90A3BF]">PRICE</p>
                    <input type="range" className="w-[200px]" />
                    <p className="text-[#90A3BF]">Max. $100.00</p>
                </div>
            </div>
            <div className="py-10 px-5 bg-[#F6F7F9]">
                <SecondMain ></SecondMain>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                    <Cardz type="sports" name="Koenigsegg" src="/images/car1.png" capicity='90L' pplecap="2" price="99" />
                    <Cardz type="sports" name="Nissan GT-R" src="/images/car2.png" capicity='80L' pplecap="2" price="80" />
                    <Cardz type="sedan" name="Rolls - Royce" src="/images/car3.png" capicity='70L' pplecap="4" price="96" />
                    <Cardz type="SUv" name="All New Rush" src="/images/car4.png" capicity='70L' pplecap="6" price="72" />
                    <Cardz type="SUV" name="CR - V" src="/images/car5.png" capicity='80L' pplecap="6" price="80" />
                    <Cardz type="SUV" name="All New Terios" src="/images/car6.png" capicity='90L' pplecap="6" price="74" />
                    <Cardz type="SUV" name="New MG ZS" src="/images/car9.png" capicity='80L' pplecap="6" price="80" />
                    <Cardz type="sedan" name="MG ZX Exclusice" src="/images/car8.png" capicity='90L' pplecap="2" price="99" />
                    <Cardz type="SUV" name="New MG ZS" src="/images/car9.png" capicity='80L' pplecap="6" price="80" />
                </div>
                <div className='flex justify-center items-center py-10'>
                    <button className='bg-[#3563E9] text-white rounded-lg p-4 py-2'>show more cars</button>
                </div>
            </div>
        </div>
    );
};

export default DetailCar;
